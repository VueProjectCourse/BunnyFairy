import { createRouter, createWebHashHistory } from "vue-router";
// 导入Home组件
import Home from "../views/Home/Home.vue";

const routes = [
  // 路由规则

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
    name: "goodsdetail",
    component: () => import("@/views/GoodsDetail/GoodsDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // 始终让 滚动条到顶部
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
