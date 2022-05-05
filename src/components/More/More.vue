<script setup>
defineProps({
  path: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <RouterLink :to="path" class="xtx-more">
    <span>查看全部</span>
    <i class="iconfont icon-angle-right"></i>
  </RouterLink>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.xtx-more {
  margin-bottom: 2px;
}

.xtx-more span {
  font-size: 16px;
  vertical-align: middle;
  margin-right: 4px;
  color: #999;
}

.xtx-more i {
  font-size: 14px;
  vertical-align: middle;
  position: relative;
  top: 2px;
  color: #ccc;
}

.xtx-more:hover span,
.xtx-more:hover i {
  color: var(--primary-color);
}
=======
