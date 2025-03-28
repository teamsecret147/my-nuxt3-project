import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification/dist/index.mjs'

interface User {
  id: string
  name: string
  email: string
  role: string
  image?: string
}

export const useAuthStore = defineStore('auth', () => {
  // Common states
  const isLoading = ref<boolean>(false)
  const toast = useToast()
  const isAuthenticated = ref(false)
  const user = ref<User | null>(null)

  // Login states
  const loginEmail = ref('')
  const loginPassword = ref('')
  const showLoginPassword = ref<boolean>(false)
  const rememberMe = ref<boolean>(false)
  const loginError = ref('')

  // Register states
  const registerName = ref('')
  const registerEmail = ref('')
  const registerPassword = ref('')
  const registerConfirmPassword = ref('')
  const showRegisterPassword = ref<boolean>(false)
  const showRegisterConfirmPassword = ref<boolean>(false)
  const registerError = ref('')

  // Forgot password states
  const forgotEmail = ref('')
  const forgotError = ref('')

  // Reset password states
  const resetToken = ref('')
  const resetPassword = ref('')
  const resetConfirmPassword = ref('')
  const showResetPassword = ref<boolean>(false)
  const showResetConfirmPassword = ref<boolean>(false)
  const resetError = ref('')

  // Login methods
  const handleLogin = async () => {
    if (!loginEmail.value || !loginPassword.value) {
      toast.error('Vui lòng nhập đầy đủ thông tin')
      return false
    }

    isLoading.value = true
    try {
      const { data, error } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: {
          email: loginEmail.value,
          password: loginPassword.value,
          rememberMe: rememberMe.value,
        },
        credentials: 'include', // Quan trọng: cho phép gửi cookie
      })

      if (error.value) {
        toast.error(error.value.data.message || 'Có lỗi xảy ra')
        return false
      }

      if (data.value?.user) {
        user.value = data.value.user
        isAuthenticated.value = true
        toast.success('Đăng nhập thành công!')
        return true
      }

      return false
    } catch (error: any) {
      toast.error(error.message || 'Có lỗi xảy ra')
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Register methods
  const handleRegister = async () => {
    if (!registerEmail.value || !registerPassword.value || !registerConfirmPassword.value) {
      toast.error('Vui lòng nhập đầy đủ thông tin')
      return false
    }

    if (registerPassword.value !== registerConfirmPassword.value) {
      toast.error('Mật khẩu xác nhận không khớp')
      return false
    }

    isLoading.value = true
    try {
      const { data, error } = await useFetch('/api/auth/register', {
        method: 'POST',
        body: {
          name: registerName.value,
          email: registerEmail.value,
          password: registerPassword.value,
        },
      })

      if (error.value) {
        toast.error(error.value.data.message || 'Có lỗi xảy ra')
        return false
      }

      toast.success('Đăng ký thành công!')
      return true
    } catch (error: any) {
      toast.error(error.message || 'Có lỗi xảy ra')
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Forgot password methods
  const handleForgotPassword = async () => {
    if (!forgotEmail.value) {
      toast.error('Vui lòng nhập email')
      return false
    }

    isLoading.value = true
    try {
      const { data, error } = await useFetch('/api/auth/forgot-password', {
        method: 'POST',
        body: {
          email: forgotEmail.value,
        },
      })

      if (error.value) {
        toast.error(error.value.data.message || 'Có lỗi xảy ra')
        return false
      }

      toast.success('Vui lòng kiểm tra email của bạn!')
      return true
    } catch (error: any) {
      toast.error(error.message || 'Có lỗi xảy ra')
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Reset password methods
  const handleResetPassword = async () => {
    if (!resetPassword.value || !resetConfirmPassword.value) {
      toast.error('Vui lòng nhập đầy đủ thông tin')
      return false
    }

    if (resetPassword.value !== resetConfirmPassword.value) {
      toast.error('Mật khẩu xác nhận không khớp')
      return false
    }

    isLoading.value = true
    try {
      const { data, error } = await useFetch('/api/auth/reset-password', {
        method: 'POST',
        body: {
          token: resetToken.value,
          password: resetPassword.value,
        },
      })

      if (error.value) {
        toast.error(error.value.data.message || 'Có lỗi xảy ra')
        return false
      }

      toast.success('Đặt lại mật khẩu thành công!')
      return true
    } catch (error: any) {
      toast.error(error.message || 'Có lỗi xảy ra')
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Logout methods
  const handleLogout = async () => {
    isLoading.value = true
    try {
      const { error } = await useFetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Quan trọng: cho phép gửi cookie
      })

      if (error.value) {
        toast.error(error.value.data.message || 'Có lỗi xảy ra')
        return false
      }

      user.value = null
      isAuthenticated.value = false
      resetLoginForm()
      toast.success('Đăng xuất thành công!')
      return true
    } catch (error: any) {
      toast.error(error.message || 'Có lỗi xảy ra')
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Check authentication status
  const checkAuth = async () => {
    try {
      const { data, error } = await useFetch('/api/auth/me', {
        credentials: 'include', // Quan trọng: cho phép gửi cookie
      })

      if (error.value) {
        isAuthenticated.value = false
        user.value = null
        return
      }

      if (data.value?.user) {
        user.value = data.value.user
        isAuthenticated.value = true
      } else {
        isAuthenticated.value = false
        user.value = null
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      isAuthenticated.value = false
      user.value = null
    }
  }

  // Reset forms
  const resetLoginForm = () => {
    loginEmail.value = ''
    loginPassword.value = ''
    showLoginPassword.value = false
    rememberMe.value = false
    loginError.value = ''
  }

  const resetRegisterForm = () => {
    registerName.value = ''
    registerEmail.value = ''
    registerPassword.value = ''
    registerConfirmPassword.value = ''
    showRegisterPassword.value = false
    showRegisterConfirmPassword.value = false
    registerError.value = ''
  }

  const resetForgotPasswordForm = () => {
    forgotEmail.value = ''
    forgotError.value = ''
  }

  const resetResetPasswordForm = () => {
    resetToken.value = ''
    resetPassword.value = ''
    resetConfirmPassword.value = ''
    showResetPassword.value = false
    showResetConfirmPassword.value = false
    resetError.value = ''
  }

  return {
    // Common states
    isLoading,
    isAuthenticated,
    user,

    // Login states and methods
    loginEmail,
    loginPassword,
    showLoginPassword,
    rememberMe,
    loginError,
    handleLogin,
    handleLogout,
    resetLoginForm,

    // Register states and methods
    registerName,
    registerEmail,
    registerPassword,
    registerConfirmPassword,
    showRegisterPassword,
    showRegisterConfirmPassword,
    registerError,
    handleRegister,
    resetRegisterForm,

    // Forgot password states and methods
    forgotEmail,
    forgotError,
    handleForgotPassword,
    resetForgotPasswordForm,

    // Reset password states and methods
    resetToken,
    resetPassword,
    resetConfirmPassword,
    showResetPassword,
    showResetConfirmPassword,
    resetError,
    handleResetPassword,
    resetResetPasswordForm,

    // Auth check
    checkAuth,
  }
})
