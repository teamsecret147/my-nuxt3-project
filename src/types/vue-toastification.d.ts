declare module 'vue-toastification/dist/index.mjs' {
  import { Plugin } from 'vue'
  export interface ToastOptions {
    type?: 'success' | 'info' | 'warning' | 'error'
    position?:
      | 'top-right'
      | 'top-center'
      | 'top-left'
      | 'bottom-right'
      | 'bottom-center'
      | 'bottom-left'
    timeout?: number
    closeOnClick?: boolean
    pauseOnFocusLoss?: boolean
    pauseOnHover?: boolean
    draggable?: boolean
    draggablePercent?: number
    showCloseButtonOnHover?: boolean
    hideProgressBar?: boolean
    closeButton?: boolean
    icon?: boolean
    rtl?: boolean
    transition?: string
    toastClassName?: string
    bodyClassName?: string
    containerClassName?: string
    filterBeforeCreate?: (toast: any, toasts: any[]) => void | false
  }

  export interface Toast {
    id: number
    content: string
    type: string
    options: ToastOptions
  }

  export interface ToastContainer {
    toasts: Toast[]
    add(content: string, options?: ToastOptions): number
    remove(id: number): void
    clear(): void
  }

  export interface UseToast {
    success(content: string, options?: ToastOptions): number
    error(content: string, options?: ToastOptions): number
    info(content: string, options?: ToastOptions): number
    warning(content: string, options?: ToastOptions): number
    default(content: string, options?: ToastOptions): number
  }

  export function useToast(): UseToast
  export const ToastPlugin: Plugin
}
