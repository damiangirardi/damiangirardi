
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /// VARIABLES DE ENTORNO
  env: {
    baseUrl: process.env.BASE_VIDEO_URL || 'http://localhost:3000/'
  },

  /*
  ** Global CSS
  */
  css: [
    // normalize page
    '@/assets/style/normalize.css',
    // CSS & SCSS file in the project
    '@/assets/style/main.css',
    '@/assets/style/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/bus.js'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/router'
  ],

  styleResources: {
    scss: [
        'assets/style/main.scss'
    ]
  },

  serverMiddleware: ['~/servermiddleware/seo.js'],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_VIDEO_URL || 'http://localhost:3000/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
    extend(config, ctx) {
    }
  }
}
