import { ref } from 'vue'
import { readNewGoods } from "../../api/homeAPI"
import { useIntersectionObserver } from '@vueuse/core'
export const useNewGoods = () => {
  const goods = ref(null);
  readNewGoods().then(({ data: res, status: status }) => {
    if (status === 200) {
      goods.value = res.result;
    }
  });

  return { goods }
}

/**
 * 监听元素进入可视区，进行数据加载
 * @param {*} apiFunction 用于获取数据的 接口方法
 */
export const useLazyData = (apiFunction) => {
  const target = ref(null)
  const isVisible = ref(false)
  const result = ref(null);
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      isVisible.value = isIntersecting
      // 元素进入可视区
      if (isVisible.value) {
        // 停止监听
        stop();
        // 获取数据
        apiFunction().then(({ data: res, status: status }) => {
          if (status === 200) {
            result.value = res.result;
          }
        });
      }
    }
  )



  return { target, result };
}