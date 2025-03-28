import { defineEventHandler, createError } from 'h3'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const sampleUser = {
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'admin',
}

export default defineEventHandler(async (event) => {
  try {
    const user = await prisma.user.create({
      data: sampleUser,
    })

    return {
      message: 'Sample user created successfully',
      user,
    }
  } catch (error) {
    console.error('Error creating sample user:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create sample user',
    })
  }
})
