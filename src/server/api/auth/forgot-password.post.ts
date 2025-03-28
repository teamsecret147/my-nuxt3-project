import { randomBytes } from 'crypto'
import { defineEventHandler, readBody, createError } from 'h3'
import { prisma } from '../../db'
import { sendResetPasswordEmail } from '../../services/email'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email } = body

    if (!email) {
      throw createError({
        statusCode: 400,
        message: 'Email là bắt buộc',
      })
    }

    // Tìm user với email
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'Không tìm thấy tài khoản với email này',
      })
    }

    // Tạo reset token
    const resetToken = randomBytes(32).toString('hex')
    const resetTokenExpiry = new Date(Date.now() + 3600000) // 1 giờ

    // Lưu reset token vào database
    await prisma.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    })

    // Gửi email với reset link
    const resetUrl = `${process.env.APP_URL}/reset-password?token=${resetToken}`
    await sendResetPasswordEmail(email, resetUrl)

    return {
      message: 'Đã gửi hướng dẫn đặt lại mật khẩu vào email của bạn',
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Có lỗi xảy ra',
    })
  }
})
