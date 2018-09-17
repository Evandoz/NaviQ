import Vue from 'vue'
import Router from 'vue-router'
import website from '@/pages/website'
import search from '@/pages/search'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'website',
    component: website
  },
  {
    path: '/so',
    name: 'search',
    component: search
  }
]

export default new Router({
  routes: routes
})
