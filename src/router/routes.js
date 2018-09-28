import design from '@/pages/design'
import develop from '@/pages/develop'
import history from '@/pages/history'
import reading from '@/pages/reading'
import workdoc from '@/pages/workdoc'
import media from '@/pages/media'
import lifeservice from '@/pages/lifeservice'
import map from '@/pages/map'
import netool from '@/pages/netool'
import markdown from '@/pages/markdown'
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
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/netool',
    name: 'netool',
    component: netool
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: markdown
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
