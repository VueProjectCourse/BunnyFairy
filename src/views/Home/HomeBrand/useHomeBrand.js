import { ref } from "vue";

// 实现轮播图功能的函数
export const useToggleEffect = () => {
  // 当前索引 作用: 控制轮播图那张图片显示
  const currentIndex = ref(0);
  // 控制currentIndex的值
  const toggle = (step = 1) => {
    // 当点击按钮的时候 计算当前索引
    let nextIndex = currentIndex.value + step;
    // 当currentIndex的值< 0的时候
    if (nextIndex < 0 || nextIndex > 1) {
      return;
    }
    // 把currentIndex的值设置 计算后的值
    currentIndex.value = nextIndex;
  };

  // 导出 currentIndex toggle
  return { currentIndex, toggle };
};
