<script setup>
import { onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import GoodsItem from "../../TopCategory/GoodsItem/GoodsItem.vue";
import { useHotGoods } from "./GoodsHot";
const route = useRoute();
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
});

const { hotList, setHostList } = useHotGoods();

onMounted(() => {
  setHostList(route.params.id, props.type);
});

onBeforeRouteUpdate((to) => {
  setHostList(to.params.id, props.type);
});
</script>
<template>
  <div class="goods-hot">
    <h3 v-if="type == 1">24小时热销榜</h3>
    <h3 v-else-if="type == 2">周热销榜</h3>
    <h3 v-else>总热销榜</h3>
    <GoodsItem v-for="item in hotList" :key="item.id" :goods="item"></GoodsItem>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.goods-hot h3 {
  height: 70px;
  background: var(--auxiliary-color);
  color: #fff;
  font-size: 18px;
  line-height: 70px;
  padding-left: 25px;
  margin-bottom: 10px;
  font-weight: normal;
}
.goods-hot :deep(.goods-item) {
  background: #fff;
  width: 100%;
  margin-bottom: 10px;
}
.goods-hot :deep(.goods-item) img {
  width: 200px;
  height: 200px;
}
.goods-hot :deep(.goods-item) p {
  margin: 0 10px;
}
.goods-hot :deep(.goods-item):hover {
  transform: none;
  box-shadow: none;
}
</style>
