<template>
  <div>
    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8">
      <!-- Quick Links -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <a
          href="#"
          class="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-2">🏠</div>
          <div class="font-semibold">Nhà đất bán</div>
        </a>
        <a
          href="#"
          class="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-2">🔑</div>
          <div class="font-semibold">Nhà đất cho thuê</div>
        </a>
        <a
          href="#"
          class="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-2">🏗️</div>
          <div class="font-semibold">Dự án bất động sản</div>
        </a>
        <a
          href="#"
          class="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
        >
          <div class="text-2xl mb-2">📊</div>
          <div class="font-semibold">Bảng giá</div>
        </a>
      </div>

      <!-- Featured Properties -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Bất động sản nổi bật</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Property Card 1 -->
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <div class="relative">
              <img
                src="https://placehold.co/600x400"
                alt="Property"
                class="w-full h-48 object-cover"
              />
              <span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm"
                >Hot</span
              >
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Biệt thự cao cấp</h3>
              <p class="text-gray-600 mb-2">123 Đường ABC, Quận 1, TP.HCM</p>
              <div class="flex justify-between items-center mb-2">
                <span class="text-blue-500 font-bold">2.5 tỷ</span>
                <span class="text-gray-500">150m²</span>
              </div>
              <div class="flex items-center text-gray-500 text-sm">
                <span class="mr-4">3 phòng ngủ</span>
                <span class="mr-4">2 phòng tắm</span>
                <span>1 gara</span>
              </div>
            </div>
          </div>

          <!-- Property Card 2 -->
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <div class="relative">
              <img
                src="https://placehold.co/600x400"
                alt="Property"
                class="w-full h-48 object-cover"
              />
              <span class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm"
                >Mới</span
              >
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Căn hộ chung cư</h3>
              <p class="text-gray-600 mb-2">456 Đường XYZ, Quận 7, TP.HCM</p>
              <div class="flex justify-between items-center mb-2">
                <span class="text-blue-500 font-bold">1.2 tỷ</span>
                <span class="text-gray-500">80m²</span>
              </div>
              <div class="flex items-center text-gray-500 text-sm">
                <span class="mr-4">2 phòng ngủ</span>
                <span class="mr-4">1 phòng tắm</span>
                <span>1 bếp</span>
              </div>
            </div>
          </div>

          <!-- Property Card 3 -->
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <div class="relative">
              <img
                src="https://placehold.co/600x400"
                alt="Property"
                class="w-full h-48 object-cover"
              />
              <span
                class="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm"
                >VIP</span
              >
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Đất nền dự án</h3>
              <p class="text-gray-600 mb-2">789 Đường DEF, Quận 9, TP.HCM</p>
              <div class="flex justify-between items-center mb-2">
                <span class="text-blue-500 font-bold">800 triệu</span>
                <span class="text-gray-500">100m²</span>
              </div>
              <div class="flex items-center text-gray-500 text-sm">
                <span class="mr-4">Đất thổ cư</span>
                <span class="mr-4">Sổ đỏ</span>
                <span>Đã quy hoạch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest News -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Tin tức bất động sản</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <img src="https://placehold.co/600x400" alt="News" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Thị trường bất động sản 2024</h3>
              <p class="text-gray-600 text-sm">
                Phân tích xu hướng và dự báo thị trường bất động sản trong năm 2024...
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <img src="https://placehold.co/600x400" alt="News" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Cách đầu tư bất động sản hiệu quả</h3>
              <p class="text-gray-600 text-sm">
                Những bí quyết và chiến lược đầu tư bất động sản hiệu quả trong thời kỳ mới...
              </p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <img src="https://placehold.co/600x400" alt="News" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Phong thủy trong bất động sản</h3>
              <p class="text-gray-600 text-sm">
                Những yếu tố phong thủy cần lưu ý khi mua nhà đất...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Về chúng tôi</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-blue-400">Giới thiệu</a></li>
              <li><a href="#" class="hover:text-blue-400">Liên hệ</a></li>
              <li><a href="#" class="hover:text-blue-400">Tuyển dụng</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-blue-400">Hướng dẫn sử dụng</a></li>
              <li><a href="#" class="hover:text-blue-400">Quy định đăng tin</a></li>
              <li><a href="#" class="hover:text-blue-400">Bảo mật thông tin</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Kết nối</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-blue-400">Facebook</a></li>
              <li><a href="#" class="hover:text-blue-400">Zalo</a></li>
              <li><a href="#" class="hover:text-blue-400">Youtube</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Tải ứng dụng</h3>
            <div class="space-y-2">
              <img src="https://placehold.co/150x50" alt="App Store" class="w-32" />
              <img src="https://placehold.co/150x50" alt="Google Play" class="w-32" />
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2024 BatDongSan.com.vn. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>
