<template>
  <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4">Đăng ký</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="email" class="block text-blue-500">Email</label>
        <input
          id="email"
          v-model="authStore.registerEmail"
          type="email"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4 relative">
        <label for="password" class="block text-gray-700">Mật khẩu</label>
        <input
          id="password"
          v-model="authStore.registerPassword"
          :type="authStore.showRegisterPassword ? 'text' : 'password'"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="button"
          class="absolute right-2 top-8 text-gray-500 hover:text-gray-700"
          @click="authStore.showRegisterPassword = !authStore.showRegisterPassword"
        >
          {{ authStore.showRegisterPassword ? '👁️' : '👁️‍🗨️' }}
        </button>
      </div>
      <div class="mb-4 relative">
        <label for="confirm-password" class="block text-gray-700">Xác nhận mật khẩu</label>
        <input
          id="confirm-password"
          v-model="authStore.registerConfirmPassword"
          :type="authStore.showRegisterConfirmPassword ? 'text' : 'password'"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="button"
          class="absolute right-2 top-8 text-gray-500 hover:text-gray-700"
          @click="authStore.showRegisterConfirmPassword = !authStore.showRegisterConfirmPassword"
        >
          {{ authStore.showRegisterConfirmPassword ? '👁️' : '👁️‍🗨️' }}
        </button>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600 transition-colors"
        :disabled="authStore.isLoading"
      >
        {{ authStore.isLoading ? 'Đang đăng ký...' : 'Đăng ký' }}
      </button>
    </form>
    <div>
      <NuxtLink to="/login" class="text-blue-500">Đã có tài khoản? Đăng nhập</NuxtLink>
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
  const success = await authStore.handleRegister()
  if (success) {
    router.push('/login')
  }
}
</script>
