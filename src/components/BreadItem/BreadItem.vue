<script setup>
// 接收path属性
defineProps(["path"])
</script>

<template>
  <div class="xtx-bread-item">
    <!-- 判断使用该组件的时候 是否传递path 如果传递了path那么 就用超链接展示 -->
    <RouterLink v-if="path" :to="path">
      <slot></slot>
    </RouterLink>
    <!-- 如果没有传递path属性 那么就展示成普通文本 -->
    <span v-else>
      <slot></slot>
    </span>
  </div>
</template>


<style scoped>
@import "@/assets/styles/variable.css";

.xtx-bread-item a {
  color: #666;
  transition: all 0.4s;
}

.xtx-bread-item a:hover {
  color: var(--primary-color);
}
</style>

