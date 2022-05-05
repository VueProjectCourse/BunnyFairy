<script setup>
import Layout from '../DefaultLayout/Layout.vue';
import { useBread, useTopCateCarousel } from "./useTopCategory";
import SubCateList from "./SubCateList/SubCateList.vue";
import RecommendGoods from './RecommendGoods/RecommendGoods.vue';
const { topCate } = useBread()
const { carouselList } = useTopCateCarousel();
</script>
<template>
  <Layout>
    <div class="container">
      <!-- 面包屑导航 -->
      <Bread>
        <BreadItem path="/">首页</BreadItem>
        <Transition name="fade-right" mode="out-in">
          <BreadItem :key="topCate?.id">{{ topCate?.name }}</BreadItem>
        </Transition>
      </Bread>
      <!-- 轮播图 -->
      <Carousel v-if="carouselList" :carousels="carouselList" :auto="true" :style="{ height: '500px' }"></Carousel>
      <!-- 全部分类 -->
      <SubCateList v-if="topCate" :subCategories="topCate?.children"></SubCateList>
      <!-- 推荐商品 -->
      <RecommendGoods/>
    </div>
  </Layout>
</template>