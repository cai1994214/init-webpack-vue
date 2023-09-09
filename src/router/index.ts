import Home from '../views/home/index.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const routers = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});

export default router;
