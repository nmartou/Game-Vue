// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI
  },
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  nitro: {
    plugins: ['~/server/db/index.ts']
  },
  css: ['~/assets/main.css'],
  compatibilityDate: '2024-11-23',
});