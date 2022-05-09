import home from "../views/home/index.vue";
import mine from "../views/mine/index.vue";

import { createRouter, createWebHistory } from "vue-router";

const routers = [
  {
    path: "/",
    name: "home",
    component: home,
    mate: {
      title: "首页",
      keeplive: false,
    },
  },
  {
    path: "/mine",
    name: "mine",
    component: mine,
    mate: {
      title: "",
      keeplive: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
