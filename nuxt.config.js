module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-svg', href: '/icon-trans.svg' }]
  },
  router: {
    middleware: ['auth', 'meta', 'redirect'],
    extendRoutes(routes, resolve) {}
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#5850ec' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios', '~/plugins/filters'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    purgeCSSInDev: false // turn on for production testing
  },
  purgeCSS: {
    // TODO figure this out... tailwindui has some special cases we want to make sure we address
    // override normal purge with custom regex for Tailwind UI
    // defaultExtractor(content) {
    //   console.log("defaultExtractor:", content.replace())
    //   //const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
    //   //return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:.]*[A-Za-z0-9-_/]+/g) || [];
    //   return []
    // }
    extractors: [
      {
        extractor(content) {
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
          return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:.]*[A-Za-z0-9-_/]+/g) || []
        },
        extensions: ['html', 'vue' /*, 'js' */] // why would we need it for .js ??? 🤔
      }
    ]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    'portal-vue/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        overlay: false
      }
    }
  }
}
