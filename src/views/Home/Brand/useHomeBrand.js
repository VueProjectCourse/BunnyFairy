import { ref } from "vue";

// 实现左右滚动效果
export const useToggleEffect = () => {
  // 切换索引
  const currentIndex = ref(0);
  // 控制切换索引
  const toggle = (step) => {
    // 计算索引
    const nextIndex = currentIndex.value + step;
    // 控制索引返回
    if (nextIndex < 0 || nextIndex > 1) return;
    // 如果索引在正常范围内就更改索引
    currentIndex.value = nextIndex;
  };

  return { currentIndex, toggle };
};
