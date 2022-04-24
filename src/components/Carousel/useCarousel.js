import { onMounted, onUnmounted, ref } from "vue";

// 实现轮播图功能的函数
export const useCarouselEffect = (carousel, auto, duration) => {
  // 当前索引 作用: 控制轮播图那张图片显示
  const currentIndex = ref(0);
  // 定义一个定时器名称
  const timer = ref(null);
  // 控制currentIndex的值
  const toggle = (step = 1) => {
    // 当点击按钮的时候 计算当前索引
    let nextIndex = currentIndex.value + step;
    // 当currentIndex的值< 0的时候
    if (nextIndex < 0) {
      // console.log("当currentIndex的值< 0的时候 ")
      // 把currentIndex的值进行复位 复位为 轮播图数据的最大索引
      currentIndex.value = carousel.length - 1;
    } else if (nextIndex > carousel.length - 1) {
      // 当currentIndex的值 大于轮播图数组的最大索引
      // console.log("currentIndex的值 大于轮播图数组的最大索引", carousel.length - 1)
      // 把currentIndex的值复位为0
      currentIndex.value = 0;
    } else {
      // 把currentIndex的值设置 计算后的值
      currentIndex.value = nextIndex;
      // console.log(currentIndex.value)
    }
  };
  // 自动轮播
  const autoPlay = () => {
    if (auto && carousel.length >= 0) {
      timer.value = setInterval(toggle, duration);
    }
  };

  // 停止轮播
  const stopPlay = () => {
    clearInterval(timer.value);
  };

  onMounted(() => {
    autoPlay();
  });
  onUnmounted(() => {
    stopPlay();
  });
  // 导出 currentIndex toggle
  return { currentIndex, toggle, autoPlay, stopPlay };
};
