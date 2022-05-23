# 结算-提交订单

::: tip Object
这一小节，我们的目标是 实现提交订单功能
:::

::: warning Path

1. 创建用于提交订单的API接口函数
2. 收集订单信息, 实现提交订单功能
:::

::: info Experience

* **Step.1：创建用于提交订单的API接口函数**

```js
/**
 * 提交订单
 * @param order 订单对象
 * @return {Promise}
 */
export function submitOrder(order) {
  return request.post("/member/order", order);
}
```

* **Step.2：收集订单信息, 实现提交订单功能**

  提交订单接口需要什么信息就收集什么信息：收货地址id, 商品的skuId和数量.

```html
<XtxButton type="primary" @click="referOrder">提交订单</XtxButton>
```

```html
<CheckoutAddress ref="checkoutAddressInstance" />
```

```js
function getOrderInfo() {
  // 收货地址组件实例对象
  const checkoutAddressInstance = ref();
  // 获取路由对象
  const router = useRouter();
  // 获取 store 对象
  const store = useStore();
  // 用于存储订单信息
  const order = ref(null);
  // 提交订单
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
      goods: order.value.goods.map((item) => ({
        count: item.count,
        skuId: item.skuId,
      })),
    };
    // 判断用户是否选择了收货地址
    if (!orderParams.addressId) {
      return Message({ type: "error", text: "请选择收货地址" });
    }
    // 提交订单
    submitOrder(orderParams)
      .then((data) => {
        // 订单提交成功之后跳转到支付页面
        // 为什么要传递将订单ID?
        // 在支付页面要根据订单ID查询并显示和订单相关的一些信息, 比如支付总金额等
        router.push({
          path: "/checkout/pay",
          query: { orderId: data.result.id },
        });
       // 更新购物车列表
        // 订单提交后, 购物车就没有数据了, 此时我们要将服务器端购物车状态同步到本地购物车
        store.dispatch("cart/updateCartList");
      })
      .catch(() => {
        Message({ type: "error", text: "订单提交失败" });
      });
  };
  // 返回订单信息
  return { order, referOrder, checkoutAddressInstance };
}
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
