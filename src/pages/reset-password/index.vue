<template>
  <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4">Đặt lại mật khẩu</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4 relative">
        <label for="password" class="block text-gray-700">Mật khẩu mới</label>
        <input
          id="password"
          v-model="authStore.resetPassword"
          :type="authStore.showResetPassword ? 'text' : 'password'"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="button"
          class="absolute right-2 top-8 text-gray-500 hover:text-gray-700"
          @click="authStore.showResetPassword = !authStore.showResetPassword"
        >
          {{ authStore.showResetPassword ? '👁️' : '👁️‍🗨️' }}
        </button>
      </div>
      <div class="mb-4 relative">
        <label for="confirm-password" class="block text-gray-700">Xác nhận mật khẩu mới</label>
        <input
          id="confirm-password"
          v-model="authStore.resetConfirmPassword"
          :type="authStore.showResetConfirmPassword ? 'text' : 'password'"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="button"
          class="absolute right-2 top-8 text-gray-500 hover:text-gray-700"
          @click="authStore.showResetConfirmPassword = !authStore.showResetConfirmPassword"
        >
          {{ authStore.showResetConfirmPassword ? '👁️' : '👁️‍🗨️' }}
        </button>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600 transition-colors"
        :disabled="authStore.isLoading"
      >
        {{ authStore.isLoading ? 'Đang xử lý...' : 'Đặt lại mật khẩu' }}
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
import { useRouter, useRoute } from 'vue-router'

definePageMeta({
  layout: 'auth',
})

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const handleSubmit = async () => {
  const token = route.query.token as string
  if (!token) {
    router.push('/login')
    return
  }

  const success = await authStore.handleResetPassword(token)
  if (success) {
    router.push('/login')
  }
}
</script>
