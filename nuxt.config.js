export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/style.scss',
    '~/assets/styles/animate.css',
    '~/assets/styles/flaticon.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://strapi-v0.nuxtjs.org/
    '@nuxtjs/strapi',
    // https://image.nuxtjs.org/
    '@nuxt/image',
    ['nuxt-mail', {
      message: {
        to: 'cesar.bejucos.2014@gmail.com'
      },
      smtp: {
        /* host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'b319bbc66cca30',
          pass: 'b510e6d18b111f'
        } */
        service: 'gmail',
        auth: {
          user: 'cesar.bejucos.2014@gmail.com',
          pass: '<byvmncxntmnehgtm>'
        }
      }
    }]
  ],

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v3',
    entities: ['Services'],
    cookie: {}
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  image: {
    strapi: {
      baseURL: 'http://localhost:1337/'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  buildDir: 'dist'
}
