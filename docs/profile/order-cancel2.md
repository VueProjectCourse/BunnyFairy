# 订单管理-取消订单(2)

::: tip Object
这一小节，我们的目标是实现取消订单操作
:::

::: warning Path

1. 创建用于取消订单的 API 接口函数
2. 实现取消订单操作
:::

::: info Experience

* **Step.1：创建用于取消订单的 API 接口函数**

```js
/**
 * 取消订单
 * @param id 订单ID
 * @param cancelReason 取消原因
 * @return {AxiosPromise}
 */
export function cancelOrder({ id, cancelReason }) {
  return request(`/member/order/${id}/cancel`, "put", { cancelReason });
}

```

* **Step.2：实现取消订单操作**

为`确定`取消订单操作按钮添加点击事件

```html
<XtxButton @click="onCancelOrderHandler" type="primary">确认</XtxButton>
```

在点击确定按钮以后向服务器端发送请求实现订单的取消

```js
import { getCurrentInstance } from "vue";
import { cancelOrder } from "@/api/order";
import Message from "@/components/library/Message";

export default {
  setup(props, { emit }) {
    // 用于控制弹框是否显示
    const visible = ref(false);
    // 用于存储用户选择的原因
    const selected = ref("");
    // 获取组件实例对象
    const { proxy } = getCurrentInstance();
    // 当用户点击确认取消订单时
    const onCancelOrderHandler = async () => {
      try {
        // 发送请求 取消订单
        await cancelOrder({ id: proxy.id, cancelReason: selected.value });
        // 用户提示
        Message({ type: "success", text: "订单取消成功" });
        // 关闭弹层
        visible.value = false;
        // 重新获取订单列表
        emit("onReloadOrderList");
      } catch (e) {
        Message({ type: "error", text: "订单取消失败" });
      }
    };
    return { visible, selected, onCancelOrderHandler };
  },
};
```

发送请求订单请求时需要传递订单ID参数, 订单ID通过组件实例对象传递

```js
// 当用户点击取消按钮时
const onCancelOrderHandler = (id) => {
  // 通过组件实例对象传递要取消订单的订单ID
  cancelOrderComponent.value.id = id;
};
```

订单取消成功后, 重新获取订单列表

```html
<CancelOrder ref="cancelOrderComponent" @onReloadOrderList="getData" />
```

```js
export default {
 setup () {
  const { getData } = useOrderList();
  return { getData }
 }
}

// 获取订单列表数据
function useOrderList() {
  return { getData };
}
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
