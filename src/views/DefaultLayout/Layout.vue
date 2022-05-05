<script setup>
// 1.引入 顶部通栏组件
import TopNav from "./TopNav/TopNav.vue";
// 2.引入 头部组件
import AppHeader from "./AppHeader/AppHeader.vue";
// 3.引入 底部组件
import AppFooter from "./AppFooter/AppFooter.vue";
// 4.引入 吸顶导航组件
import HeaderSticky from "./HeaderSticky/HeaderSticky.vue";

// 从cateStore中导出 useCateStore方法
import { useCateStore } from "@/stores/cateStore";
// 通过调用useCateStore方法来获取cateStore实例
const cateStore = useCateStore();
// 通过cateStore实例来调用初始化分类方法
cateStore.initCategories();
</script>

<template>
  <TopNav />
  <AppHeader />
  <HeaderSticky />
  <!-- 插槽: 未来页面 不一样的地方就放在这里 -->
  <slot />
  <AppFooter />
</template>
