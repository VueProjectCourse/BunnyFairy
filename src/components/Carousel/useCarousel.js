import { ref, onMounted, onUnmounted } from "vue";

export const useCarouselEffect = (auto, carousels, duration) => {
  // 轮播图当前索引
  const currentIndex = ref(0);
  // 用于存储定时器
  const timer = ref(null);
  // 轮播图切换
  const toggle = (step = 1) => {
    // 计算索引
    const nextIndex = currentIndex.value + step;
    // 如果索引值小于了第一张图片的索引
    if (nextIndex < 0) {
      // 让索引值为最后一张图片的索引
      currentIndex.value = carousels.length - 1;
    } else if (nextIndex > carousels.length - 1) {
      // 让索引值为第一张图片的索引
      currentIndex.value = 0;
    } else {
      // 索引值范围正常
      currentIndex.value = nextIndex;
    }
  };
  // 自动轮播
  const autoPlay = () => {
    // 判断调用者是否开启了自动轮播
    // 判断是否有轮播图数据
    if (auto && carousels.length > 1) {
      // 开启
      timer.value = setInterval(toggle, duration);
    }
  };
  // 停止自动轮播
  const stopPlay = () => {
    clearInterval(timer.value);
  };
  // 组件挂载完成后试图开启自动轮播
  onMounted(autoPlay);
  // 组件卸载之后停止自动轮播
  onUnmounted(stopPlay);
  return { currentIndex, toggle, autoPlay, stopPlay };
};
