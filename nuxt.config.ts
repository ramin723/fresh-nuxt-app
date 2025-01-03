// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['swiper/swiper-bundle.css'], // اضافه کردن CSS مربوط به Swiper
  devtools: { enabled: true },
  ssr: false, // رندر سمت سرور فعال باشد
  nitro: {
    output: {
      dir: '.output', // مسیر خروجی Nitro
    },
  },
})
