import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const sampleProperties = [
  {
    id: '1',
    title: 'Căn hộ cao cấp Vinhomes Central Park',
    description: 'Căn hộ 3 phòng ngủ view sông tuyệt đẹp, full nội thất cao cấp',
    type: 'sale',
    price: 8500000000,
    area: 110,
    address: '208 Nguyễn Hữu Cảnh, Bình Thạnh',
    location: 'Quận 7',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
    ],
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    amenities: ['Hồ bơi', 'Gym', 'Sân vườn', 'An ninh 24/7'],
    property360Url: null,
    isFeatured: true,
    status: 'active',
    userId: 'cm8s7lxnv0000hy7oh3ubn2yb', // Cập nhật với user hợp lệ
  },
  {
    id: '2',
    title: 'Biệt thự compound Thảo Điền',
    description: 'Biệt thự độc lập 500m2, thiết kế hiện đại, không gian xanh',
    type: 'sale',
    price: 45000000000,
    area: 500,
    address: '15 Quốc Hương, Thảo Điền, Quận 2',
    location: 'Quận 7',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    ],
    bedrooms: 5,
    bathrooms: 6,
    parking: 3,
    amenities: ['Hồ bơi riêng', 'Sân vườn', 'Phòng giải trí', 'Bảo vệ 24/7'],
    isFeatured: true,
    status: 'active',
    property360Url: null,
    userId: 'cm8s7lxnv0000hy7oh3ubn2yb', // Cập nhật với user hợp lệ
  },
  {
    id: '3',
    title: 'Nhà phố Phú Mỹ Hưng',
    description: 'Nhà phố 1 trệt 3 lầu, khu compound an ninh, tiện ích đầy đủ',
    type: 'rent',
    price: 40000000,
    area: 200,
    address: '123 Nguyễn Văn Linh, Quận 7',
    location: 'Quận 7',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
    ],
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    amenities: ['Công viên', 'Trường học', 'Siêu thị', 'Bệnh viện'],
    isFeatured: true,
    status: 'active',
    property360Url: null,
    userId: 'cm8s7lxnv0000hy7oh3ubn2yb', // Cập nhật với user hợp lệ
  },
]

async function main() {
  console.log('Seeding database...')

  for (const property of sampleProperties) {
    await prisma.property.create({
      data: {
        id: property.id,
        title: property.title,
        description: property.description,
        type: property.type,
        price: property.price,
        area: property.area,
        address: property.address,
        location: property.location,
        images: property.images,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        parking: property.parking,
        amenities: property.amenities,
        isFeatured: property.isFeatured,
        status: property.status,
        property360Url: property.property360Url,
        userId: property.userId,
      },
    })
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
