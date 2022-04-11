import { ref } from "vue";
import { readHotProduct } from "../../api/homeAPI"

export const useHotProduct = () => {
  const goods = ref(null);
  readHotProduct().then(({ data: res, status: status }) => {
    if (status === 200) {
      goods.value = res.result;
    }
  });

  return { goods }
}