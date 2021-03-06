export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 's27b',
    htmlAttrs: {
      lang: 'pl'
    },
    script: [],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {rel:"stylesheet", href: "https://vjs.zencdn.net/7.10.2/video-js.css"},
      {src: "https://vjs.zencdn.net/7.10.2/video.min.js"}
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  ssr: false,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-core-video-player.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-core-video-player']
  }
}
