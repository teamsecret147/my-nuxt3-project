<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[700px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div class="absolute inset-0">
        <img
          src="/images/bds1.jpg"
          alt="Hero background"
          class="w-full h-full object-cover opacity-30"
        />
      </div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-3xl text-white">
          <h1 class="text-6xl font-bold mb-6 leading-tight">
            Khám Phá <span class="text-yellow-400">Ngôi Nhà</span><br />
            Trong Mơ Của Bạn
          </h1>
          <p class="text-2xl mb-12 leading-relaxed">
            Chúng tôi cung cấp hàng nghìn bất động sản chất lượng cao với mức giá phù hợp trên khắp
            Việt Nam
          </p>
          <!-- Search Form -->
          <div class="bg-white/95 backdrop-blur p-8 rounded-2xl shadow-2xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label class="block text-gray-800 text-sm font-semibold mb-3"
                  >Loại Bất Động Sản</label
                >
                <select
                  v-model="searchType"
                  class="w-full rounded-xl border-gray-200 bg-gray-50 py-3 focus:ring-blue-500"
                >
                  <option value="all">Tất cả loại</option>
                  <option value="sale">Nhà bán</option>
                  <option value="rent">Nhà cho thuê</option>
                  <option value="apartment">Căn hộ</option>
                  <option value="villa">Biệt thự</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-800 text-sm font-semibold mb-3">Khu Vực</label>
                <select
                  v-model="searchLocation"
                  class="w-full rounded-xl border-gray-200 bg-gray-50 py-3 focus:ring-blue-500"
                >
                  <option value="">Chọn khu vực</option>
                  <option value="district1">Quận 1</option>
                  <option value="district2">Quận 2</option>
                  <option value="district3">Quận 3</option>
                  <option value="district4">Quận 4</option>
                  <option value="district5">Quận 5</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-800 text-sm font-semibold mb-3">Mức Giá</label>
                <select
                  v-model="searchPrice"
                  class="w-full rounded-xl border-gray-200 bg-gray-50 py-3 focus:ring-blue-500"
                >
                  <option value="">Chọn mức giá</option>
                  <option value="0-1">Dưới 1 tỷ</option>
                  <option value="1-3">1 - 3 tỷ</option>
                  <option value="3-5">3 - 5 tỷ</option>
                  <option value="5-10">5 - 10 tỷ</option>
                  <option value="10+">Trên 10 tỷ</option>
                </select>
              </div>
            </div>
            <button
              class="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-[1.02] focus:ring-4 ring-blue-500/20"
              @click="handleSearch"
            >
              <i class="fas fa-search mr-2"></i>
              Tìm Kiếm Ngay
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">1,234+</div>
            <div class="text-gray-600">Bất động sản</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">856+</div>
            <div class="text-gray-600">Khách hàng</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div class="text-gray-600">Đại lý</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div class="text-gray-600">Khách hài lòng</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6">Bất Động Sản Nổi Bật</h2>
          <p class="text-gray-600 text-lg">
            Khám phá những bất động sản được quan tâm nhiều nhất trên thị trường hiện nay
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center items-center py-16">
          <div
            class="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"
          ></div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center text-red-600 py-16 bg-red-50 rounded-2xl">
          <i class="fas fa-exclamation-circle text-4xl mb-4"></i>
          <p class="text-lg">{{ error }}</p>
        </div>

        <!-- Properties Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="property in featuredProperties || []"
            :key="property.id"
            class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02]"
          >
            <div class="relative">
              <img
                :src="property.images[0] || '/images/property-placeholder.jpg'"
                :alt="property.title"
                class="w-full h-64 object-cover"
              />
              <div
                class="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                Hot
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-3">{{ property.title }}</h3>
              <p class="text-gray-600 mb-4">
                <i class="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                {{ property.address }}
              </p>
              <div class="flex items-center gap-6 mb-6 text-gray-500">
                <div>
                  <i class="fas fa-bed mr-2"></i>
                  {{ property.bedrooms }} PN
                </div>
                <div>
                  <i class="fas fa-bath mr-2"></i>
                  {{ property.bathrooms }} WC
                </div>
                <div>
                  <i class="fas fa-ruler-combined mr-2"></i>
                  {{ property.area }}m²
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-blue-600">{{
                  formatPrice(property.price)
                }}</span>
                <NuxtLink
                  :to="'/properties/' + property.id"
                  class="px-6 py-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors font-semibold"
                >
                  Xem chi tiết
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="!isLoading && (!featuredProperties || featuredProperties.length === 0)"
          class="text-center py-16 bg-gray-100 rounded-2xl"
        >
          <i class="fas fa-home text-4xl text-gray-400 mb-4"></i>
          <p class="text-gray-600 text-lg">Chưa có bất động sản nổi bật</p>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/properties"
            class="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-[1.02]"
          >
            Xem tất cả bất động sản
            <i class="fas fa-arrow-right ml-2"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6">Tại Sao Chọn Chúng Tôi</h2>
          <p class="text-gray-600 text-lg">
            Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng với những giá trị cốt lõi
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center transform transition-all group-hover:scale-110 group-hover:rotate-6"
            >
              <i class="fas fa-home text-3xl text-blue-600"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Đa dạng lựa chọn</h3>
            <p class="text-gray-600 leading-relaxed">
              Với hàng nghìn bất động sản được cập nhật hàng ngày, chúng tôi tự tin đáp ứng mọi nhu
              cầu của khách hàng
            </p>
          </div>
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center transform transition-all group-hover:scale-110 group-hover:rotate-6"
            >
              <i class="fas fa-shield-alt text-3xl text-blue-600"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">An toàn & Uy tín</h3>
            <p class="text-gray-600 leading-relaxed">
              Mọi thông tin đều được kiểm duyệt kỹ lưỡng, đảm bảo tính minh bạch và bảo vệ quyền lợi
              khách hàng
            </p>
          </div>
          <div class="text-center group">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center transform transition-all group-hover:scale-110 group-hover:rotate-6"
            >
              <i class="fas fa-headset text-3xl text-blue-600"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Hỗ trợ 24/7</h3>
            <p class="text-gray-600 leading-relaxed">
              Đội ngũ chuyên viên giàu kinh nghiệm luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6">Tin Tức Bất Động Sản</h2>
          <p class="text-gray-600 text-lg">
            Cập nhật những tin tức mới nhất về thị trường bất động sản Việt Nam
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="article in latestNews"
            :key="article.id"
            class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02]"
          >
            <img :src="article.image" :alt="article.title" class="w-full h-64 object-cover" />
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-4">{{ article.title }}</h3>
              <p class="text-gray-600 mb-6 line-clamp-3">{{ article.excerpt }}</p>
              <NuxtLink
                :to="'/news/' + article.id"
                class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Đọc thêm
                <i class="fas fa-arrow-right ml-2"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-4xl font-bold mb-6">Đăng Ký Nhận Tin</h2>
          <p class="text-xl mb-12 opacity-90">
            Nhận ngay thông tin mới nhất về bất động sản và các ưu đãi đặc biệt
          </p>
          <form class="flex gap-4" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              placeholder="Nhập email của bạn"
              class="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg"
              required
            />
            <button
              type="submit"
              class="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-all transform hover:scale-[1.02]"
            >
              Đăng ký ngay
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">Bạn Cần Hỗ Trợ?</h2>
          <p class="text-xl text-gray-600 mb-12">
            Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
          <div class="flex justify-center gap-6">
            <a
              href="tel:1900123456"
              class="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <i class="fas fa-phone-alt mr-2"></i>
              1900 123 456
            </a>
            <a
              href="mailto:support@example.com"
              class="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-800 rounded-xl text-lg font-semibold hover:bg-gray-200 transition-all"
            >
              <i class="fas fa-envelope mr-2"></i>
              Gửi Email
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

