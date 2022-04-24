<script setup>
import { inject } from "vue";

const goodsDetail = inject("goodsDetail");
</script>
<template>
  <div class="goods-detail" v-if="goodsDetail">
    <!-- 属性 -->
    <ul class="attrs">
      <li v-for="(attr, index) in goodsDetail.details.properties" :key="index">
        <span class="dt">{{ attr.name }}</span>
        <span class="dd">{{ attr.value }}</span>
      </li>
    </ul>
    <!-- 图片 -->
    <img
      v-for="(img, index) in goodsDetail.details.pictures"
      :src="img"
      alt=""
      :key="index"
    />
  </div>
</template>

<style scoped>
.goods-detail {
  padding: 40px;
}
.goods-detail .attrs {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.goods-detail .attrs li {
  display: flex;
  margin-bottom: 10px;
  width: 50%;
}
.goods-detail .attrs li .dt {
  width: 100px;
  color: #999;
}
.goods-detail .attrs li .dd {
  flex: 1;
  color: #666;
}
.goods-detail > img {
  width: 100%;
}
</style>
