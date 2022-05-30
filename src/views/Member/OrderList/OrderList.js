import { ref, watch } from "vue";
import { getOrderList } from "@/api/memberAPI";
export const useOrderList = () => {
  // 用于存储订单列表数据
  const orderList = ref(null);
  // 请求参数
  const reqParams = ref({
    page: 1,
    pageSize: 10,
    orderState: 0,
  });
  // 获取并存储订单数据
  const setOrderList = () => {
    getOrderList(reqParams.value).then(({ data: res, status: status }) => {
      console.log(res, status);
      if (status === 200) {
        // 把数据赋值给bannerList
        orderList.value = res.result;

        console.log(orderList);
      }
    });
  };

  // 监控请求参数变化，重新获取订单列表数据
  watch(reqParams.value, () => setOrderList(), { immediate: true });

  return { orderList, reqParams };
};
