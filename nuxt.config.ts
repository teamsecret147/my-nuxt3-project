// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        },
      ],
    },
  },
  telemetry: { enabled: false },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  srcDir: 'src/',
  serverDir: 'src/server/', // Thư mục chứa API của bạn
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-03-24',
  css: ['~/assets/css/tailwind.css'],
  components: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  sourcemap: {
    server: true,
    client: true,
  },
  vite: {
    build: {
      sourcemap: 'hidden',
    },
  },
  runtimeConfig: {
    WAF_AUTHORIZATION: process.env.WAF_AUTHORIZATION,
    jwtSecret: process.env.JWT_SECRET,

    public: {
      ENVIRONMENT: process.env.ENVIRONMENT || '',
    },
  },
  plugins: ['~/plugins/vue-toastification.ts'],
})
