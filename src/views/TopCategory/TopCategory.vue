<script setup>
import DefaultLayout from "@/views/DefaultLayout/DefaultLayout.vue";
import SubCategoryList from "./SubCategoryList/SubCategoryList.vue";
import GoodsRecommend from "./GoodsRecommend/GoodsRecommend.vue";

import { useBread, useTopCateBanner } from "./useTopCategory";
const { topCate } = useBread();
const { carouselList } = useTopCateBanner();
</script>

<template>
  <DefaultLayout>
    <div class="top-category" style="background-color: #f5f5f5">
      <div class="container">
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <Transition name="fade-right" mode="out-in">
            <BreadItem :key="topCate?.id" :path="`/category/${topCate?.id}`">{{
              topCate?.name
            }}</BreadItem>
          </Transition>
        </Bread>

        <Carousel
          v-if="carouselList"
          :auto="true"
          :carousel="carouselList"
          :style="{ height: '500px' }"
        ></Carousel>

        <SubCategoryList :subCategories="topCate.children" v-if="topCate" />

        <GoodsRecommend />
      </div>
    </div>
  </DefaultLayout>
</template>
