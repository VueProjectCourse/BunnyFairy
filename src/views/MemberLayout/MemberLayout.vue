<script setup>
import Layout from '../DefaultLayout/Layout.vue';
import MemberSidebar from "./MemberSidebar/MemberSidebar.vue"
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