// src/middleware/auth.global.ts
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()

  // Check authentication status
  await authStore.checkAuth()

  // Public routes that don't require authentication
  const publicRoutes = ['/login', '/register', '/forgot-password', '/reset-password']

  // Protected routes that require authentication
  const protectedRoutes = ['/profile', '/my-properties', '/favorites', '/post-property']

  // Check if the current route requires authentication
  const isProtectedRoute = protectedRoutes.some((route) => to.path.startsWith(route))
  const isPublicRoute = publicRoutes.includes(to.path)

  // If trying to access protected route without authentication
  if (isProtectedRoute && !authStore.isAuthenticated) {
    return navigateTo('/login')
  }

  // If trying to access login/register while already authenticated
  if (isPublicRoute && authStore.isAuthenticated) {
    return navigateTo('/')
  }
})
