import { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dev',
    children: [
      {
        path: 'dev',
        component: () => import('../views/Develop.vue'),
        name: 'Develop',
        meta: { title: 'Programming Development' },
      },
    ],
  },
  {
    path: '/design',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/Design.vue'),
        name: 'design',
        meta: { title: 'Documentation' },
      },
    ],
  },
  {
    path: '/read',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/Read.vue'),
        name: 'read',
        meta: { title: 'Documentation' },
      },
    ],
  },
  {
    path: '/Tool',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/Tool.vue'),
        name: 'Tool',
        meta: { title: 'Documentation' },
      },
    ],
  },
  {
    path: '/other',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/Other.vue'),
        name: 'other',
        meta: { title: 'Documentation' },
      },
    ],
  },
]

export default routes
