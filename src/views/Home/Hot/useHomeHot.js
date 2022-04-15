import { ref } from "vue";
import { readHotProduct } from "../../api/homeAPI";

export const useHotProduct = () => {
  const hotList = ref(null);
  readHotProduct().then(({ data: res, status: status }) => {
    if (status === 200) {
      hotList.value = res.result;
    }
  });

  return { hotList };
};
