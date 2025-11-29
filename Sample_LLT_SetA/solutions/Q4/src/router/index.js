import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // const routes = [
    {
       path: '/',
       component: () => import('../components/Party.vue'),
    }
  ],
})

export default router
