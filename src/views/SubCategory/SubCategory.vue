<script setup>
import Layout from "../DefaultLayout/Layout.vue";
import SubFilter from "./SubFilter/SubFilter.vue";
import SubSort from "./SubSort/SubSort.vue";
import GoodsList from "./GoodsList/GoodsList.vue";

import {
  useBread,
  reqParams,
  setReqParams,
  useGoods,
  filterGoodsList,
  loading,
  finished,
  loadMore,
} from "./useSubCategory";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { onMounted, watch } from "vue";
const { topCate, subCate } = useBread();

onMounted(() => {
  const route = useRoute();
  reqParams.value.categoryId = route.params.id;
  // 在发起请求之前，隐藏
  loading.value = false;
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
  <Layout>
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

        <!-- 通过父组件是否请求数据 数据是否请求完 来控制组件内容 loading的值 和finished的值 -->
        <!-- 如果xtx-infinite-loading 进入到可视区了 元素就要通过子组件往父组件传参 告诉父组件你应该去请求数据了 -->
        <InfiniteLoading
          :loading="loading"
          :finished="finished"
          @infinite="loadMore"
        />
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
