import { createError, defineEventHandler, getCookie, deleteCookie } from 'h3'
import { prisma } from '../../db'

export default defineEventHandler(async (event) => {
  try {
    const refreshToken = getCookie(event, 'refreshToken')
    if (refreshToken) {
      // Xóa refresh token khỏi database
      await prisma.user.updateMany({
        where: {
          refreshToken,
        },
        data: {
          refreshToken: null,
          updatedAt: new Date(),
        },
      })
    }

    // Xóa cookies
    deleteCookie(event, 'token')
    deleteCookie(event, 'refreshToken')

    return { message: 'Đăng xuất thành công' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Có lỗi xảy ra',
    })
  }
})