interface Property {
  id: string
  title: string
  address: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
}

const router = useRouter()
const toast = useToast()

// Search form
const searchType = ref('all')
const searchLocation = ref('')
const searchPrice = ref('')

// Featured properties
const {
  data: featuredProperties,
  pending: isLoading,
  error,
} = await useFetch<Property[]>('/api/properties/featured', {
  onResponseError: (error) => {
    console.error('Error fetching featured properties:', error)
    toast.error('Không thể tải dữ liệu bất động sản nổi bật')
  },
})

// Latest news data
const latestNews = ref([
  {
    id: 1,
    title: 'Xu hướng bất động sản 2024',
    excerpt: 'Những thay đổi và cơ hội mới trong thị trường bất động sản năm 2024',
    image: '/images/news-1.jpg',
  },
  {
    id: 2,
    title: 'Top 5 khu vực tiềm năng để đầu tư',
    excerpt: 'Khám phá những khu vực có tiềm năng tăng giá trong tương lai',
    image: '/images/news-2.jpg',
  },
  {
    id: 3,
    title: 'Kinh nghiệm mua nhà lần đầu',
    excerpt: 'Những điều cần lưu ý khi mua nhà lần đầu tiên',
    image: '/images/news-3.jpg',
  },
])

// Newsletter
const email = ref('')

// Methods
const handleSearch = () => {
  router.push({
    path: '/properties',
    query: {
      type: searchType.value,
      location: searchLocation.value,
      price: searchPrice.value,
    },
  })
}

const handleSubscribe = () => {
  // TODO: Implement newsletter subscription
  console.log('Subscribe:', email.value)
  email.value = ''
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
</script>

<style scoped>
.fas {
  font-family: 'Font Awesome 5 Free';
}
</style>
