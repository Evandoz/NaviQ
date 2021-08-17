import { RouteRecordRaw } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/dev',
    children: [
      {
        name: 'Develop',
        path: 'dev',
        component: () => import('../views/Develop.vue'),
        meta: { title: 'Programming Development' },
      },
      {
        name: 'Design',
        path: 'design',
        component: () => import('../views/Design.vue'),
        meta: { title: 'Documentation' },
      },
      {
        name: 'Read',
        path: 'read',
        component: () => import('../views/Read.vue'),
        meta: { title: 'Documentation' },
      },
      {
        name: 'Tool',
        path: 'tool',
        component: () => import('../views/Tool.vue'),
        meta: { title: 'Documentation' },
      },
      {
        name: 'Other',
        path: 'other',
        component: () => import('../views/Other.vue'),
        meta: { title: 'Documentation' },
      },
    ],
  },
]

export default routes
