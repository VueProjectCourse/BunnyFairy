<script setup>
import { onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import GoodsItem from "../GoodsItem/GoodsItem.vue";
import { category, readCategory } from "./useGoodsRecommend";
// 获取路由信息对象
const route = useRoute();
onMounted(() => {
  readCategory(route.params.id);
});

onBeforeRouteUpdate((to) => {
  readCategory(to.params.id);
});
</script>
<template>
  <div class="ref-goods" v-for="item in category?.children" :key="item.id">
    <div class="head">
      <h3>- {{ item.name }} -</h3>
      <p class="tag">{{ item.saleProperties }}</p>
      <More />
    </div>
    <div class="body">
      <GoodsItem
        :goods="subitem"
        v-for="subitem in item.goods"
        :key="subitem.id"
      />
    </div>
  </div>
</template>

<style scoped>
.ref-goods {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
}

.ref-goods h3 {
  font-size: 28px;
  color: #666;
  font-weight: normal;
  text-align: center;
  line-height: 100px;
}

.ref-goods .head .xtx-more {
  position: absolute;
  top: 20px;
  right: 20px;
}

.ref-goods .head .tag {
  text-align: center;
  color: #999;
  font-size: 20px;
  position: relative;
  top: -20px;
}

.ref-goods .body {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 65px 30px;
}
</style>
