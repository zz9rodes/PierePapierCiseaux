import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PierePapierCiseaux from '../pages/PierePapieCiseau.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PierePapierCiseaux
    },
    {
      path: '/game',
      name: 'game',
      component: PierePapierCiseaux
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
