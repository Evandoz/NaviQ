import Vue from 'vue'
import Router from 'vue-router'
import website from '@/pages/website'
import design from '@/pages/design'
import develop from '@/pages/develop'
import history from '@/pages/history'
import reading from '@/pages/reading'
import workdoc from '@/pages/workdoc'
import media from '@/pages/media'
import lifeservice from '@/pages/lifeservice'
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
    path: '/design',
    name: 'design',
    component: design
  },
  {
    path: '/develop',
    name: 'develop',
    component: develop
  },
  {
    path: '/history',
    name: 'history',
    component: history
  },
  {
    path: '/reading',
    name: 'reading',
    component: reading
  },
  {
    path: '/workdoc',
    name: 'workdoc',
    component: workdoc
  },
  {
    path: '/media',
    name: 'media',
    component: media
  },
  {
    path: '/lifeservice',
    name: 'lifeservice',
    component: lifeservice
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
