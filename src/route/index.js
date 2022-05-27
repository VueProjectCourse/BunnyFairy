import { createRouter, createWebHashHistory } from "vue-router";
import authGuard from "./authGuard";
// 导入Home组件
import Home from "@/views/Home/Home.vue";
import Login from "@/views/Login/Login.vue";

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
    name: "callback",
    component: () => import("@/views/Login/LoginCallback/LoginCallback.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/Cart/Cart.vue"),
  },
  {
    path: "/checkout/order",
    name: "order",
    component: () => import("@/views/Pay/Order/Order.vue"),
  },
  {
    path: "/checkout/pay",
    component: () => import("@/views/Pay/Pay.vue"),
  },
  {
    path: "/pay/callback",
    component: () => import("@/views/Pay/PayResult/PayResult.vue"),
  },
  {
    path: "/member/home",
    component: () => import("@/views/Member/Member.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // 始终让 滚动条到顶部
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach(authGuard);

export default router;
