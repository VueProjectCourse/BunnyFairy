# 订单管理-确认收货

::: tip Object
这一小节，我们的目标是实现确认收货功能

要实现确认收货, 需要先将订单状态更改为待收货 (调用接口传递订单id, 执行发货操作).
`http://pcapi-xiaotuxian-front-devtest.itheima.net/member/order/consignment/1394116427400613890`
支付账号: jfjbwb4477@sandbox.com
:::

::: warning Path

1. 创建用于实现确认收货的 API 接口函数
2. 为确认收货按钮添加点击事件, 向服务器端发送请求实现确认收货操作

:::

::: info Experience

* **Step.1：创建用于实现确认收货的 API 接口函数**

```js
/**
 * 确认收货
 * @param id 订单ID
 * @return {Promise}
 */
export function confirmReceiptGoods(id) {
  return request(`/member/order/${id}/receipt`, "PUT");
}
```

* **Step.2：为确认收货按钮添加点击事件, 向服务器端发送请求实现确认收货操作**

```html
<XtxButton @click="onConfirmReceiptButtonClickHandler(order.id)">确认收货</XtxButton>
```

```js
// 当确认收货按钮被点击时
const onConfirmReceiptButtonClickHandler = async (id) => {
  try {
    // 和用户进行确认
    await Confirm({ title: "确认收货", content: "确定要进行收货吗" });
    // 发送请求进行确认收货
    await confirmReceiptGoods(id);
    // 用户提示
    Message({ type: "success", text: "确认收货成功" });
    // 重新获取订单列表
    emit("onReloadOrderList");
  } catch (e) {
    // 用户提示
    Message({ type: "warn", text: "确认收货失败" });
  }
};
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
