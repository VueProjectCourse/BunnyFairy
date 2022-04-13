<script setup>
import Layout from "../../components/Layout/Layout.vue"
import { useBread } from "./useTopCategory"
const { topCate } = useBread();

</script>

<template>
  <Layout>
    <Transition name="fade-right" mode="out-in">
      <Bread>
        <BreadItem path="/">首页</BreadItem>
        <BreadItem :key="topCate?.id" :path="`/category/${topCate?.id}`">{{topCate?.name}}</BreadItem>
      </Bread>
    </Transition>
  </Layout>
</template>