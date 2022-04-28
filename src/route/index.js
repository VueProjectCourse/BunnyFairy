import { createRouter, createWebHashHistory } from "vue-router";
// 导入Home组件
import Home from "@/views/Home/Home.vue";
import Login from "@/views/Login/Login.vue";
// 路由规则

const routes = [
  // 首页路由
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/category/:id",
    name: "topcategory",
    component: () => import("@/views/TopCategory/TopCategory.vue"),
  },
  {
    path: "/category/sub/:id",
    name: "subcategory",
    component: () => import("@/views/SubCategory/SubCategory.vue"),
  },
  {
    path: "/goods/:id",
    name: "detail",
    component: () => import("@/views/Detail/Detail.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/login/callback",
    component: () => import("@/views/login/LoginCallback/LoginCallback.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // 始终让 滚动条到顶部
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
