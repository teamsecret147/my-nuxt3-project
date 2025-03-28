import { createError, defineEventHandler, readBody } from 'h3'
import { hash } from 'bcrypt'
import { prisma } from '../../db'

export default defineEventHandler(async (event) => {
  try {
    const { email, password, name } = await readBody(event)

    if (!email || !password) {
      throw createError({ statusCode: 400, message: 'Email và mật khẩu là bắt buộc' })
    }

    // Kiểm tra xem email đã tồn tại chưa
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw createError({ statusCode: 400, message: 'Email đã tồn tại' })
    }

    // Mã hóa mật khẩu
    const hashedPassword = await hash(password, 10)

    // Tạo user mới
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    return { message: 'Đăng ký thành công' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Có lỗi xảy ra',
    })
  }
})
