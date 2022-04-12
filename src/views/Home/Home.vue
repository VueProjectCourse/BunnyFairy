<script setup>
import Layout from "@/components/Layout/Layout.vue";
import HomeCategory from "../../components/HomeCategory/HomeCategory.vue";
import HomeBanner from "../../components/HomeBanner/HomeBanner.vue";
import HomeNew from "../../components/HomeNew/HomeNew.vue";
import HomeHot from "../../components/HomeHot/HomeHot.vue";
import HomeBrand from "../../components/HomeBrand/HomeBrand.vue";
import HomeProduct from "../../components/HomeProduct/HomeProduct.vue";

</script>

<template>
  <Layout>
    <div class="container">
      <HomeCategory />
      <HomeBanner />
    </div>

    <HomeNew />
    <HomeHot />
    <HomeBrand/>
    <HomeProduct/>
  </Layout>
</template>
