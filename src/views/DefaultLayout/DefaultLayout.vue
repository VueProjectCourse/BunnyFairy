<script setup>
import TopNav from "./TopNav/TopNav.vue";
import Header from "./Header/Header.vue";
import StickyHeader from "./StickyHeader/StickyHeader.vue";
import Footer from "./Footer/Footer.vue";
import { useCateStore } from "@/stores/cateStore"
const cateStore = useCateStore();
cateStore.initCategories();

</script>
<template>
  <!-- 顶部导航 -->
  <TopNav />
  <!-- 头部 -->
  <Header />
  <!-- 吸顶头部 -->
  <StickyHeader />
  <slot />
  <!-- 底部 -->
  <Footer />
</template>
