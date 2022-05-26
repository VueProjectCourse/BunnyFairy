<script setup>
import MemberSidebar from "./MemberSidebar/MemberSidebar.vue";
import Layout from "../DefaultLayout/Layout.vue";
</script>

<template>
  <Layout>
    <div class="container">
      <MemberSidebar />
      <article class="article">
        <slot />
      </article>
    </div>
  </Layout>
</template>

<style scoped>
.container {
  display: flex;
  padding-top: 20px;
}
.container .article {
  width: 1000px;
  position: relative;
}
</style>
