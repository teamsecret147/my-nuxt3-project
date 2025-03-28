export interface Property {
  id: string
  title: string
  description: string
  type: string // 'sale' | 'rent'
  price: number
  area: number
  address: string
  location: string // Quận/Huyện
  coordinates?: {
    // Optional coordinates
    lat: number
    lng: number
  }
  images: string[]
  bedrooms: number
  bathrooms: number
  parking: number
  amenities: string[]
  property360Url?: string
  isFeatured: boolean
  status: string // 'active' | 'pending' | 'sold' | 'rented'
  createdAt: Date
  updatedAt: Date
  userId: string
}
