import Layout from '@/views/Layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dev',
    children: [
      {
        path: 'dev',
        component: () => import('@/views/Develop'),
        name: 'Develop',
        meta: { title: 'Programming Development' }
      }
    ]
  },
  {
    path: '/design',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Design'),
        name: 'design',
        meta: { title: 'Documentation' }
      }
    ]
  },
  {
    path: '/read',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Read'),
        name: 'read',
        meta: { title: 'Documentation' }
      }
    ]
  },
  {
    path: '/Tool',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Tool'),
        name: 'Tool',
        meta: { title: 'Documentation' }
      }
    ]
  },
  {
    path: '/other',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Other'),
        name: 'other',
        meta: { title: 'Documentation' }
      }
    ]
  }
]

export default routes
