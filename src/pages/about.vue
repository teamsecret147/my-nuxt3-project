<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div class="absolute inset-0">
        <img src="/images/bds1.jpg" alt="About Us" class="w-full h-full object-cover opacity-30" />
      </div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-3xl text-white">
          <h1 class="text-5xl font-bold mb-6">Về Chúng Tôi</h1>
          <p class="text-xl opacity-90">
            Đối tác tin cậy của bạn trong hành trình tìm kiếm và đầu tư bất động sản
          </p>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div class="bg-blue-50 p-10 rounded-3xl">
            <div class="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
              <i class="fas fa-eye text-4xl text-blue-600"></i>
            </div>
            <h2 class="text-3xl font-bold mb-6">Tầm Nhìn</h2>
            <p class="text-gray-600 leading-relaxed">
              Trở thành nền tảng bất động sản hàng đầu tại Việt Nam, mang đến trải nghiệm tìm kiếm
              và giao dịch bất động sản đơn giản, an toàn và hiệu quả cho mọi khách hàng.
            </p>
          </div>
          <div class="bg-blue-50 p-10 rounded-3xl">
            <div class="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
              <i class="fas fa-bullseye text-4xl text-blue-600"></i>
            </div>
            <h2 class="text-3xl font-bold mb-6">Sứ Mệnh</h2>
            <p class="text-gray-600 leading-relaxed">
              Kiến tạo một hệ sinh thái bất động sản toàn diện, kết nối người mua và người bán, đồng
              thời cung cấp thông tin minh bạch và dịch vụ chuyên nghiệp.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-4xl font-bold mb-6">Câu Chuyện Của Chúng Tôi</h2>
          <p class="text-gray-600 text-lg">Hành trình phát triển và những dấu mốc quan trọng</p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-12">
            <div class="flex items-center gap-8">
              <div
                class="w-32 h-32 shrink-0 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6"
              >
                <span class="text-3xl font-bold text-blue-600">2020</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-3">Khởi Đầu Hành Trình</h3>
                <p class="text-gray-600">
                  Thành lập với sứ mệnh đổi mới cách thức giao dịch bất động sản tại Việt Nam
                </p>
              </div>
            </div>
            <div class="flex items-center gap-8">
              <div
                class="w-32 h-32 shrink-0 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6"
              >
                <span class="text-3xl font-bold text-blue-600">2021</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-3">Phát Triển Mạnh Mẽ</h3>
                <p class="text-gray-600">
                  Mở rộng thị trường, phát triển đội ngũ chuyên gia và nâng cao chất lượng dịch vụ
                </p>
              </div>
            </div>
            <div class="flex items-center gap-8">
              <div
                class="w-32 h-32 shrink-0 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6"
              >
                <span class="text-3xl font-bold text-blue-600">2022</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-3">Đổi Mới Công Nghệ</h3>
                <p class="text-gray-600">
                  Ứng dụng công nghệ tiên tiến, ra mắt nền tảng trực tuyến hiện đại
                </p>
              </div>
            </div>
            <div class="flex items-center gap-8">
              <div
                class="w-32 h-32 shrink-0 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6"
              >
                <span class="text-3xl font-bold text-blue-600">2023</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-3">Dẫn Đầu Thị Trường</h3>
                <p class="text-gray-600">
                  Trở thành một trong những nền tảng bất động sản được tin cậy nhất tại Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6">Giá Trị Cốt Lõi</h2>
          <p class="text-gray-600 text-lg">
            Những giá trị định hình văn hóa và cách thức hoạt động của chúng tôi
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-8 rounded-3xl text-center group hover:bg-blue-50 transition-all">
            <div
              class="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-all group-hover:scale-110 group-hover:rotate-6"
            >
              <i class="fas fa-heart text-3xl text-blue-600"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Tận Tâm</h3>
            <p class="text-gray-600">
              Luôn đặt lợi ích của khách hàng lên hàng đầu và nỗ lực mang đến dịch vụ tốt nhất
            </p>
          </div>
          <div class="bg-gray-50 p-8 rounded-3xl text-center group hover:bg-blue-50 transition-all">
            <div
              class="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-all group-hover:scale-110 group-hover:rotate-6"
            >
              <i class="fas fa-shield-alt text-3xl text-blue-600"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Uy Tín</h3>
            <p class="text-gray-600">
              Cam kết minh bạch thông tin và đảm bảo quyền lợi cho mọi khách hàng
            </p>
          </div>
          <div class="bg-gray-50 p-8 rounded-3xl text-center group hover:bg-blue-50 transition-all">
            <div
              class="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-all group-hover:scale-110 group-hover:rotate-6"
            >
              <i class="fas fa-rocket text-3xl text-blue-600"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Sáng Tạo</h3>
            <p class="text-gray-600">
              Không ngừng đổi mới và áp dụng công nghệ tiên tiến vào dịch vụ
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6">Đội Ngũ Lãnh Đạo</h2>
          <p class="text-gray-600 text-lg">Những người đồng hành và dẫn dắt công ty phát triển</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-3xl text-center group hover:shadow-xl transition-all">
            <div class="mb-6 relative">
              <img
                src="/images/news-1.jpg"
                alt="CEO"
                class="w-48 h-48 rounded-2xl mx-auto object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-2">Nguyễn Văn A</h3>
            <p class="text-blue-600 mb-4">Giám đốc điều hành</p>
            <div class="flex justify-center gap-4">
              <a href="#" class="text-gray-400 hover:text-blue-600">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-600">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="bg-white p-6 rounded-3xl text-center group hover:shadow-xl transition-all">
            <div class="mb-6 relative">
              <img
                src="/images/news-1.jpg"
                alt="CTO"
                class="w-48 h-48 rounded-2xl mx-auto object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-2">Trần Thị B</h3>
            <p class="text-blue-600 mb-4">Giám đốc công nghệ</p>
            <div class="flex justify-center gap-4">
              <a href="#" class="text-gray-400 hover:text-blue-600">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-600">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="bg-white p-6 rounded-3xl text-center group hover:shadow-xl transition-all">
            <div class="mb-6 relative">
              <img
                src="/images/news-1.jpg"
                alt="COO"
                class="w-48 h-48 rounded-2xl mx-auto object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-2">Lê Văn C</h3>
            <p class="text-blue-600 mb-4">Giám đốc vận hành</p>
            <div class="flex justify-center gap-4">
              <a href="#" class="text-gray-400 hover:text-blue-600">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-600">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="bg-white p-6 rounded-3xl text-center group hover:shadow-xl transition-all">
            <div class="mb-6 relative">
              <img
                src="/images/news-1.jpg"
                alt="CMO"
                class="w-48 h-48 rounded-2xl mx-auto object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-2">Phạm Thị D</h3>
            <p class="text-blue-600 mb-4">Giám đốc marketing</p>
            <div class="flex justify-center gap-4">
              <a href="#" class="text-gray-400 hover:text-blue-600">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-600">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-4xl font-bold mb-6">Hãy Kết Nối Với Chúng Tôi</h2>
          <p class="text-xl opacity-90 mb-12">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trong mọi nhu cầu về bất động sản
          </p>
          <div class="flex justify-center gap-6">
            <a
              href="/contact"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-[1.02]"
            >
              <i class="fas fa-envelope mr-2"></i>
              Liên hệ ngay
            </a>
            <a
              href="tel:1900123456"
              class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-[1.02]"
            >
              <i class="fas fa-phone-alt mr-2"></i>
              1900 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fas,
.fab {
  font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands';
}
</style>
