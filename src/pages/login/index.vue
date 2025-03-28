<template>
  <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4">Đăng nhập</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="email" class="block text-blue-500">Email</label>
        <input
          id="email"
          v-model="authStore.loginEmail"
          type="email"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4 relative">
        <label for="password" class="block text-gray-700">Mật khẩu</label>
        <input
          id="password"
          v-model="authStore.loginPassword"
          :type="authStore.showLoginPassword ? 'text' : 'password'"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="button"
          class="absolute right-2 top-8 text-gray-500 hover:text-gray-700"
          @click="authStore.showLoginPassword = !authStore.showLoginPassword"
        >
          {{ authStore.showLoginPassword ? '👁️' : '👁️‍🗨️' }}
        </button>
      </div>
      <div class="mb-4 flex items-center">
        <input id="remember" v-model="authStore.rememberMe" type="checkbox" class="mr-2" />
        <label for="remember" class="text-gray-700">Ghi nhớ đăng nhập</label>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600 transition-colors"
        :disabled="authStore.isLoading"
      >
        {{ authStore.isLoading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
      </button>

      <div class="relative mb-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">Hoặc đăng nhập với</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <button
          type="button"
          class="flex items-center justify-center p-2 border border-gray-300 rounded hover:bg-gray-50"
          @click="handleGoogleLogin"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5 mr-2" />
          Google
        </button>
        <button
          type="button"
          class="flex items-center justify-center p-2 border border-gray-300 rounded hover:bg-gray-50"
          @click="handleFacebookLogin"
        >
          <img src="https://www.facebook.com/favicon.ico" alt="Facebook" class="w-5 h-5 mr-2" />
          Facebook
        </button>
      </div>
    </form>
    <div>
      <NuxtLink to="/register" class="text-blue-500">Đăng ký tài khoản</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/forgot-password" class="text-blue-500">Quên mật khẩu</NuxtLink>
    </div>
    <div v-if="authStore.isLoading" class="text-center mt-4">
      <Loading :is-partially="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification/dist/index.mjs'

definePageMeta({
  layout: 'auth',
})

const authStore = useAuthStore()
const router = useRouter()
const toast = useToast()

const handleSubmit = async () => {
  const success = await authStore.handleLogin()
  if (success) {
    router.push('/')
  }
}

const handleGoogleLogin = async () => {
  authStore.isLoading = true
  try {
    // Implement Google login logic here
    toast.info('Đang phát triển đăng nhập Google')
  } catch (error) {
    toast.error('Lỗi đăng nhập Google')
  }
  authStore.isLoading = false
}

const handleFacebookLogin = async () => {
  authStore.isLoading = true
  try {
    // Implement Facebook login logic here
    toast.info('Đang phát triển đăng nhập Facebook')
  } catch (error) {
    toast.error('Lỗi đăng nhập Facebook')
  }
  authStore.isLoading = false
}
</script>
