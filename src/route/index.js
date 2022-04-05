import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
const routes = [
  // 配置路由
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
