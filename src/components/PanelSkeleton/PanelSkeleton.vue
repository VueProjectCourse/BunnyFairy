<script setup>
defineProps({
  bg: {
    type: String,
    default: "#fff",
  },
});
</script>

<template>
  <div class="home-skeleton">
    <div class="item" v-for="i in 4" :key="i" :style="{ backgroundColor: bg }">
      <Skeleton bg="#e4e4e4" width="306px" height="306px" animated="scroll" />
      <Skeleton bg="#e4e4e4" width="160px" height="24px" animated="scroll" />
      <Skeleton bg="#e4e4e4" width="120px" height="24px" animated="scroll" />
    </div>
  </div>
</template>

<style scoped>
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
}

.home-skeleton .item {
  width: 306px;
}

.home-skeleton .xtx-skeleton ~ .xtx-skeleton {
  display: block;
  margin: 16px auto 0;
}
</style>
