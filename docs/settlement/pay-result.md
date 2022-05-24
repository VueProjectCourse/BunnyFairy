# 支付-支付结果展示

::: tip Object
这一小节，我们的目标是实现支付结果信息展示
:::

::: warning Path

1. 创建支付结果页面组件, 编写布局代码
2. 在支付结果页面组件中，编写样式代码
3. 配置支付结果页面路由规则
4. 查询订单详细信息，展示支付方式和支付金额
:::

::: info Experience

* **Step.1：创建支付结果页面组件, 编写布局代码**

```html
<template>
  <AppLayout>
    <div class="xtx-pay-page">
      <div class="container">
        <XtxBread>
          <XtxBreadItem path="/">首页</XtxBreadItem>
          <XtxBreadItem path="/cart">购物车</XtxBreadItem>
          <XtxBreadItem>支付结果</XtxBreadItem>
        </XtxBread>
        <!-- 支付结果 -->
        <div class="pay-result">
          <span class="iconfont icon-queren2 green"></span>
          <!-- <span class="iconfont icon-shanchu red" ></span> -->
          <p class="tit">订单支付成功</p>
          <p class="tip">我们将尽快为您发货，收货期间请保持手机畅通</p>
          <p>支付方式：<span>微信</span></p>
          <p>支付金额：<span>¥231</span></p>
          <div class="btn">
            <XtxButton type="primary" style="margin-right: 20px"
              >查看订单</XtxButton
            >
            <XtxButton type="gray">进入首页</XtxButton>
          </div>
          <p class="alert">
            <span class="iconfont icon-tip"></span>
            温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。
          </p>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
```

* **Step.2：在支付结果页面组件中，编写样式代码**

```css
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
}
.pay-result > .iconfont {
  font-size: 100px;
}
.pay-result .green {
  color: #1dc779;
}
.pay-result .red {
  color: #CF4444;
}
.pay-result .tit {
  font-size: 24px;
}
.pay-result .tip {
  color: #999;
}
.pay-result p {
  line-height: 40px;
  font-size: 16px;
}
.pay-result .btn {
  margin-top: 50px;
}
.pay-result .alert {
  font-size: 12px;
  color: #999;
  margin-top: 50px;
}
```

* **Step.3：配置支付结果页面路由规则**

```js
const PayResultPage = () => import("@/views/pay/PayResultPage");

const routes = [
  {
    path: "/pay/callback",
    component: PayResultPage,
  },
]
```

* **Step.4：查询订单详细信息，展示支付方式和支付金额**

```js
import { getOrderInfoById } from "@/api/order";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "PayResult",
  setup() {
    // 获取路由信息对象
    const route = useRoute();
    // 存储订单信息
    const info = ref(null);
    // 获取订单信息
    getOrderInfoById(route.query.orderId).then((data) => {
      // 存储订单信息
      info.value = data.result;
    });
    return { info };
  },
};
```

```html
<p>支付方式：<span>{{order?.payChannel === 1 ? '支付宝' : '微信'}}</span></p>
<p>支付金额：<span>¥{{order?.payMoney}}</span></p>

<Button @click="$router.push(`/member/order/${order?.id}`)">查看订单</Button>
<Button @click="$router.push('/')">进入首页</Button>
```

:::
