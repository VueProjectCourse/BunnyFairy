import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../../stores/cartStore";
import { createOrder, submitOrder } from "../../../api/orderAPI";
import Message from "../../../components/Message/Message";
export const useOrderInfo = () => {
  const orderInfo = ref(null);
  const router = useRouter();
  const cartStore = useCartStore();
  const checkoutAddressInstance = ref(null);
  const setOrderInfo = () => {
    // 调用接口请求数据
    createOrder().then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        // console.log(res);
        // orderList.value = res.result;
        orderInfo.value = res.result;
      }
    });
  };

  const referOrder = () => {
    // 订单对象
    const orderParams = {
      // 买家留言
      buyerMessage: "",
      // 支付渠道 1 为在线支付
      payChannel: 1,
      // 支付方式 1 支付宝
      payType: 1,
      // 配送时间 1 不限
      deliveryTimeType: 1,
      // 收货地址 id
      addressId: checkoutAddressInstance.value.finalAddress?.id,
      // 商品集合
      goods: orderInfo.value.goods.map((item) => ({
        count: item.count,
        skuId: item.skuId,
      })),
    };

    // 判断用户是否选择了收货地址
    if (!orderParams.addressId) {
      return Message({ type: "error", text: "请选择收货地址" });
    }

    // 发送请求
    submitOrder(orderParams)
      .then((data) => {
        // 订单提交成功之后跳转到支付页面
        // 为什么要传递将订单ID?
        // 在支付页面要根据订单ID查询并显示和订单相关的一些信息, 比如支付总金额等
        console.log(data.data.result.id);
        router.push({
          path: "/checkout/pay",
          query: { orderId: data.data.result.id },
        });
        // 更新购物车列表
        // 订单提交后, 购物车就没有数据了, 此时我们要将服务器端购物车状态同步到本地购物车
        cartStore.updateCartList();
      })
      .catch(() => {
        Message({ type: "error", text: "订单提交失败" });
      });
  };

  return { orderInfo, checkoutAddressInstance, setOrderInfo, referOrder };
};
