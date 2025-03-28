<template>
  <div class="min-h-screen">
    <!-- Hero Section with 360 View -->
    <div class="relative h-[600px] overflow-hidden">
      <div class="absolute inset-0">
        <iframe
          v-if="show360"
          src="https://my.matterport.com/show/?m=KCxuh2xoYrk"
          class="w-full h-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img
          v-else
          :src="property.images[0]"
          :alt="property.title"
          class="w-full h-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-100` ': show360 }"
        />
      </div>

      <!-- Controls -->
      <div class="absolute bottom-4 right-4 z-20 flex space-x-2">
        <button
          class="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:shadow-lg"
          @click="show360 = !show360"
        >
          <span class="text-xl">🔄</span>
          <span>{{ show360 ? 'Xem ảnh' : 'Xem 360°' }}</span>
        </button>
      </div>
    </div>

    <!-- Property Info -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Title and Price -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6 animate-fade-in">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ property.title }}</h1>
            <div class="flex items-center justify-between">
              <div class="text-2xl font-bold text-blue-600">{{ property.price }}</div>
              <div class="flex items-center space-x-4">
                <button
                  class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Liên hệ
                </button>
                <button
                  class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span class="mr-2">❤️</span> Yêu thích
                </button>
              </div>
            </div>
          </div>

          <!-- Image Gallery -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(image, index) in property.images"
                :key="index"
                class="relative group cursor-pointer overflow-hidden rounded-lg"
                @click="showGallery(index)"
              >
                <img
                  :src="image"
                  :alt="property.title"
                  class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <span class="text-white text-xl">👁️</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Property Details -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Thông tin chi tiết</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="flex items-center space-x-2">
                <span class="text-2xl">🏠</span>
                <div>
                  <div class="text-sm text-gray-500">Loại hình</div>
                  <div class="font-medium">{{ property.type }}</div>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">📏</span>
                <div>
                  <div class="text-sm text-gray-500">Diện tích</div>
                  <div class="font-medium">{{ property.area }}</div>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">🛏️</span>
                <div>
                  <div class="text-sm text-gray-500">Phòng ngủ</div>
                  <div class="font-medium">{{ property.bedrooms }}</div>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">🚿</span>
                <div>
                  <div class="text-sm text-gray-500">Phòng tắm</div>
                  <div class="font-medium">{{ property.bathrooms }}</div>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">🚗</span>
                <div>
                  <div class="text-sm text-gray-500">Chỗ đậu xe</div>
                  <div class="font-medium">{{ property.parking }}</div>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">📍</span>
                <div>
                  <div class="text-sm text-gray-500">Vị trí</div>
                  <div class="font-medium">{{ property.location }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Mô tả</h2>
            <div class="prose max-w-none">
              <p>{{ property.description }}</p>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-4">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Liên hệ</h2>
            <form class="space-y-4" @submit.prevent="handleContact">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
                <input
                  v-model="contactForm.name"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                <input
                  v-model="contactForm.phone"
                  type="tel"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  v-model="contactForm.email"
                  type="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nội dung</label>
                <textarea
                  v-model="contactForm.message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>

          <!-- Similar Properties -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Bất động sản tương tự</h2>
            <div class="space-y-4">
              <div
                v-for="similar in similarProperties"
                :key="similar.id"
                class="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <img
                  :src="similar.image"
                  :alt="similar.title"
                  class="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <div class="font-medium">{{ similar.title }}</div>
                  <div class="text-sm text-gray-500">{{ similar.price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Gallery Modal -->
    <div
      v-if="showGalleryModal"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      @click="showGalleryModal = false"
    >
      <div class="relative max-w-4xl w-full mx-4">
        <img
          :src="property.images[currentImageIndex]"
          :alt="property.title"
          class="w-full h-auto rounded-lg"
        />
        <button
          class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
          @click="showGalleryModal = false"
        >
          ✕
        </button>
        <button
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
          @click="prevImage"
        >
          ‹
        </button>
        <button
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
          @click="nextImage"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Mock data
const property = ref({
  id: '1',
  title: 'Biệt thự cao cấp tại Quận 7',
  price: '12.5 tỷ',
  type: 'Biệt thự',
  area: '200m²',
  bedrooms: '4',
  bathrooms: '3',
  parking: '2',
  location: 'Quận 7, TP.HCM',
  description:
    'Biệt thự cao cấp với thiết kế hiện đại, nội thất sang trọng. Khuôn viên rộng rãi với vườn cây xanh mát. Vị trí thuận tiện, gần các trung tâm thương mại và trường học quốc tế.',
  images: [
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
    'https://placehold.co/800x600',
  ],
})

const property360Url = 'https://example.com/360-view'

const similarProperties = ref([
  {
    id: '2',
    title: 'Biệt thự ven sông',
    price: '15 tỷ',
    image: 'https://placehold.co/200x200',
  },
  {
    id: '3',
    title: 'Căn hộ penthouse',
    price: '8.5 tỷ',
    image: 'https://placehold.co/200x200',
  },
  {
    id: '4',
    title: 'Nhà phố thương mại',
    price: '6.8 tỷ',
    image: 'https://placehold.co/200x200',
  },
])

// State
const show360 = ref(false)
const showGalleryModal = ref(false)
const currentImageIndex = ref(0)
const contactForm = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
})

// Methods
const showGallery = (index: number) => {
  currentImageIndex.value = index
  showGalleryModal.value = true
}

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + property.value.images.length) % property.value.images.length
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % property.value.images.length
}

const handleContact = async () => {
  // Handle contact form submission
  console.log('Contact form submitted:', contactForm.value)
}
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
