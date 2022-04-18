<script setup>
import DefaultLayout from "@/views/DefaultLayout/DefaultLayout.vue";
import SubFilter from "./SubFilter/SubFilter.vue";
import SubSort from "./SubSort/SubSort.vue";
import GoodsList from "./GoodsList/GoodsList.vue";
import {
  useBread,
  useGoods,
  reqParams,
  useFilterSortParamsChanged,
} from "./useSubCategory";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { watchEffect } from "vue";

const route = useRoute();
reqParams.value.categoryId = route.params.id;
const { topCate, subCate } = useBread();
const { result } = useGoods(reqParams.value);

onBeforeRouteUpdate((to) => {
  reqParams.value = { categoryId: to.params.id };
});

watchEffect(() => {
  useGoods(reqParams.value);
});
</script>

<template>
  <DefaultLayout>
    <div class="container">
      <Bread>
        <BreadItem path="/">首页</BreadItem>
        <BreadItem :path="`/category/${topCate?.id}`">{{
          topCate?.name
        }}</BreadItem>
        <Transition name="fade-right" mode="out-in">
          <BreadItem
            :path="`/category/sub/${subCate?.id}`"
            :key="subCate?.id"
            >{{ subCate?.name }}</BreadItem
          >
        </Transition>
      </Bread>
      <!-- 条件过滤组件 -->
      <SubFilter @onFilterParamsChanged="useFilterSortParamsChanged" />
      <div class="goods-list">
        <!-- 商品排序组件 -->
        <SubSort @onSortParamsChanged="useFilterSortParamsChanged" />
      </div>
      <!-- 商品展示组件 -->
      <GoodsList :goods="result.items" v-if="result" />
    </div>
  </DefaultLayout>
</template>

<style scoped>
.fade-right-enter-from,
.fade-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s;
}

.fade-right-enter-to,
.fade-right-leave-from {
  transform: none;
  opacity: 1;
}

.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
