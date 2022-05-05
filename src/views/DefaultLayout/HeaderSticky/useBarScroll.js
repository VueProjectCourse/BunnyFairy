import { onMounted, onUnmounted, ref } from "vue";

// 监听html的滚动条的距离
export const useWindowScroll = () => {
  // 1. 定义滚动条距离顶部的高度
  const scrollTop = ref(0);
  // 2. 声明scroll事件的处理函数 监听滚动事件 把滚动条的高度赋值给上面定义好的变量
  const setScrollTop = () => {
    // 把html标签(document.documentElement)的scrollTop赋值给scrollTop
    scrollTop.value = document.documentElement.scrollTop;
  };
  // 3. 给window绑定scroll事件
  onMounted(() => {
    window.addEventListener("scroll", setScrollTop);
  });

  // 4. 给window解绑scroll事件
  onUnmounted(() => {
    window.removeEventListener("scroll", setScrollTop);
  });

  // 5. 把定义的滚动条的距离返回
  return { scrollTop };
};
