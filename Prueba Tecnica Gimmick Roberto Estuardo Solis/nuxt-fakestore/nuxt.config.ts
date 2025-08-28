export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/assets/css/tailwind.css'],
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  devtools: { enabled: true },
  compatibilityDate: '2025-08-26'
})