<script setup>
import Layout from "../../components/Layout/Layout.vue"
import { useBread } from "./useSubCategory"
const { topCate,subCate } = useBread();

</script>

<template>
  <Layout>
    <Transition name="fade-right" mode="out-in">
      <Bread>
        <BreadItem path="/">首页</BreadItem>
        <BreadItem :path="`/category/${topCate?.id}`" :key="topCate?.id">{{topCate?.name}}</BreadItem>
        <BreadItem :path="`/category/sub/${subCate?.id}`" :key="subCate?.id">{{subCate?.name}}</BreadItem>
      </Bread>
    </Transition>
  </Layout>
</template>