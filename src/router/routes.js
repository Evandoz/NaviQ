import develop from '@/pages/develop'
import read from '@/pages/read'
import media from '@/pages/media'
import other from '@/pages/other'

const routes = [
  {
    path: '/',
    redirect: '/dev'
  },
  {
    path: '/dev',
    name: 'dev',
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
    path: '/other',
    name: 'other',
    component: other
  }
]

export default routes
