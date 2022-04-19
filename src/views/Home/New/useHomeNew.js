import { ref } from "vue";
import { readNewGoods } from "@/api/homeAPI";

export const useNewGoods = () => {
  const goods = ref(null);
  readNewGoods().then(({ data: res, status: status }) => {
    if (status === 200) {
      goods.value = res.result;
    }
  });

  return { goods };
};
