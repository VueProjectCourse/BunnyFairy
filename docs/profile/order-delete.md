# 订单管理-删除订单

::: tip Object
这一小节，我们的目标是 实现删除订单功能
:::

::: warning Path

1. 创建用于实现删除订单的API接口函数
2. 为删除订单按钮添加点击事件, 向服务器端发送请求删除订单, 订单删除后重新获取订单列表
:::

::: info Experience

* **Step.1：创建用于实现删除订单的API接口函数**

```js
/**
 * 删除订单
 * @param ids 订单ID集合
 * @return {Promise}
 */
export function deleteOrder(ids) {
  return request("/member/order", "delete", { ids });
}
```

* **Step.2：为删除订单按钮添加点击事件, 向服务器端发送请求删除订单, 订单删除后重新获取订单列表**

```html
<a @click="onDeleteOrderButtonClickHandler(order.id)">删除</a>
```

```js
// 当用户点击删除订单按钮时
const onDeleteOrderButtonClickHandler = async (id) => {
  // 删除订单
  const onDeleteButtonClickHandler = (id) => {
    Confirm({ title: "温馨提示", content: "订单删除后不可恢复" })
      .then(() => deleteOrder([id]))
      .then(() => Message({ type: "success", text: "订单删除成功" }))
      .then(() => emit("onOrderListReload"))
        .catch(() => Message({ type: "error", text: "订单取消失败" }));
  };
};
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
