<template>
  <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4">Quên mật khẩu</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="email" class="block text-blue-500">Email</label>
        <input
          id="email"
          v-model="authStore.forgotEmail"
          type="email"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600 transition-colors"
        :disabled="authStore.isLoading"
      >
        {{ authStore.isLoading ? 'Đang xử lý...' : 'Gửi yêu cầu' }}
      </button>
    </form>
    <div>
      <NuxtLink to="/login" class="text-blue-500">Quay lại đăng nhập</NuxtLink>
    </div>
    <div v-if="authStore.isLoading" class="text-center mt-4">
      <Loading :is-partially="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'auth',
})

const authStore = useAuthStore()
const router = useRouter()

const handleSubmit = async () => {
  const success = await authStore.handleForgotPassword()
  if (success) {
    router.push('/login')
  }
}
</script>
