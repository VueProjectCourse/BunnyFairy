import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
// 声明 数据懒加载的方法

/**
 *
 * @param {*} apiFn 接口方法
 * @returns
 */
export const lazyData = (apiFn) => {
  // 监听是否进入可视区的目标元素
  const target = ref(null);
  // 声明接口数据
  const result = ref(null);
  // stop 停止监听的方法
  // isIntersecting 是否进入可视区 如果进入可视区那么是true 否则是false
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    // console.log(isIntersecting)
    // 只有 isIntersecting 为true的时候 我们才去 通过接口方法 获取数据 并且把数据返回
    if (isIntersecting) {
      // 停止监听
      stop();
      // 调用接口方法
      apiFn().then(({ data: res, status: status }) => {
        if (status === 200) {
          // 把数据赋值给bannerList
          result.value = res.result;
        }
      });
    }
  });

  return { target, result };
};
