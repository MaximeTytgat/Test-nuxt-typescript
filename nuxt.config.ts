// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore']
    ],
  },
  css: [
    '~/assets/css/main.scss',
  ],
})
