import Vue from 'vue'
import VueRouter from 'vue-router'
import PotatoFeed from '@/pages/PotatoFeed'
import PotatoSingle from '@/pages/PotatoSingle'
import PotatoError from '@/pages/PotatoError'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'PotatoFeed',
      component: PotatoFeed
    },
    {
      path: '/single/:id',
      name: 'PotatoSingle',
      component: PotatoSingle
    },
    {
      path: '*',
      name: 'PotatoError',
      component: PotatoError
    }
  ]
})

export default router
