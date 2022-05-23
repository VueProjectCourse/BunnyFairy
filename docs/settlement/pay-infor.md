# 支付-信息展示

::: tip Object

这一小节，我们的目标是渲染订单总支付金额, 渲染订单倒计时

示例如下:

![71](./images/71.png)
:::

::: warning Path

1. 创建用于获取订单详情的API函数
2. 在支付页面中获取订单详情并展示应付总金额
3. 实现订单支付倒计时
:::

::: info Experience

* **Step.1：创建用于获取订单详情的API函数**

```js
/**
 * 根据订单id获取订单详情
 * @param id 订单ID
 * @return {Promise}
 */
export const getOrderInfoById=(id)=> {
  return request.get(`/member/order/${id}`);
}
```

* **Step.2：在支付页面中获取订单详情并展示应付总金额**

```js
import { useRoute } from "vue-router";
import { ref } from "vue";
import { getOrderInfoById } from "@/api/order";

export default {
  name: "PayPage",
  setup() {
    // 路由信息对象
    const route = useRoute();
    // 订单信息
    const info = ref(null);
    // 根据订单id获取订单信息
    getOrderInfoById(route.query.orderId).then((data) => {
      // 存储订单信息
      info.value = data.result;
    });
    return { info };
  },
};
```

```html
<div class="amount">
  <span>应付总额：</span>
  <span>¥{{ info?.payMoney.toFixed(2) }}</span>
</div>
```

* **Step.3：实现订单支付倒计时**

```js
import { getOrderInfoById } from "@/api/order";
import useCountDown from "@/hooks/useCountDown";
import dayjs from "dayjs";

export default {
  name: "PayPage",
  setup() {
    const { count, start } = useCountDown();
    // 根据订单id获取订单信息
    getOrderInfoById(route.query.orderId).then((data) => {
      // 开启倒计时
      start(data.result.countdown);
    });
    return {
      count,
      dayjs
    };
  },
};
```

```html
<!-- 
	如果在初始访问时订单就已经超时了, count 为 -1
	如果倒计时完成, count 为 0
	所以如果 count > 0, 表示倒计时未完成 
-->
<p v-if="count > 0">
  支付还剩 <span>{{ dayjs.unix(count).format("mm分ss秒") }}</span>, 超时后将取消订单
</p>
<p v-else>订单已超时</p>
<!-- 如果订单没有超时才可以支付 -->
<div class="pay-type" v-if="count > 0"></div>
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
