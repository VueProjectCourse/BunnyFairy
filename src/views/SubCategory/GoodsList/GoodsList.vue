<script setup>
defineProps({
  goods: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul>
    <li v-for="item in goods" :key="item.id">
      <GoodsItem :goods="item" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
}

ul li {
  margin-right: 20px;
  margin-bottom: 20px;
}

ul li:nth-child(5n) {
  margin-right: 0;
}
</style>
