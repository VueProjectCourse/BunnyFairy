<script setup>
import { ref, inject } from "vue";
import GoodsDetail from "../GoodsDetail/GoodsDetail.vue";
import GoodsComment from "../GoodsComment/GoodsComment.vue";
const detail = inject("goodsDetail");
const activeComponentName = ref("GoodsDetail");
</script>
<template>
  <div class="goods-tabs">
    <nav>
      <a
        href="javascript:"
        :class="{ active: activeComponentName === 'GoodsDetail' }"
        @click="activeComponentName = 'GoodsDetail'"
        >商品详情</a
      >
      <a
        href="javascript:"
        :class="{ active: activeComponentName === 'GoodsComment' }"
        @click="activeComponentName = 'GoodsComment'"
        >商品评价<span
          >({{
            detail?.commentCount > 500 ? "500+" : detail?.commentCount
          }})</span
        ></a
      >
    </nav>
    <!-- 切换内容的地方 -->
    <!-- <component :is="activeComponentName"></component> -->

    <GoodsDetail v-show="activeComponentName === 'GoodsDetail'" />
    <GoodsComment v-show="activeComponentName === 'GoodsComment'" />
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-tabs nav {
  height: 70px;
  line-height: 70px;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
}
.goods-tabs nav a {
  padding: 0 40px;
  font-size: 18px;
  position: relative;
}
.goods-tabs nav a > span {
  color: var(--price-color);
  font-size: 16px;
  margin-left: 10px;
}
.goods-tabs nav a:first-child {
  border-right: 1px solid #f5f5f5;
}
.goods-tabs nav a.active::before {
  content: "";
  position: absolute;
  left: 40px;
  bottom: -1px;
  width: 72px;
  height: 2px;
  background: var(--primary-color);
}
</style>
