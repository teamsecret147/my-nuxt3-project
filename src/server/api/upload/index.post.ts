import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'
import { defineEventHandler, createError, readMultipartFormData } from 'h3'

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

    // Get the file from form data
    const formData = await readMultipartFormData(event)
    if (!formData?.length) {
      throw createError({
        statusCode: 400,
        message: 'No file uploaded',
      })
    }

    const file = formData[0]
    if (!file.filename || !file.type?.startsWith('image/')) {
      throw createError({
        statusCode: 400,
        message: 'Invalid file type. Only images are allowed.',
      })
    }

    // Generate unique filename
    const ext = file.filename.split('.').pop()
    const filename = `${randomUUID()}.${ext}`

    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadDir, { recursive: true })

    // Save file to uploads directory
    await writeFile(join(uploadDir, filename), file.data)

    // Return the URL
    return {
      url: `/uploads/${filename}`,
    }
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
})
