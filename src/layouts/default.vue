<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-2xl font-bold text-blue-600">🏠</span>
            <span class="text-xl font-semibold">BatDongSan</span>
          </NuxtLink>

          <!-- Navigation -->
          <div class="hidden md:flex items-center space-x-6">
            <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 transition-colors">
              Trang chủ
            </NuxtLink>
            <NuxtLink to="/properties" class="text-gray-600 hover:text-gray-900 transition-colors">
              Mua/Thuê
            </NuxtLink>
            <NuxtLink
              to="/properties/create"
              class="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Đăng tin
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900 transition-colors">
              Giới thiệu
            </NuxtLink>
            <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900 transition-colors">
              Liên hệ
            </NuxtLink>
          </div>

          <!-- User Menu -->
          <div class="flex items-center space-x-4">
            <button
              v-if="!isAuthenticated"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              @click="navigateToLogin"
            >
              Đăng nhập
            </button>
            <div v-else v-click-outside="closeUserMenu" class="relative">
              <button
                class="flex items-center space-x-2 focus:outline-none"
                @click="toggleUserMenu"
              >
                <img
                  :src="user?.image || '/images/default-avatar.png'"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full object-cover"
                />
                <span class="text-gray-700">{{ user?.name || 'User' }}</span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <div
                v-if="showUserMenu"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
              >
                <NuxtLink to="/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Tài khoản
                </NuxtLink>
                <NuxtLink
                  to="/properties/my-listings"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Tin đã đăng
                </NuxtLink>
                <NuxtLink to="/saved" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Tin đã lưu
                </NuxtLink>
                <hr class="my-2" />
                <button
                  class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  @click="handleLogout"
                >
                  Đăng xuất
                </button>
              </div>
            </div>

            <!-- Mobile Menu Button -->
            <button
              class="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
              @click="toggleMobileMenu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  v-if="showMobileMenu"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="md:hidden mt-4 border-t pt-4 space-y-4">
          <NuxtLink to="/" class="block text-gray-600 hover:text-gray-900 transition-colors">
            Trang chủ
          </NuxtLink>
          <NuxtLink
            to="/properties"
            class="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Mua/Thuê
          </NuxtLink>
          <NuxtLink
            to="/properties/create"
            class="block text-gray-600 hover:text-gray-900 transition-colors"
          >
            Đăng tin
          </NuxtLink>
          <NuxtLink to="/about" class="block text-gray-600 hover:text-gray-900 transition-colors">
            Giới thiệu
          </NuxtLink>
          <NuxtLink to="/contact" class="block text-gray-600 hover:text-gray-900 transition-colors">
            Liên hệ
          </NuxtLink>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Về chúng tôi</h3>
            <p class="text-gray-400">
              BatDongSan - Nền tảng đăng tin bất động sản uy tín hàng đầu Việt Nam
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/properties" class="text-gray-400 hover:text-white transition-colors">
                  Tìm bất động sản
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/properties/create"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Đăng tin
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/news" class="text-gray-400 hover:text-white transition-colors">
                  Tin tức
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/faq" class="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms" class="text-gray-400 hover:text-white transition-colors">
                  Điều khoản sử dụng
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/privacy" class="text-gray-400 hover:text-white transition-colors">
                  Chính sách bảo mật
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul class="space-y-2 text-gray-400">
              <li>📍 123 Đường ABC, Quận 1, TP.HCM</li>
              <li>📞 1900 1234</li>
              <li>✉️ support@batdongsan.com</li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>2024 BatDongSan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const showMobileMenu = ref(false)
const showUserMenu = ref(false)

const isAuthenticated = computed(() => authStore.isAuthenticated)
const user = computed(() => authStore.user)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const closeUserMenu = () => {
  showUserMenu.value = false
}

const navigateToLogin = () => {
  router.push('/login')
}

const handleLogout = async () => {
  try {
    await authStore.handleLogout()
    router.push('/login')
  } catch (error) {
    console.error('Error logging out:', error)
  }
}

// Close menus when route changes
watch(
  () => router.currentRoute.value,
  () => {
    showMobileMenu.value = false
    showUserMenu.value = false
  }
)
</script>

<style>
.router-link-active {
  color: #2563eb; /* blue-600 */
}
</style>
