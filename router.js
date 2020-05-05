import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from '~/pages/index'
import Masterplan from '~/pages/Masterplan/index'
import Topview from '~/pages/Topview/index'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/masterplan',
        name: 'masterplan',
        component: Masterplan,
      },
      {
        path: '/topview',
        name: 'topview',
        component: Topview,
      },
    ],
  })

  return router
}
