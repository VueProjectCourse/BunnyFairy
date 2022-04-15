<script setup>
import DefaultLayout from "@/views/DefaultLayout/DefaultLayout.vue";
import Category from "./Category/Category.vue";
import Banner from "./Banner/Banner.vue";
import New from "./New/New.vue";
import Hot from "./Hot/Hot.vue";
import Brand from "./Brand/Brand.vue";
import Product from "./Product/Product.vue";
import Special from "./Special/Special.vue";
</script>

<template>
  <DefaultLayout>
    <div class="container">
      <Category />
      <Banner />
    </div>

    <New />
    <Hot />
    <Brand />
    <Product />
    <Special />
  </DefaultLayout>
</template>
