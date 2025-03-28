import { defineEventHandler, createError, readBody } from 'h3'
import { prisma } from '../../db'

export default defineEventHandler(async (event) => {
  try {
    // User is already authenticated by middleware
    const user = event.context.user
    console.log(user)
    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized',
      })
    }

    // Get request body
    const body = await readBody(event)

    // Validate required fields
    const requiredFields = [
      'title',
      'type',
      'price',
      'area',
      'address',
      'location',
      'bedrooms',
      'bathrooms',
      'parking',
      'description',
    ]

    for (const field of requiredFields) {
      if (!body[field]) {
        throw createError({
          statusCode: 400,
          message: `Missing required field: ${field}`,
        })
      }
    }

    // Create property listing
    const property = await prisma.property.create({
      data: {
        title: body.title,
        type: body.type,
        price: parseFloat(body.price),
        area: parseFloat(body.area),
        address: body.address,
        location: body.location,
        bedrooms: parseInt(body.bedrooms),
        bathrooms: parseInt(body.bathrooms),
        parking: parseInt(body.parking),
        description: body.description,
        amenities: body.amenities || [],
        images: body.images || [],
        property360Url: body.view360Url || null,
        userId: user.id,
        status: 'active',
      },
    })

    return property
  } catch (error) {
    console.error('Error creating property:', error)
    throw error
  }
})
