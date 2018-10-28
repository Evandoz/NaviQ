import design from '@/pages/design'
import develop from '@/pages/develop'
import history from '@/pages/history'
import read from '@/pages/read'
import doc from '@/pages/doc'
import media from '@/pages/media'
import service from '@/pages/service'
import map from '@/pages/map'
import tool from '@/pages/tool'
import fav from '@/pages/fav'
import navsite from '@/pages/navsite'
import search from '@/pages/search'
import about from '@/pages/about'

const routes = [
  {
    path: '/',
    redirect: '/develop'
  },
  {
    path: '/so',
    name: 'search',
    component: search
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
    path: '/read',
    name: 'read',
    component: read
  },
  {
    path: '/doc',
    name: 'doc',
    component: doc
  },
  {
    path: '/media',
    name: 'media',
    component: media
  },
  {
    path: '/service',
    name: 'service',
    component: service
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/tool',
    name: 'tool',
    component: tool
  },
  {
    path: '/fav',
    name: 'fav',
    component: fav
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

export default routes
