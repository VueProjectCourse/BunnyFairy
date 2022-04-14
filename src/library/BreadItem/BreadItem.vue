<script>
  export default {
    name:"BreadItem",
  }
</script>
<script setup>
defineProps({
  path: {
    type: String
  }
})

</script>

<template>
  <div class="xtx-bread-item">
    <!-- 如果传递了path属性，那么就渲染 超链接 -->
    <RouterLink v-if="path" :to="path">
      <slot></slot>
    </RouterLink>
    <!-- 如果没有传递path属性，那么就渲染为文本 -->
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