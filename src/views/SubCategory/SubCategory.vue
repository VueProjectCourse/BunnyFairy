<script setup>
import Layout from "@/views/DefaultLayout/DefaultLayout.vue"
import { useBread } from "./useSubCategory"
import SubFilter from "./SubFilter/SubFilter.vue";
const { topCate, subCate } = useBread();

</script>

<template>
  <Layout>
    <div class="container">
      <Bread>
        <BreadItem path="/">首页</BreadItem>
        <BreadItem :path="`/category/${topCate?.id}`">{{ topCate?.name }}</BreadItem>
        <Transition name="fade-right" mode="out-in">
          <BreadItem :path="`/category/sub/${subCate?.id}`" :key="subCate?.id">{{ subCate?.name }}</BreadItem>
        </Transition>
      </Bread>

      <SubFilter/>
    </div>
  </Layout>
</template>


<style>
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
</style>