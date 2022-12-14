import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c2ef5d8e = () => interopDefault(import('..\\pages\\allpost\\index.vue' /* webpackChunkName: "pages/allpost/index" */))
const _6a1959c3 = () => interopDefault(import('..\\pages\\image.vue' /* webpackChunkName: "pages/image" */))
const _d07e907c = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _37f6e8d1 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _dcdf32ae = () => interopDefault(import('..\\pages\\newsfeed\\index.vue' /* webpackChunkName: "pages/newsfeed/index" */))
const _35fabf5e = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _6470326b = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _00662810 = () => interopDefault(import('..\\pages\\testing.vue' /* webpackChunkName: "pages/testing" */))
const _ecd5cc8e = () => interopDefault(import('..\\pages\\auth\\login\\index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _e88630e2 = () => interopDefault(import('..\\pages\\auth\\register\\index.vue' /* webpackChunkName: "pages/auth/register/index" */))
const _df89643e = () => interopDefault(import('..\\pages\\allpost\\_id.vue' /* webpackChunkName: "pages/allpost/_id" */))
const _77ac015e = () => interopDefault(import('..\\pages\\newsfeed\\_id.vue' /* webpackChunkName: "pages/newsfeed/_id" */))
const _6e4f45ba = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/allpost",
    component: _c2ef5d8e,
    name: "allpost"
  }, {
    path: "/image",
    component: _6a1959c3,
    name: "image"
  }, {
    path: "/inspire",
    component: _d07e907c,
    name: "inspire"
  }, {
    path: "/login",
    component: _37f6e8d1,
    name: "login"
  }, {
    path: "/newsfeed",
    component: _dcdf32ae,
    name: "newsfeed"
  }, {
    path: "/profile",
    component: _35fabf5e,
    name: "profile"
  }, {
    path: "/register",
    component: _6470326b,
    name: "register"
  }, {
    path: "/testing",
    component: _00662810,
    name: "testing"
  }, {
    path: "/auth/login",
    component: _ecd5cc8e,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _e88630e2,
    name: "auth-register"
  }, {
    path: "/allpost/:id",
    component: _df89643e,
    name: "allpost-id"
  }, {
    path: "/newsfeed/:id",
    component: _77ac015e,
    name: "newsfeed-id"
  }, {
    path: "/",
    component: _6e4f45ba,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
