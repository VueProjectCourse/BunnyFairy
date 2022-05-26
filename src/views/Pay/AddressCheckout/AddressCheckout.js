import { computed, ref } from "vue";
import { getAddressList } from "../../../api/orderAPI";
export const useAddress = () => {
  // 存储收货地址列表
  const addressList = ref(null);
  // 用户选择的地址
  const userSelectedAddress = ref(null);
  // 请求收货地址列表的方法
  const setAddressList = (cb) => {
    // 调用接口请求数据
    getAddressList().then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        addressList.value = res.result;
        cb && cb();
      }
    });
  };

  // 最终地址
  // 用户选择的地址 --> 默认地址 --> 看addressList里面有没有数据，如果有就用第一个地址
  const finalAddress = computed(() => {
    // 最终要返回出去的地址结果
    let result = null;

    // 判断用户是否选择了地址
    if (userSelectedAddress.value) {
      result = userSelectedAddress.value;
    } else {
      // 查看收货地址列表中是否存在收货地址;
      if (addressList.value && addressList.value.length > 0) {
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

  return { addressList, setAddressList, finalAddress, userSelectedAddress };
};
