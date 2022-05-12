import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    redirect: 'home',
    component:() => import(/* webpackChunkName: "main" */ '@/layout/main/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component:() => import(/* webpackChunkName: "home" */ '@/views/home.vue')
      },
      {
        path: '/songDetail/:id',
        name: 'song',
        component: () => import(/* webpackChunkName: "songDetail" */ '@/views/songDetail.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunckName: "login" */'@/views/login.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
