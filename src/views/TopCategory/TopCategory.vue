<script setup>
import Layout from "../../components/Layout/Layout.vue"
import { useBread } from "./useTopCategory"
const { topCate } = useBread();

</script>

<template>
  <Layout>

    <Bread>
      <BreadItem path="/">首页</BreadItem>
      <Transition name="fade-right" mode="out-in">
        <BreadItem :key="topCate?.id" :path="`/category/${topCate?.id}`">{{ topCate?.name }}</BreadItem>
      </Transition>
    </Bread>

  </Layout>
</template>