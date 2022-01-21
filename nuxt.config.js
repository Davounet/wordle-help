export default {
  target: 'static',

  head: {
    title: 'wordle-helper',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    ],
  },

  css: ['assets/css/main.css'],

  loading: false,

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],

  modules: [],

  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
