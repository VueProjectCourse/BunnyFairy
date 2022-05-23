import { computed, ref } from "vue";
import { getAddressList } from "../../../api/OrderAPI";
export const useAddresses = () => {
  const addressList = ref(null);
  const setAddressList = () => {
    // 调用接口请求数据
    getAddressList().then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        addressList.value = res.result;
        console.log(addressList);
      }
    });
  };
  const userSelectedAddress = ref(null);
  const finalAddress = computed(() => {
    // 存储计算结果
    let result = null;
    // 如果用户添加了新的收获地址或切换了收获地址
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

    // return {
    //   receiver: "小水电",
    //   a: result,
    // };
    return result;
  });

  return { finalAddress, userSelectedAddress, setAddressList };
};
