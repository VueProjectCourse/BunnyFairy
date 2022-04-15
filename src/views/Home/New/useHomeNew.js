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

