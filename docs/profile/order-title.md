# 订单管理-渲染订单标题

::: tip Object
这一小节，我们的目标是 使用 Tabs 组件实现订单标题渲染
:::

::: warning Path

1. 准备订单状态常量数组
2. 渲染订单状态标题
:::

::: info Experience

* **Step.1：准备订单状态常量数组**

```js
// 订单状态
export const orderStatus = [
  { name: "all", label: "全部订单" },
  { name: "unpay", label: "待付款" },
  { name: "deliver", label: "待发货" },
  { name: "receive", label: "待收货" },
  { name: "comment", label: "待评价" },
  { name: "complete", label: "已完成" },
  { name: "cancel", label: "已取消" },
];
```

* **Step.2：渲染订单状态标题**

```js
// OrderList.vue`
import { orderStatus } from "@/api/constants";
import { ref } from "vue";
export default {
  setup() {
    const active = ref(0);
    return { orderStatus, active };
  },
};
```

```html
<Tabs v-model:active="active">
  <TabTitle v-for="status in orderStatus" :key="status.name">{{status.label}}</TabTitle>
</Tabs>
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
