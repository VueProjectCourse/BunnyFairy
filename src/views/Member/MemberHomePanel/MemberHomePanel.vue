<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="home-panel">
    <div class="header">
      <h4>{{ title }}</h4>
      <More to="/" />
    </div>
    <!-- 商品列表 -->
    <div class="goods-list">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.home-panel {
  background-color: #fff;
  padding: 0 20px;
  margin-top: 20px;
  height: 400px;
}
.home-panel .header {
  height: 66px;
  border-bottom: 1px solid #f5f5f5;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.home-panel .header h4 {
  font-size: 22px;
  font-weight: normal;
}
.home-panel .goods-list {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
</style>
