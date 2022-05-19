# 结算-渲染页面

::: tip 目标
这一小节，我们的目标是创建订单, 渲染订单中的商品数据和金额明细数据
:::

::: warning 步骤

1. 创建用于生成订单的API接口函数
2. 在订单页面组件中调用接口生成订单信息
3. 渲染订单页面组件中的商品信息及金额明细
:::

::: info 体验

* **Step.1：创建用于生成订单的API接口函数**

```js
import request from "@/utils/request";

/**
 * 生成订单
 * @return {Promise}
 */
export function createOrder() {
  return request("/member/order/pre", "get");
}
```

* **Step.2：在订单页面组件中调用接口生成订单信息**

```js
import { ref } from "vue";
import { createOrder } from "@/api/order";

function getOrderInfo() {
  // 用于存储订单信息
  const order = ref(null);
  // 创建订单并存储订单信息
  createOrder().then((data) => (order.value = data.result));
  // 返回订单信息
  return { order };
}
```

```js
export default {
  name: "CheckoutPage",
  setup() {
    // 获取订单信息
    const { order } = getOrderInfo();
    return { order };
  },
};
```

* **Step.3：渲染订单页面组件中的商品信息及金额明细**

```html
<div class="xtx-pay-checkout-page" v-if="order">
  <!-- 商品信息 -->
    <tr v-for="goods in order.goods" :key="goods.id">
    <td>
      <a href="javascript:" class="info">
        <img :src="goods.picture" alt="" />
        <div class="right">
          <p>{{ goods.name }}</p>
          <p>{{ goods.attrsText }}</p>
        </div>
      </a>
    </td>
    <td>¥{{ goods.price }}</td>
    <td>{{ goods.count }}</td>
    <td>¥{{ goods.totalPrice }}</td>
    <td>¥{{ goods.totalPayPrice }}</td>
  </tr>
  <!-- 金额明细 -->
  <div class="total">
    <dl>
      <dt>商品件数：</dt>
      <dd>{{ order.summary.goodsCount }}件</dd>
    </dl>
    <dl>
      <dt>商品总价：</dt>
      <dd>¥{{ order.summary.totalPrice }}</dd>
    </dl>
    <dl>
      <dt>运<i></i>费：</dt>
      <dd>¥{{ order.summary.postFee }}</dd>
    </dl>
    <dl>
      <dt>应付总额：</dt>
      <dd class="price">¥{{ order.summary.totalPayPrice }}</dd>
    </dl>
  </div>
</div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
