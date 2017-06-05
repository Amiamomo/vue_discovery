import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Discovery from '@/components/Discovery'
import Links from '@/components/Links'
import StateVuex from '@/components/StateVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/statevuex',
      name: 'StateVuex',
      component: StateVuex
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component: Discovery
    },
    {
      path: '/links',
      name: 'Links',
      component: Links
    }
  ]
})
