import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b7c86e84 = () => interopDefault(import('..\\pages\\allpost\\index.vue' /* webpackChunkName: "pages/allpost/index" */))
const _7ced2ec4 = () => interopDefault(import('..\\pages\\image.vue' /* webpackChunkName: "pages/image" */))
const _592f0846 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _e13210a8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3e6bdfc4 = () => interopDefault(import('..\\pages\\newsfeed\\index.vue' /* webpackChunkName: "pages/newsfeed/index" */))
const _2ad3d054 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _c47e1ca0 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _3b74b013 = () => interopDefault(import('..\\pages\\testing.vue' /* webpackChunkName: "pages/testing" */))
const _21e746be = () => interopDefault(import('..\\pages\\auth\\login\\index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _4ea1e06a = () => interopDefault(import('..\\pages\\auth\\register\\index.vue' /* webpackChunkName: "pages/auth/register/index" */))
const _28e0e2a6 = () => interopDefault(import('..\\pages\\allpost\\_id.vue' /* webpackChunkName: "pages/allpost/_id" */))
const _4037032c = () => interopDefault(import('..\\pages\\newsfeed\\_id.vue' /* webpackChunkName: "pages/newsfeed/_id" */))
const _748156d6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _b7c86e84,
    name: "allpost"
  }, {
    path: "/image",
    component: _7ced2ec4,
    name: "image"
  }, {
    path: "/inspire",
    component: _592f0846,
    name: "inspire"
  }, {
    path: "/login",
    component: _e13210a8,
    name: "login"
  }, {
    path: "/newsfeed",
    component: _3e6bdfc4,
    name: "newsfeed"
  }, {
    path: "/profile",
    component: _2ad3d054,
    name: "profile"
  }, {
    path: "/register",
    component: _c47e1ca0,
    name: "register"
  }, {
    path: "/testing",
    component: _3b74b013,
    name: "testing"
  }, {
    path: "/auth/login",
    component: _21e746be,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _4ea1e06a,
    name: "auth-register"
  }, {
    path: "/allpost/:id",
    component: _28e0e2a6,
    name: "allpost-id"
  }, {
    path: "/newsfeed/:id",
    component: _4037032c,
    name: "newsfeed-id"
  }, {
    path: "/",
    component: _748156d6,
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
