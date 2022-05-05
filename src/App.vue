<script setup></script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/styles/variable.css";

#app {
  
  background-color: var(--white-color);
  user-select: none;
}

/* 布局容器 做版心的  */
.container {
  position: relative;
  width: 1240px;
  margin: 0 auto;

}
</style>
