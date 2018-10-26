import design from '@/pages/design'
import develop from '@/pages/develop'
import history from '@/pages/history'
import reading from '@/pages/reading'
import workdoc from '@/pages/workdoc'
import media from '@/pages/media'
import lifeservice from '@/pages/lifeservice'
import map from '@/pages/map'
import tool from '@/pages/tool'
import markdown from '@/pages/markdown'
import smsol from '@/pages/smsol'
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
    path: '/tool',
    name: 'tool',
    component: tool
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
    path: '/smsol',
    name: 'smsol',
    component: smsol
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
