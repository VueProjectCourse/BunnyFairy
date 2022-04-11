<script setup>
import Layout from "@/components/Layout/Layout.vue";
import HomeCategory from "../../components/HomeCategory/HomeCategory.vue";
import HomeBanner from "../../components/HomeBanner/HomeBanner.vue";
import HomeNew from "../../components/HomeNew/HomeNew.vue";
import HomeHot from "../../components/HomeHot/HomeHot.vue";
</script>

<template>
  <Layout>
    <div class="container">
      <HomeCategory />
      <HomeBanner />
    </div>

    <HomeNew />
    <HomeHot />
  </Layout>
</template>
