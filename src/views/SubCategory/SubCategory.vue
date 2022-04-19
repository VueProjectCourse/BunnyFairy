<script setup>
import DefaultLayout from "../DefaultLayout/DefaultLayout.vue";
import {
  useBread,
  reqParams,
  setReqParams,
  useGoods,
  filterGoodsList,
} from "./useSubCategory";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import SubFilter from "./SubFilter/SubFilter.vue";
import SubSort from "./SubSort/SubSort.vue";
import GoodsList from "./GoodsList/GoodsList.vue";
import { onMounted, watch } from "vue";
const { topCate, subCate } = useBread();

onMounted(() => {
  const route = useRoute();
  reqParams.value.categoryId = route.params.id;
  useGoods();
});

onBeforeRouteUpdate((to) => {
  reqParams.value.categoryId = to.params.id;
  useGoods();
});

watch(
  () => reqParams.value,
  () => {
    useGoods();
  }
);
</script>
<template>
  <DefaultLayout>
    <div class="subcategory" style="background-color: #f5f5f5">
      <div class="container">
        <!-- 面包屑导航 -->
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <BreadItem :path="`/category/${topCate?.id}`">{{
            topCate?.name
          }}</BreadItem>
          <Transition name="fade-right" mode="out-in">
            <BreadItem :key="subCate?.id">{{ subCate?.name }}</BreadItem>
          </Transition>
        </Bread>
        <!-- 筛选区域 -->
        <SubFilter @onFilterParamsChanged="setReqParams" />
        <!-- 排序区域 -->
        <div class="goods-list">
          <SubSort @onSortParamsChanged="setReqParams" />
          <!-- 商品列表 -->
          <GoodsList :goods="filterGoodsList.items" v-if="filterGoodsList" />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.goods-list {
  background-color: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
