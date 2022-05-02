<script setup>
import { category, useCategory } from "./useRecommendGoods"
import GoodsItem from "../GoodsItem/GoodsItem.vue";
import { useRoute,onBeforeRouteUpdate } from "vue-router"
import { onMounted } from "vue";
const route = useRoute();

onMounted(() => {
  useCategory(route.params.id);
})

// 因为在页面中 点击其他分类 数据不会发生变化
// 当路由发生变化的时候 重新加载数据
onBeforeRouteUpdate((to)=>{
  // 即将要跳转的那个路径的分类id
    useCategory(to.params.id);
})


</script>

<template >
  <template v-for="item in category?.children" :key="item?.id">
     <div class="ref-goods" v-if="item.goods.length > 0">
    <div class="head">
      <h3>- {{ item?.name }} -</h3>
      <p class="tag">温暖柔软，品质之选</p>
      <More />
    </div>
    <div class="body">
        <GoodsItem :goods="subitem" v-for="subitem in item.goods" :key="subitem.id" />
    </div>
  </div>
  </template>
 
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