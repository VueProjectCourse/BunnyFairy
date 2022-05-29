<script setup>
// 导入 useUserStore
import { useUserStore } from "@/stores/userStore";
import { useCartStore } from "../../../stores/cartStore";
import { useRouter } from "vue-router";
// 导入 storeToRefs
import { storeToRefs } from "pinia";
// 解构出 profile
const { profile } = storeToRefs(useUserStore());
const userStore = useUserStore();
const cartStore = useCartStore();
const router = useRouter();
const handlerLogout = () => {
  // 1.清理store中的数据
  userStore.$reset();
  cartStore.$reset();
  // 2.跳转路由
  router.push("/login");
};
</script>
<template>
  <nav class="app-top-nav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li>
            <!-- <a href="javascript:"> <i class="iconfont icon-user"></i>周杰伦 </a> -->

            <RouterLink to="/member/home">
              <i class="iconfont icon-user"></i>
              {{ profile.account }}
            </RouterLink> 
          </li>
          <li>
            <a href="javascript:" @click="handlerLogout">退出登录</a>
          </li>
        </template>
        <template v-else>
          <li>
            <!-- <a href="javascript:">请先登录</a> -->

            <RouterLink to="/login">请先登录</RouterLink>
          </li>
          <li>
            <a href="javascript:">免费注册</a>
          </li>
        </template>
        <li>
          <a href="javascript:">我的订单</a>
        </li>
        <li>
          <a href="javascript:">会员中心</a>
        </li>
        <li>
          <a href="javascript:">帮助中心</a>
        </li>
        <li>
          <a href="javascript:">关于我们</a>
        </li>
        <li>
          <a href="javascript:"> <i class="iconfont icon-phone"></i>手机版 </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.app-top-nav {
  background: #333;
}

.app-top-nav ul {
  display: flex;
  height: 53px;
  justify-content: flex-end;
  align-items: center;
}

.app-top-nav ul a {
  padding: 0 15px;
  color: #cdcdcd;
  line-height: 1;
  display: inline-block;
}

.app-top-nav ul a:hover {
  /* color: 属性值是一个变量 */
  /* 格式: 属性名: var(变量名) */
  color: var(--primary-color);
}

.app-top-nav li ~ li a {
  border-left: 2px solid #666;
}

.app-top-nav ul i {
  font-size: 14px;
  margin-right: 2px;
}
</style>
