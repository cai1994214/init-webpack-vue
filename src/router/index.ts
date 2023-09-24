import Home from '../views/home/index.vue';
import JINGBAO from '../views/jingbao/index.vue';
import SHENZHEN1 from '../views/szxw1/index.vue';
import SHENZHEN2 from '../views/szxw2/index.vue';
import DUSHIWANBAO from '../views/nfds/index.vue';
import SZTQ from '../views/sztq/index.vue';
import GDSZ from '../views/gdsz/index.vue';
import GDSZ1 from '../views/gdsz1/index.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const routers = [
  {
    path: '/',
    redirect: '/report/shenzhenwanbao',
    meta: {
      title: '深圳晚报',
    },
  },
  {
    path: '/report/shenzhenwanbao',
    component: Home,
    meta: {
      title: '深圳晚报',
    },
  },
  {
    path: '/report/jingbao',
    component: JINGBAO,
    meta: {
      title: '晶报',
    },
  },
  {
    path: '/report/shenzhenxinwen/lsy',
    component: SHENZHEN1,
    meta: {
      title: '深圳新闻',
    },
  },
  {
    path: '/report/shenzhenxinwen/xjm',
    component: SHENZHEN2,
    meta: {
      title: '深圳新闻',
    },
  },
  {
    path: '/report/dushiwanbao',
    component: DUSHIWANBAO,
    meta: {
      title: '都市晚报',
    },
  },
  {
    path: '/report/shenzhentequ',
    component: SZTQ,
    meta: {
      title: '深圳特区报',
    },
  },
  {
    path: '/report/guangdongshenzhen',
    component: GDSZ,
    meta: {
      title: '深圳新闻网',
    },
  },
  {
    path: '/report/guangdongshenzhen/lldx',
    component: GDSZ1,
    meta: {
      title: '深圳新闻网',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});

export default router;
