// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  router: {
    base: '/nps-surfreport-web/'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  plugins: [
    '~/plugins/bootstrap.js',
  ]
})