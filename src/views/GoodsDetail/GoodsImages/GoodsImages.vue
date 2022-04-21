<script setup>
import { ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";
import { useCurrent, useToggle, useLayer, useLarge } from "./GoodsImages";
defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});

const { current, setCurrent } = useCurrent();
const { isShow, setIsShow } = useToggle();
const { layerPosition, setLayerPosition } = useLayer();
const { largePosition, setLargePosition } = useLarge();

// 声明监听元素
const middleElement = ref(null);
// 获取鼠标是否移入移出的布尔值
const { isOutside, elementX, elementY } = useMouseInElement(middleElement);
// 监听鼠标的移动
watch([isOutside, elementX, elementY], () => {
  // 如果鼠标进入(false) 镜片和大图显示 否则(true)隐藏
  setIsShow(!isOutside.value);

  setLayerPosition(elementX, elementY);

  setLargePosition(layerPosition);
});
</script>

<template>
  <div class="goods-image">
    <div
      class="large"
      :style="{
        backgroundImage: `url(${images[current]})`,
        backgroundPositionX: largePosition.x + 'px',
        backgroundPositionY: largePosition.y + 'px',
      }"
      v-show="isShow"
    ></div>
    <div class="middle" ref="middleElement">
      <div
        class="layer"
        v-show="isShow"
        :style="{
          left: layerPosition.left + 'px',
          top: layerPosition.top + 'px',
        }"
      ></div>
      <img :src="images[current]" alt="" />
    </div>
    <ul class="small">
      <li
        v-for="(item, index) in images"
        :key="item"
        @mouseenter="setCurrent(index)"
        :class="{ active: current === index }"
      >
        <img :src="item" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
}

.goods-image .large {
  position: absolute;
  top: 0;
  left: 412px;
  width: 400px;
  height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: 800px 800px;
  background-color: #f8f8f8;
}

.goods-image .middle {
  width: 400px;
  height: 400px;
  background: #f5f5f5;
  position: relative;
  cursor: move;
}

.goods-image .middle .layer {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
  position: absolute;
}
.goods-image .small {
  width: 80px;
}
.goods-image .small li {
  width: 68px;
  height: 68px;
  margin-left: 12px;
  margin-bottom: 15px;
  cursor: pointer;
}
.goods-image .small li:hover,
.goods-image .small li.active {
  border: 2px solid var(--primary-color);
}
</style>
