<template>
  <div class="home-banner">
    <Carousel />
  </div>
</template>



<style scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
.home-banner .xtx-carousel :deep(.carousel-btn.prev) {
  left: 270px;
}
.home-banner .xtx-carousel :deep(.carousel-indicator) {
  padding-left: 250px;
}
</style>