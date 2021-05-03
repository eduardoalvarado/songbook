import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    redirect: 'home',
    component:() => import(/* webpackChunkName: "main" */ '@/layout/main/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component:() => import(/* webpackChunkName: "home" */ '@/views/home.vue')
  },
  {
    path: '/songDetail',
    name: 'song',
    component: () => import(/* webpackChunkName: "songDetail" */ '@/views/songDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
