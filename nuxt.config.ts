// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  target: 'static',
  router: {
    base: 'https://emmanuelnunoe.github.io/NPS-SurfReport-web/NPS-SurfReport-web/'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    css: [
      'bootstrap/dist/css/bootstrap.min.css'
    ],
    plugins: [
      { src: '~/plugins/bootstrap.js', mode: 'client' }
    ]
})