import { createError, defineEventHandler, readBody, setCookie } from 'h3'
import { compare } from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { prisma } from '../../db'

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET || 'your_refresh_secret_key'

export default defineEventHandler(async (event) => {
  try {
    const { email, password, rememberMe } = await readBody(event)

    // Lấy thông tin user từ database
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user || !(await compare(password, user.password))) {
      throw createError({
        statusCode: 401,
        message: 'Sai email hoặc mật khẩu',
      })
    }

    // Tạo access token với thời gian hết hạn 1 giờ
    const accessToken = jwt.default.sign({ userId: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    })

    // Tạo refresh token với thời gian hết hạn dựa vào rememberMe
    const refreshTokenExpiresIn = rememberMe ? '30d' : '7d'
    const refreshToken = jwt.default.sign(
      { userId: user.id, email: user.email },
      REFRESH_SECRET_KEY,
      {
        expiresIn: refreshTokenExpiresIn,
      }
    )

    // Lưu refresh token vào database
    await prisma.user.update({
      where: { id: user.id },
      data: {
        refreshToken,
        updatedAt: new Date(),
      },
    })

    // Lưu access token và refresh token vào cookie HTTP-only
    setCookie(event, 'token', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60, // 1 giờ
      secure: process.env.NODE_ENV === 'production',
    })

    setCookie(event, 'refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7, // 30 ngày hoặc 7 ngày
      secure: process.env.NODE_ENV === 'production',
    })

    return {
      message: 'Đăng nhập thành công',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Có lỗi xảy ra',
    })
  }
})
