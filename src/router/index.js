import Vue from 'vue'
import Router from 'vue-router'
import website from '@/pages/website'
import navsite from '@/pages/navsite'
import search from '@/pages/search'
import about from '@/pages/about'

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
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]

export default new Router({
  routes: routes
})
