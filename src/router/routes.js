import develop from '@/pages/develop'
import read from '@/pages/read'
import media from '@/pages/media'
import fav from '@/pages/fav'
import search from '@/pages/search'

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
    path: '/develop',
    name: 'develop',
    component: develop
  },
  {
    path: '/read',
    name: 'read',
    component: read
  },
  {
    path: '/media',
    name: 'media',
    component: media
  },
  {
    path: '/fav',
    name: 'fav',
    component: fav
  }
]

export default routes
