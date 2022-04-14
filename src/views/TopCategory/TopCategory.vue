<script setup>
import Layout from "../../components/Layout/Layout.vue"
import SubCategoryList from "../../components/SubCategoryList/SubCategoryList.vue"
import { useBread, useTopCateBanner } from "./useTopCategory"
import GoodsRecommend from "../../components/GoodsRecommend/GoodsRecommend.vue";
const { topCate } = useBread();
const { carouselList } = useTopCateBanner();

</script>

<template>
  <Layout>
    <div class="container top-category">
      <Bread>
        <BreadItem path="/">首页</BreadItem>
        <Transition name="fade-right" mode="out-in">
          <BreadItem :key="topCate?.id" :path="`/category/${topCate?.id}`">{{ topCate?.name }}</BreadItem>
        </Transition>
      </Bread>

      <Carousel v-if="carouselList"  :auto="true" :carousel="carouselList" :style="{ height: '500px' }"></Carousel>

      <SubCategoryList :subCategories="topCate.children" v-if="topCate" />

      <GoodsRecommend/>
    </div>
  </Layout>
</template>