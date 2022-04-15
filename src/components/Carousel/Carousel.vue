<script setup>
import { useCarouselEffect } from "./useCarousel";
const props = defineProps({
  carousel: {
    type: Array,
  },
  auto: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const { currentIndex, toggle, autoPlay, stopPlay } = useCarouselEffect(
  props.auto,
  props.carousel,
  props.duration
);
</script>
<template>
  <div class="xtx-carousel" @mouseenter="stopPlay" @mouseleave="autoPlay">
    <ul class="carousel-body">
      <li
        class="carousel-item"
        v-for="(item, index) in carousel"
        :key="item.id"
        :class="{ fade: index === currentIndex }"
      >
        <RouterLink :to="item.hrefUrl">
          <img :src="item.imgUrl" alt />
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:" class="carousel-btn prev" @click="toggle(-1)">
      <i class="iconfont icon-angle-left"></i>
    </a>
    <a href="javascript:" class="carousel-btn next" @click="toggle(1)">
      <i class="iconfont icon-angle-right"></i>
    </a>
    <div class="carousel-indicator">
      <span
        v-for="(item, index) in carousel"
        :key="item.id"
        :class="{ active: index === currentIndex }"
        @click="currentIndex = index"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
}

.xtx-carousel .carousel-body {
  width: 100%;
  height: 100%;
}

.xtx-carousel .carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
}

.xtx-carousel .carousel-item.fade {
  opacity: 1;
  z-index: 1;
}

.xtx-carousel .carousel-item img {
  width: 100%;
  height: 100%;
}

.xtx-carousel .carousel-indicator {
  position: absolute;
  left: 0;
  bottom: 20px;
  z-index: 2;
  width: 100%;
  text-align: center;
}

.xtx-carousel .carousel-indicator span {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
}

.xtx-carousel .carousel-indicator span ~ span {
  margin-left: 12px;
}

.xtx-carousel .carousel-indicator span.active {
  background: #fff;
}

.xtx-carousel .carousel-btn {
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 228px;
  z-index: 2;
  text-align: center;
  line-height: 44px;
  opacity: 0;
  transition: all 0.5s;
}

.xtx-carousel .carousel-btn.prev {
  left: 20px;
}

.xtx-carousel .carousel-btn.next {
  right: 20px;
}

.xtx-carousel:hover .carousel-btn {
  opacity: 1;
}
</style>
