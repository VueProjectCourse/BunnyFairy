import {ref} from "vue"
import {useIntersectionObserver} from "@vueuse/core"
/**
 * 监听元素进入可视区，进行数据加载
 * @param {*} apiFunction 用于获取数据的 接口方法
 */
 export const useLazyData = (apiFunction) => {
  const target = ref(null)
  // const isVisible = ref(false)
  const result = ref(null);
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      // isVisible.value = isIntersecting
      // 元素进入可视区
      if (isIntersecting) {
        // 停止监听
        stop();
        // 获取数据
        apiFunction().then(({ data: res, status: status }) => {
          if (status === 200) {
            result.value = res.result;
          }
        });
      }
    },
    { threshold: 0 }
  )



  return { target, result };
}