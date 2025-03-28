# Build stage
FROM node:18 as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build application
RUN npm run build

# Production stage
FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy built application and migrations
COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/prisma ./prisma

# Create a startup script
RUN echo '#!/bin/sh\nnpx prisma generate\nnpx prisma migrate deploy\nnode .output/server/index.mjs' > /app/start.sh
RUN chmod +x /app/start.sh

# Expose port
EXPOSE 3000

# Start the application
CMD ["/app/start.sh"] 