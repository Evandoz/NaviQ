import develop from '@/views/develop'
import read from '@/views/read'
import media from '@/views/media'
import other from '@/views/other'

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
