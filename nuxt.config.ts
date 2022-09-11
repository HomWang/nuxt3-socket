import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hom Wang',
      meta: [
        { name: 'referrer', content: 'no-referrer' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  buildModules: [
    '@unocss/nuxt',
  ],
  unocss: {
    attributify: true,
    icons: true,
    components: false,
    shortcuts: [
      // ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
  },
})
