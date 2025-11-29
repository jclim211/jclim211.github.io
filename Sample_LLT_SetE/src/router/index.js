import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
       path: '/',
       component: () => import('../MainMenu.vue'),
    },

    {
       path: '/q1',
       component: () => import('../resource/q1/Barista.vue'),
    },
    {
       path: '/solution/q1',
       component: () => import('../solution/q1/Barista.vue'),
    },


    {
       path: '/q2',
       component: () => import('../resource/q2/Adventurers.vue'),
    },
    {
       path: '/solution/q2',
       component: () => import('../solution/q2/Adventurers.vue'),
    },

    {
       path: '/q3',
       component: () => import('../resource/q3/Dashboard.vue'),
    },
    {
       path: '/solution/q3',
       component: () => import('../solution/q3/Dashboard.vue'),
    },

    {
       path: '/q4',
       component: () => import('../resource/q4/ContactBridge.vue'),
    },
    {
       path: '/solution/q4',
       component: () => import('../solution/q4/ContactBridge.vue'),
    },


  ],
})

export default router
