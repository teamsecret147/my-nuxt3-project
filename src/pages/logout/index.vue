<template>
  <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4">Đăng xuất</h1>
    <p class="text-gray-600 mb-6">Bạn có chắc chắn muốn đăng xuất?</p>
    <div class="flex justify-end space-x-4">
      <button
        type="button"
        class="px-4 py-2 text-gray-600 hover:text-gray-800"
        @click="router.push('/')"
      >
        Hủy
      </button>
      <button
        type="button"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        :disabled="authStore.isLoading"
        @click="handleLogout"
      >
        {{ authStore.isLoading ? 'Đang xử lý...' : 'Đăng xuất' }}
      </button>
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

const handleLogout = async () => {
  const success = await authStore.handleLogout()
  if (success) {
    router.push('/login')
  }
}
</script>
