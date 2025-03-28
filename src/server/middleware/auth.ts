import { defineEventHandler, getCookie, createError } from 'h3'
import * as jwt from 'jsonwebtoken'
import { prisma } from '../db'

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'

// Danh sách các route không cần auth
const publicRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/about',
  '/contact',
  '/properties', // Cho phép xem danh sách BĐS không cần đăng nhập
]

export default defineEventHandler(async (event) => {
  // Skip auth check for public routes
  const isPublicRoute = publicRoutes.some(
    (route) => event.path === route || event.path === route + '/'
  )
  // Skip auth check for GET requests to /api/properties
  const isPublicPropertyRoute = event.path.startsWith('/api/properties') && event.method === 'GET'
  // Skip auth check for home page
  const isHomePage = event.path === '/' || event.path === ''

  if (
    isPublicRoute ||
    isPublicPropertyRoute ||
    isHomePage ||
    event.path.startsWith('/api/auth/login') ||
    event.path.startsWith('/api/auth/register') ||
    event.path.startsWith('/api/auth/forgot-password') ||
    event.path.startsWith('/api/auth/reset-password')
  ) {
    return
  }

  try {
    const token = getCookie(event, 'token')
    if (!token) {
      throw createError({ statusCode: 401, message: 'Unauthorized' })
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
      throw createError({ statusCode: 401, message: 'User not found' })
    }
    // Attach user to event context
    event.context.user = user
  } catch (error: any) {
    throw createError({
      statusCode: 401,
      message: error.message || 'Unauthorized',
    })
  }
})
