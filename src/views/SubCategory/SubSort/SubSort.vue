<script setup>
import { ref } from "vue";
const cc = ref(0);
console.log(cc.value);
</script>
<template>
  <div class="sub-sort">
    <div class="sort">
      <a href="javascript:">默认排序</a>
      <a href="javascript:">最新商品</a>
      <a href="javascript:">最高人气</a>
      <a href="javascript:">评论最多</a>
      <a href="javascript:">
        价格排序
        <i class="arrow up"></i>
        <i class="arrow down"></i>
      </a>
    </div>
    <div class="check">
      <Checkbox>仅显示有货商品</Checkbox>
      <Checkbox>仅显示特惠商品</Checkbox>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sub-sort .sort {
  display: flex;
}
.sub-sort .sort a {
  height: 30px;
  line-height: 28px;
  border: 1px solid #e4e4e4;
  padding: 0 20px;
  margin-right: 20px;
  color: #999;
  border-radius: 2px;
  position: relative;
  transition: all 0.3s;
}
.sub-sort .sort a.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}
.sub-sort .sort a .arrow {
  position: absolute;
  border: 5px solid transparent;
  right: 8px;
}
.sub-sort .sort a .arrow.up {
  top: 3px;
  border-bottom-color: #bbb;
}
.sub-sort .sort a .arrow.up.active {
  border-bottom-color: var(--primary-color);
}
.sub-sort .sort a .arrow.down {
  top: 15px;
  border-top-color: #bbb;
}
.sub-sort .sort a .arrow.down.active {
  border-top-color: var(--primary-color);
}
.sub-sort .check .xtx-checkbox {
  margin-left: 20px;
  color: #999;
}
</style>
