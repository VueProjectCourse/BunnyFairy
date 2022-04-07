<script setup>
import TopNav from "../TopNav/TopNav.vue";
import AppHeader from "../AppHeader/AppHeader.vue";
import AppFooter from "../AppFooter/AppFooter.vue";
import { useCateStore } from "../../stores/cateStore"
const cateStore = useCateStore();
cateStore.initCategories();

</script>
<template>
  <TopNav />
  <AppHeader />
  <slot />
  <AppFooter />
</template>
