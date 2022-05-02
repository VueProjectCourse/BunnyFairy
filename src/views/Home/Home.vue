<script setup>
// 引入 布局模板组件
import Layout from '../DefaultLayout/Layout.vue';
// 引入 首页分类菜单组件
import HomeCategory from './HomeCategory/HomeCategory.vue';
// 引入 首页轮播图组件
import HomeBanner from './HomeBanner/HomeBanner.vue';
// 引入 新鲜好物组件
import HomeNew from './HomeNew/HomeNew.vue';
// 引入 人气推荐组件
import HomeHot from './HomeHot/HomeHot.vue';
// 引入 热门品牌组件
import HomeBrand from './HomeBrand/HomeBrand.vue';
// 引入 产品区块
import HomeProduct from './HomeProduct/HomeProduct.vue';
// 引入 最新专题
import HomeSpecial from './HomeSpecial/HomeSpecial.vue';
</script>

<template>
  <Layout>
    <div class="container">
      <!-- 分类菜单 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner/>
    </div>
    <!-- 新鲜好物 -->
    <HomeNew/>
    <!-- 人气推荐 -->
    <HomeHot/>
    <!-- 热门品牌 -->
    <HomeBrand/>
    <!-- 产品区块 -->
    <HomeProduct/>
    <!-- 最新专题 -->
    <HomeSpecial/>
  </Layout>
</template>