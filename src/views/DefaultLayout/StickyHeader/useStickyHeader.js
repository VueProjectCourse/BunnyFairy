import { onMounted, onUnmounted, ref } from "vue";
export const useBarScroll = () => {
  // 存储滚动距离，用于在模板中作为元素显示隐藏的依据
  const scrollTop = ref(0);
  // 滚动事件的事件处理函数
  const handlerScroll = () => {
    // 存储滚动距离
    scrollTop.value = document.documentElement.scrollTop;
  };

  // 组件挂载完成后
  onMounted(() => {
    // 为window添加滚动事件
    window.addEventListener("scroll", handlerScroll);
  });
  // 组件卸载完成后
  onUnmounted(() => {
    window.removeEventListener("scroll", handlerScroll);
  });

  return {
    scrollTop,
  };
};
