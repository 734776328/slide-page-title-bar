import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

import homeRouter from './homeRouter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/attention',
    component: Home,
    children: homeRouter
  }
]

const router = new VueRouter({
  routes
})

export default router
