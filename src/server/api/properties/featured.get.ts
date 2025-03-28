import { defineEventHandler, createError } from 'h3'
import { prisma } from '../../db'

export default defineEventHandler(async () => {
  try {
    const featuredProperties = await prisma.property.findMany({
      where: {
        isFeatured: true,
        status: 'active',
      },
      take: 6,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    })

    return featuredProperties
  } catch (error) {
    console.error('Error fetching featured properties:', error)
    throw createError({
      statusCode: 500,
      message: 'Error fetching featured properties',
    })
  }
})
