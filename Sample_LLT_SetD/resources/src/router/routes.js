import { createRouter, createWebHistory } from 'vue-router';

import MainMenu from '../components/MainMenu.vue';
import p1 from '../components/p1.vue';
import i1 from '../components/i1.vue';

const history = createWebHistory()
const routes = [
  {
    path: '/',
    component: MainMenu
  },

  {
    path: '/p1/',
    component: p1
  },

  {
    path: '/i1/',
    component: i1
  }
]

const router = createRouter({
  history,
  routes
})

export default router;
