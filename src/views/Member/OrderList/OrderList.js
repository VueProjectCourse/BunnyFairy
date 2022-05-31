import { ref, watch } from "vue";
import { getOrderList } from "@/api/memberAPI";
export const useOrderList = () => {
  // 订单列表
  const orderList = ref(null);
  // 查询参数
  const reqParams = ref({ page: 1, pageSize: 10, orderState: 0 });
  // 获取订单数据的方法
  const setOrderList = () => {
    // 调用接口请求数据
    getOrderList(reqParams.value).then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        orderList.value = res.result;
      }
    });
  };

  watch(reqParams.value, () => setOrderList(), { immediate: true });

  return { orderList, reqParams };
};
