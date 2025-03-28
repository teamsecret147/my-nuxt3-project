import { createError, defineEventHandler, getCookie } from 'h3'
import * as jwt from 'jsonwebtoken'
import { prisma } from '../../db'

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'

export default defineEventHandler(async (event) => {
  try {
    const token = getCookie(event, 'token')
    if (!token) {
      throw createError({ statusCode: 401, message: 'Chưa đăng nhập' })
    }

    const decoded = jwt.default.verify(token, SECRET_KEY) as { userId: string }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (!user) {
      throw createError({ statusCode: 404, message: 'Không tìm thấy người dùng' })
    }

    return { user }
  } catch (error: any) {
    if (error.name === 'JsonWebTokenError') {
      throw createError({ statusCode: 401, message: 'Token không hợp lệ' })
    }
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Có lỗi xảy ra',
    })
  }
})
