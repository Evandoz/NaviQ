import Vue from 'vue'
import Router from 'vue-router'
import website from '@/pages/website'
import navsite from '@/pages/navsite'
import search from '@/pages/search'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/all'
  },
  {
    path: '/so',
    name: 'search',
    component: search
  },
  {
    path: '/all',
    name: 'website',
    component: website
  },
  {
    path: '/other',
    name: 'navsite',
    component: navsite
  }
]

export default new Router({
  routes: routes
})
