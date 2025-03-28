<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div class="absolute inset-0">
        <img
          src="/images/bds1.jpg"
          alt="Contact Us"
          class="w-full h-full object-cover opacity-30"
        />
      </div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-3xl text-white">
          <h1 class="text-5xl font-bold mb-6">Liên Hệ</h1>
          <p class="text-xl opacity-90">
            Hãy để chúng tôi hỗ trợ bạn tìm kiếm bất động sản phù hợp nhất
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-12">
            <div>
              <h2 class="text-3xl font-bold mb-8">Thông Tin Liên Hệ</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0"
                  >
                    <i class="fas fa-map-marker-alt text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Địa Chỉ</h3>
                    <p class="text-gray-600">
                      123 Đường ABC, Phường XYZ<br />
                      Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0"
                  >
                    <i class="fas fa-phone-alt text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Điện Thoại</h3>
                    <p class="text-gray-600">
                      Hotline:
                      <a href="tel:1900123456" class="text-blue-600 hover:underline">1900 123 456</a
                      ><br />
                      Hỗ trợ:
                      <a href="tel:0987654321" class="text-blue-600 hover:underline"
                        >0987 654 321</a
                      >
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0"
                  >
                    <i class="fas fa-envelope text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Email</h3>
                    <p class="text-gray-600">
                      Chung:
                      <a href="mailto:info@example.com" class="text-blue-600 hover:underline"
                        >info@example.com</a
                      ><br />
                      Hỗ trợ:
                      <a href="mailto:support@example.com" class="text-blue-600 hover:underline"
                        >support@example.com</a
                      >
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0"
                  >
                    <i class="fas fa-clock text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Giờ Làm Việc</h3>
                    <p class="text-gray-600">
                      Thứ 2 - Thứ 6: 8:00 - 17:30<br />
                      Thứ 7: 8:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h2 class="text-3xl font-bold mb-8">Kết Nối Với Chúng Tôi</h2>
              <div class="flex gap-4">
                <a
                  href="#"
                  class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <i class="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <i class="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <i class="fab fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href="#"
                  class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <i class="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-3xl shadow-lg">
            <h2 class="text-3xl font-bold mb-8">Gửi Tin Nhắn</h2>
            <form class="space-y-6" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 text-sm font-medium mb-2">Họ và tên</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-medium mb-2">Số điện thoại</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-medium mb-2">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="Nhập địa chỉ email"
                />
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-medium mb-2">Chủ đề</label>
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-blue-500/20 focus:border-blue-500 transition-all"
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="buy">Cần mua/thuê bất động sản</option>
                  <option value="sell">Cần bán/cho thuê bất động sản</option>
                  <option value="support">Yêu cầu hỗ trợ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-medium mb-2">Nội dung</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="Nhập nội dung tin nhắn"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-[1.02] focus:ring-4 ring-blue-500/20"
              >
                <i class="fas fa-paper-plane mr-2"></i>
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold mb-6">Vị Trí Của Chúng Tôi</h2>
          <p class="text-gray-600 text-lg">
            Ghé thăm văn phòng của chúng tôi để được tư vấn trực tiếp
          </p>
        </div>
        <div class="h-[500px] rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197276!2d106.69843661533457!3d10.77772276219451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBLaG9hIEjhu41jIFThu7Egbmhpw6puIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1629789325844!5m2!1svi!2s"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const form = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = async () => {
  try {
    // Thực hiện gửi form ở đây
    console.log('Form submitted:', form.value)

    // Reset form sau khi gửi thành công
    form.value = {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    }

    // Hiển thị thông báo thành công
    toast.success('Tin nhắn của bạn đã được gửi thành công!')
  } catch (error) {
    console.error('Error submitting form:', error)
    toast.error('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.')
  }
}
</script>

<style scoped>
.fas,
.fab {
  font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands';
}
</style>
