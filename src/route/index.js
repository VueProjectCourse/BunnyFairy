import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import TopCategory from "../views/TopCategory/TopCategory.vue"
import SubCategory from "../views/SubCategory/SubCategory.vue"

const routes = [
  // 配置路由
  { path: "/", component: Home},
  { path: "/category/:id", component: TopCategory },
  { path: "/category/sub/:id", component: SubCategory },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
