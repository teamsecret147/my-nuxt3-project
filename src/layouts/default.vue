<template>
  <div>
    <!-- Top Bar -->
    <div class="bg-blue-600 text-white py-2">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <span>Hotline: 1900 1234</span>
            <span>Email: support@batdongsan.com</span>
          </div>
          <div class="flex items-center space-x-4">
            <template v-if="!isAuthenticated">
              <NuxtLink to="/login" class="hover:text-blue-200">Đăng nhập</NuxtLink>
              <NuxtLink to="/register" class="hover:text-blue-200">Đăng ký</NuxtLink>
            </template>
            <template v-else>
              <div class="relative group">
                <button class="hover:text-blue-200 flex items-center">
                  {{ user?.name || 'Tài khoản' }}
                  <span class="ml-1">▼</span>
                </button>
                <div
                  class="absolute right-0 hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2 z-50"
                >
                  <NuxtLink to="/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >Thông tin cá nhân</NuxtLink
                  >
                  <NuxtLink
                    to="/my-properties"
                    class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >Tin đã đăng</NuxtLink
                  >
                  <NuxtLink to="/favorites" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >Tin yêu thích</NuxtLink
                  >
                  <button
                    class="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    @click="handleLogout"
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-8">
            <NuxtLink to="/">
              <img src="https://placehold.co/200x60" alt="Logo" class="h-12" />
            </NuxtLink>
            <div class="relative">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                class="w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded"
              >
                Tìm kiếm
              </button>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/post-property"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Đăng tin
            </NuxtLink>
            <NuxtLink
              to="/favorites"
              class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              <span class="mr-2">❤️</span> Yêu thích
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <div class="bg-white border-b">
      <div class="container mx-auto px-4">
        <nav class="flex items-center space-x-8 py-3">
          <NuxtLink to="/" class="text-blue-600 font-semibold">Trang chủ</NuxtLink>
          <div class="relative group">
            <NuxtLink
              to="/properties/sale"
              class="text-gray-600 hover:text-blue-600 flex items-center"
            >
              Nhà đất bán
              <span class="ml-1">▼</span>
            </NuxtLink>
            <div
              class="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2 z-50"
            >
              <NuxtLink
                to="/properties/sale/house"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Nhà riêng</NuxtLink
              >
              <NuxtLink
                to="/properties/sale/apartment"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Căn hộ chung cư</NuxtLink
              >
              <NuxtLink
                to="/properties/sale/land"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Đất nền</NuxtLink
              >
              <NuxtLink
                to="/properties/sale/commercial"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Văn phòng, mặt bằng</NuxtLink
              >
            </div>
          </div>
          <div class="relative group">
            <NuxtLink
              to="/properties/rent"
              class="text-gray-600 hover:text-blue-600 flex items-center"
            >
              Nhà đất cho thuê
              <span class="ml-1">▼</span>
            </NuxtLink>
            <div
              class="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2 z-50"
            >
              <NuxtLink
                to="/properties/rent/house"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Nhà riêng</NuxtLink
              >
              <NuxtLink
                to="/properties/rent/apartment"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Căn hộ chung cư</NuxtLink
              >
              <NuxtLink
                to="/properties/rent/land"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Đất nền</NuxtLink
              >
              <NuxtLink
                to="/properties/rent/commercial"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Văn phòng, mặt bằng</NuxtLink
              >
            </div>
          </div>
          <NuxtLink to="/projects" class="text-gray-600 hover:text-blue-600">Dự án</NuxtLink>
          <NuxtLink to="/news" class="text-gray-600 hover:text-blue-600">Tin tức</NuxtLink>
          <NuxtLink to="/feng-shui" class="text-gray-600 hover:text-blue-600">Phong thủy</NuxtLink>
          <NuxtLink to="/consulting" class="text-gray-600 hover:text-blue-600">Tư vấn</NuxtLink>
          <NuxtLink to="/price-list" class="text-gray-600 hover:text-blue-600">Bảng giá</NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Page Content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const { isAuthenticated, user } = authStore

const handleLogout = async () => {
  try {
    await authStore.handleLogout()
    navigateTo('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>
