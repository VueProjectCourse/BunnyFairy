import { ref } from "vue";
import { createOrder } from "../../../api/OrderAPI";
export const useOrderInfo = () => {
  const orderInfo = ref(null);

  const setOrderList = () => {
    // 调用接口请求数据
    createOrder().then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        // orderList.value = res.result;
        orderInfo.value = res.result;
      }
    });
  };

  return { orderInfo, setOrderList };
};
