import { createRouter, createWebHistory } from 'vue-router'
import { getMenuRoutes } from '@/utils/menuHandler'

const menuRoutes = getMenuRoutes()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('@/views/HomePage/Index.vue'),
      redirect: '/WelcomeInfo/IndexPage',
      children: [
        ...menuRoutes
      ]
    }
  ]
})

export default router
