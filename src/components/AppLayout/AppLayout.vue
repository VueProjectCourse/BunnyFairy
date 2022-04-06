<script setup>
import AppTopNav from "../AppTopNav/AppTopNav.vue";
import AppHeader from "../AppHeader/AppHeader.vue";
import AppFooter from "../AppFooter/AppFooter.vue";
import { useCateStore } from "../../stores/cateStore"
const cateStore = useCateStore();
cateStore.initCategories();

</script>
<template>
  <AppTopNav />
  <AppHeader />
  <slot />
  <AppFooter />
</template>
