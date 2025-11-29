import { createRouter, createWebHistory } from 'vue-router';

import MainMenu from '../components/MainMenu.vue';
import p1 from '../components/p1.vue';
import p2 from '../components/p2.vue';
import p3 from '../components/p3.vue';
import i1 from '../components/i1.vue';
import i2 from '../components/i2.vue';
import i3 from '../components/i3.vue';
import i4 from '../components/i4.vue';

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
    path: '/p2/',
    component: p2
  },

  {
    path: '/p3/',
    component: p3
  },

  {
    path: '/i1/',
    component: i1
  },

  {
    path: '/i2/',
    component: i2
  },

  {
    path: '/i3/',
    component: i3
  },

  {
    path: '/i4/',
    component: i4
  }  

]

const router = createRouter({
  history,
  routes
})

export default router;
