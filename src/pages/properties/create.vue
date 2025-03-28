<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Đăng tin bất động sản</h1>

        <form class="bg-white rounded-lg shadow-sm p-6" @submit.prevent="handleSubmit">
          <!-- Thông tin cơ bản -->
          <div class="space-y-6">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Thông tin cơ bản</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
                  <input
                    v-model="form.title"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Loại bất động sản</label
                  >
                  <select
                    v-model="form.type"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Chọn loại</option>
                    <option value="apartment">Căn hộ</option>
                    <option value="house">Nhà phố</option>
                    <option value="villa">Biệt thự</option>
                    <option value="land">Đất nền</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Giá và diện tích -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Giá (VNĐ)</label>
                <input
                  v-model="form.price"
                  type="number"
                  required
                  min="0"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Diện tích (m²)</label>
                <input
                  v-model="form.area"
                  type="number"
                  required
                  min="0"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- Địa chỉ -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
              <input
                v-model="form.address"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Quận/Huyện</label>
              <select
                v-model="form.location"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Chọn quận/huyện</option>
                <option v-for="district in districts" :key="district" :value="district">
                  {{ district }}
                </option>
              </select>
            </div>

            <!-- Số phòng -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Số phòng ngủ</label>
                <input
                  v-model="form.bedrooms"
                  type="number"
                  required
                  min="0"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Số phòng tắm</label>
                <input
                  v-model="form.bathrooms"
                  type="number"
                  required
                  min="0"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Chỗ đậu xe</label>
                <input
                  v-model="form.parking"
                  type="number"
                  required
                  min="0"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- Mô tả -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Mô tả chi tiết</label>
              <textarea
                v-model="form.description"
                rows="4"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <!-- Tiện ích -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tiện ích</label>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <label
                  v-for="amenity in amenities"
                  :key="amenity"
                  class="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    v-model="form.amenities"
                    :value="amenity"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span class="text-sm text-gray-700">{{ amenity }}</span>
                </label>
              </div>
            </div>

            <!-- Hình ảnh -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Hình ảnh</label>
              <div
                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Tải ảnh lên</span>
                      <input
                        type="file"
                        @change="handleImageUpload"
                        multiple
                        accept="image/*"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">hoặc kéo thả vào đây</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF tối đa 10MB</p>
                </div>
              </div>
              <!-- Preview images -->
              <div v-if="imagePreview.length" class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div
                  v-for="(image, index) in imagePreview"
                  :key="index"
                  class="relative rounded-lg overflow-hidden"
                >
                  <img :src="image" class="w-full h-24 object-cover" />
                  <button
                    class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs"
                    @click="removeImage(index)"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>

            <!-- 360 View URL -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >URL xem 360° (nếu có)</label
              >
              <input
                v-model="form.view360Url"
                type="url"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/360-view"
              />
            </div>
          </div>

          <!-- Submit button -->
          <div class="mt-8">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
            >
              {{ isSubmitting ? 'Đang đăng tin...' : 'Đăng tin' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const toast = useToast()

const districts = [
  'Quận 1',
  'Quận 2',
  'Quận 3',
  'Quận 4',
  'Quận 5',
  'Quận 6',
  'Quận 7',
  'Quận 8',
  'Quận 9',
  'Quận 10',
  'Quận 11',
  'Quận 12',
  'Thủ Đức',
  'Bình Thạnh',
  'Gò Vấp',
  'Phú Nhuận',
  'Tân Bình',
  'Tân Phú',
]

const amenities = [
  'Hồ bơi',
  'Phòng gym',
  'Sân vườn',
  'Bảo vệ 24/7',
  'Camera an ninh',
  'Sân chơi trẻ em',
  'BBQ',
  'Nhà hàng',
  'Siêu thị',
  'Trường học',
]

const form = ref({
  title: '',
  type: '',
  price: null,
  area: null,
  address: '',
  location: '',
  bedrooms: null,
  bathrooms: null,
  parking: null,
  description: '',
  amenities: [],
  view360Url: '',
  images: [] as File[],
})

const imagePreview = ref<string[]>([])
const isSubmitting = ref(false)

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    const newFiles = Array.from(input.files)
    form.value.images = [...form.value.images, ...newFiles]

    // Create preview URLs
    newFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          imagePreview.value.push(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    })
  }
}

const removeImage = (index: number) => {
  form.value.images.splice(index, 1)
  imagePreview.value.splice(index, 1)
}

const handleSubmit = async () => {
  try {
    isSubmitting.value = true

    // Upload images first
    const imageUrls = await Promise.all(
      form.value.images.map(async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        // TODO: Implement image upload API
        // const response = await fetch('/api/upload', {
        //   method: 'POST',
        //   body: formData
        // })
        // return response.json()
        return 'https://example.com/image.jpg' // Placeholder
      })
    )

    // Create property listing
    const response = await fetch('/api/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form.value,
        images: imageUrls,
      }),
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error('Có lỗi xảy ra khi đăng tin')
    }

    toast.success('Đăng tin thành công!')
    router.push('/properties')
  } catch (error) {
    toast.error(error instanceof Error ? error.message : 'Có lỗi xảy ra')
  } finally {
    isSubmitting.value = false
  }
}
</script>
