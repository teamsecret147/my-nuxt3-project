import { hash } from 'bcrypt'
import { defineEventHandler, readBody, createError } from 'h3'
import { prisma } from '../../db'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { token, password } = body

    if (!token || !password) {
      throw createError({
        statusCode: 400,
        message: 'Token và mật khẩu là bắt buộc',
      })
    }

    // Tìm user với reset token hợp lệ
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gt: new Date(),
        },
      },
    })

    if (!user) {
      throw createError({
        statusCode: 400,
        message: 'Token không hợp lệ hoặc đã hết hạn',
      })
    }

    // Hash mật khẩu mới
    const hashedPassword = await hash(password, 10)

    // Cập nhật mật khẩu và xóa reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    })

    return {
      message: 'Đặt lại mật khẩu thành công',
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Có lỗi xảy ra',
    })
  }
})
