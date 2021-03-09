export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bad company creative push',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'bad company creative push advertising'
      },
      { property: "og:site_name", content: "I Love Painting" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://badcompany.io",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "bad company creative push advertising",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "special projects, brand and content, content and production, creative consultancy, creative sprint, evennts, campaign, social media",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/icon.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@bobross" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://badcompany.io",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "bad company creative push advertising",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "special projects, brand and content, content and production, creative consultancy, creative sprint, evennts, campaign, social media",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/icon.png",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/aos.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
