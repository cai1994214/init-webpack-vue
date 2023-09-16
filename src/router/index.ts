import Home from '../views/home/index.vue';
import JINGBAO from '../views/jingbao/index.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const routers = [
  {
    path: '/',
    redirect: '/report/shenzhenwanbao',
  },
  {
    path: '/report/shenzhenwanbao',
    component: Home,
  },
  {
    path: '/report/jingbao',
    component: JINGBAO,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});

export default router;
