import { getAddressList } from "../../../api/OrderAPI";
import { computed, ref } from "vue";
// 获取收货地址列表
export const useAddresses = () => {
  // 用于存储收货地址列表
  const addressList = ref(null);
  // 用于存储用户新增的收货地址或者切换的收货地址
  const userSelectedAddress = ref(null);
  const setAddress = () => {
    getAddressList().then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        addressList.value = res.result;
      }
    });
  };

  const finalAddress = computed(() => {
    let result = null;
    // 如果用户添加了新的收货地址或者切换了收货地址
    if (userSelectedAddress.value) {
      result = userSelectedAddress.value;
    } else {
      // 查看收货地址列表中是否存在收货地址
      if (addressList.value && addressList.value.length > 0) {
        // 渲染默认收货地址
        result = addressList.value.find((item) => item.isDefault === 0);
        // 如果默认收货地址不存在
        if (!result) {
          // 渲染收货地址列表中的第一条收货地址
          result = addressList.value[0];
        }
      }
    }
    return result;
  });

  return { userSelectedAddress, finalAddress, setAddress };
};
