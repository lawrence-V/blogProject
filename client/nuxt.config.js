import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - client",
    title: "client",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["leaflet/dist/leaflet.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/nuxt-leaflet",
      // mode: "client",
      ssr: false,
    },
    {
      src: "~/plugins/vue-leaflet",
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    ["nuxt-leaflet", { ssr: false }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "http://localhost:8080",
    baseURL: "http://localhost:8100",

    // proxyHeaders: false,
    // credentials: true,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: "#3f51b5",
          secondary: "#b0bec5",
          anchor: "#8c9eff",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // auth: {
  //   strategies: {
  //     local: {
  //       //      scheme: "refresh",
  //       token: {
  //         property: "token",
  //         global: true,
  //         required: true,
  //         type: "Bearer",
  //       },
  //       user: {
  //         property: "user",
  //         autoFetch: true,
  //       },
  //       //      refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
  //       //        property: "refresh_token",
  //       //        data: "refresh_token",
  //       //      },
  //       endpoints: {
  //         login: { url: "/api/auth/login", method: "post" },
  //         //        refresh: { url: "/api/auth/refresh-token", method: "post" },
  //         // logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
  //         user: { url: "/api/auth/user", method: "get" },
  //         logout: { url: "/api/auth/logout", method: "get" },
  //       },
  //     },
  //   },
  // },
};
