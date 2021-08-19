import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页' },
    children: [
      {
        name: 'Page',
        path: ':pageId',
        props: true,
        component: () => import('../views/Page.vue'),
      },
    ],
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: { title: '关于' },
  },
]

export default routes
