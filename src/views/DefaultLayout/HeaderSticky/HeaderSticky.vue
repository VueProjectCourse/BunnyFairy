<script setup>
import HeaderNav from '../HeaderNav/HeaderNav.vue';
import { useWindowScroll } from "@vueuse/core"

// import { useWindowScroll } from "./useBarScroll"
// const { scrollTop } = useWindowScroll();

const {y: scrollTop} = useWindowScroll();


</script>

<template>
  <div class="header-sticky" :class="{ show: scrollTop > 80 }">
    <div class="container" v-show="scrollTop > 80">
      <RouterLink to="/" class="logo" />
      <HeaderNav />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  transform: translateY(-100%);
  opacity: 0;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
}

.header-sticky.show {
  transform: none;
  opacity: 1;
  transition: all 0.3s linear;
}
.container {
  display: flex;
  align-items: center;
}
.logo {
  width: 200px;
  height: 80px;
  background: url(@/assets/images/logo.png) no-repeat right 2px;
  background-size: 160px auto;
}
.right {
  width: 220px;
  display: flex;
  text-align: center;
  padding-left: 40px;
  border-left: 2px solid var(--primary-color);
}
.right a {
  width: 38px;
  margin-right: 40px;
  font-size: 16px;
  line-height: 1;
}
.right a:hover {
  color: var(--primary-color);
}
</style>