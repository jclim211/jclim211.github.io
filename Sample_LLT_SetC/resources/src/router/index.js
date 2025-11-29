import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      component: () => import('../components/MainMenu.vue'),
    },
    {
      path: '/Q1',
      component: () => import('../components/Bigbang.vue'),
    },
    {
      path: '/Q2',
      component: () => import('../components/q2.vue'),
    },
     {
      path: '/Q2D',
      component: () => import('../components/q2-D.vue'),
    }
  ],
})

export default router
