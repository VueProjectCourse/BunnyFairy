<script setup>
import { useGoodsRelevant } from "./GoodsRelevant";
import Carousel from "../../../components/Carousel/Carousel.vue";
const props = defineProps({
  goodsId: {
    type: String,
  },
});

const { relevant, setReleVant } = useGoodsRelevant(props.goodsId);

setReleVant();
</script>
<template>
  <div class="goods-relevant">
    <div class="header">
      <i class="icon"></i>
      <span class="title">{{ goodsId ? "同类商品" : "猜你喜欢" }}</span>
    </div>
    <!-- 此处使用改造后的carousel.vue -->
    <Carousel v-if="relevant" :carousels="relevant" />
  </div>
</template>

<style scoped>
.goods-relevant {
  background: #fff;
  min-height: 460px;
  margin-top: 20px;
}
.goods-relevant .header {
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
}
.goods-relevant .header .title {
  font-size: 20px;
  padding-left: 10px;
}
.goods-relevant .header .icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  border-top: 4px solid #27ba9b;
  border-right: 4px solid #27ba9b;
  box-sizing: border-box;
  position: relative;
  transform: rotate(45deg);
}
.goods-relevant .header .icon::before {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  left: 0;
  top: 2px;
  background: #bcf1e6;
}

.goods-relevant :deep(.xtx-carousel) {
  height: 380px;
}
.goods-relevant :deep(.xtx-carousel) .carousel-indicator {
  bottom: 30px;
}
.goods-relevant :deep(.xtx-carousel) .carousel-indicator span.active {
  background: var(--primary-color);
}
.goods-relevant :deep(.xtx-carousel) .carousel-btn {
  top: 110px;
  opacity: 1;
  background: rgba(0, 0, 0, 0);
  color: #ddd;
}
.goods-relevant :deep(.xtx-carousel) .carousel-btn i {
  font-size: 30px;
}
</style>
