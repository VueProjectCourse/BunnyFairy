import { onUnmounted, ref } from "vue";
// 引入 useIntervalFn
import { useIntervalFn } from "@vueuse/core";

// 定义 countDown
export default () => {
  // 计时器数值
  const count = ref(0);
  //  定义计时器
  const { pause, resume, isActive } = useIntervalFn(
    () => {
      if (count.value <= 0) {
        // 判断 如果数字小于等于0 那么暂停定时器
        pause();
      } else {
        // 如果不是小于等于0 那么就继续自减去
        count.value--;
      }
    },
    1000,
    { immediate: false }
  );
  //  定义开始方法
  const start = (value) => {
    // 判断一下 计时器是否正在执行, 如果没有正在执行 那么就让该定时执行 并且重置数据
    if (!isActive.value) {
      count.value = value;
      resume();
    }
  };
  // 卸载的时候 停止定时器
  onUnmounted(() => {
    // 停止定时器
    pause();
  });
  // 导出
  return { start, pause, count, isActive };
};
