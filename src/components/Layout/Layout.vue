<script setup>
import TopNav from "../TopNav/TopNav.vue";
import AppHeader from "../AppHeader/AppHeader.vue";
import HeaderSticky from "../HeaderSticky/HeaderSticky.vue";
import AppFooter from "../AppFooter/AppFooter.vue";
import { useCateStore } from "../../stores/cateStore"
const cateStore = useCateStore();
cateStore.initCategories();

</script>
<template>
  <!-- 顶部导航 -->
  <TopNav />
  <!-- 头部 -->
  <AppHeader />
  <!-- 吸顶头部 -->
  <HeaderSticky />
  <slot />
  <!-- 底部 -->
  <AppFooter />
</template>
