import { createError, defineEventHandler, getCookie, setCookie } from 'h3'
import * as jwt from 'jsonwebtoken'
import { prisma } from '../../db'

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET || 'your_refresh_secret_key'

export default defineEventHandler(async (event) => {
  try {
    // Lấy refresh token từ cookie
    const refreshToken = getCookie(event, 'refreshToken')
    if (!refreshToken) {
      throw createError({ statusCode: 401, message: 'Refresh token không tồn tại' })
    }

    let payload: { userId: string; email: string }
    try {
      payload = jwt.default.verify(refreshToken, REFRESH_SECRET_KEY) as {
        userId: string
        email: string
      }
    } catch (err) {
      throw createError({ statusCode: 401, message: 'Refresh token không hợp lệ' })
    }

    // Kiểm tra user và refresh token trong database
    const user = await prisma.user.findFirst({
      where: {
        id: payload.userId,
        refreshToken,
      },
    })

    if (!user) {
      throw createError({ statusCode: 401, message: 'Refresh token không hợp lệ hoặc đã hết hạn' })
    }

    // Tạo access token mới với thời gian hết hạn 1 giờ
    const newAccessToken = jwt.default.sign({ userId: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    })

    // Cập nhật access token trong cookie
    setCookie(event, 'token', newAccessToken, {
      httpOnly: true,
      maxAge: 60 * 60, // 1 giờ
      secure: process.env.NODE_ENV === 'production',
    })

    return {
      message: 'Refresh token thành công',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Có lỗi xảy ra',
    })
  }
})
