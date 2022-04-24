<script setup>
defineProps({
  size: {
    type: String,
    default: "middle",
  },

  type: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <button class="xtx-button ellipsis" :class="[size, type]">
    <slot></slot>
  </button>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.xtx-button {
  appearance: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
.xtx-button a {
  display: block;
  width: 100%;
  height: 100%;
}
/* 控制按钮尺寸 */
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
/* 控制按钮类型 */
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: var(--primary-color);
  background: var(--primary-color);
  color: #fff;
}
.plain {
  border-color: var(--primary-color);
  color: var(--primary-color);
  background: #e6faf6;
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
