# 支付-基础布局

::: tip Object
这一小节，我们的目标是 创建支付页面组件, 实现基础布局, 配置路由规则
:::

::: warning Path

1. 创建支付页面组件, 编写布局代码
2. 在支付页面组件中, 编写样式代码
3. 配置支付页面组件的路由规则
:::

::: info Experience

* **Step.1：创建支付页面组件, 编写布局代码**

```html
<template>
  <AppLayout>
   <div class="xtx-pay-page">
      <div class="container">
        <XtxBread>
          <XtxBreadItem path="/">首页</XtxBreadItem>
          <XtxBreadItem path="/cart">购物车</XtxBreadItem>
          <XtxBreadItem>支付订单</XtxBreadItem>
        </XtxBread>
        <!-- 付款信息 -->
        <div class="pay-info">
          <span class="icon iconfont icon-queren2"></span>
          <div class="tip">
            <p>订单提交成功！请尽快完成支付。</p>
            <p>支付还剩 <span>24分59秒</span>, 超时后将取消订单</p>
          </div>
          <div class="amount">
            <span>应付总额：</span>
            <span>¥5673.00</span>
          </div>
        </div>
        <!-- 付款方式 -->
        <div class="pay-type">
          <p class="head">选择以下支付方式付款</p>
          <div class="item">
            <p>支付平台</p>
            <a class="btn wx" href="javascript:"></a>
            <a class="btn alipay" href="javascript:"></a>
          </div>
          <div class="item">
            <p>支付方式</p>
            <a class="btn" href="javascript:">招商银行</a>
            <a class="btn" href="javascript:">工商银行</a>
            <a class="btn" href="javascript:">建设银行</a>
            <a class="btn" href="javascript:">农业银行</a>
            <a class="btn" href="javascript:">交通银行</a>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
```

* **Step.2：在支付页面组件中, 编写样式代码**

```css
.pay-info {
  background: #fff;
  display: flex;
  align-items: center;
  height: 240px;
  padding: 0 80px;
}
.pay-info .icon {
  font-size: 80px;
  color: #1dc779;
}
.pay-info .tip {
  padding-left: 10px;
  flex: 1;
}
.pay-info .tip p:first-child {
  font-size: 20px;
  margin-bottom: 5px;
}
.pay-info .tip p:last-child {
  color: #999;
  font-size: 16px;
}
.pay-info .amount span:first-child {
  font-size: 16px;
  color: #999;
}
.pay-info .amount span:last-child {
  color: #CF4444;
  font-size: 20px;
}
.pay-type {
  margin-top: 20px;
  background-color: #fff;
  padding-bottom: 70px;
}
.pay-type p {
  line-height: 70px;
  height: 70px;
  padding-left: 30px;
  font-size: 16px;
}
.pay-type p.head {
  border-bottom: 1px solid #f5f5f5;
}
.pay-type .btn {
  width: 150px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-left: 30px;
  color: #666666;
  display: inline-block;
}
.pay-type .btn.active,
.pay-type .btn:hover {
  border-color: #27BA9B;
}
.pay-type .btn.alipay {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png) no-repeat center / contain;
}
.pay-type .btn.wx {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg) no-repeat center / contain;
}

```

* **Step.3：配置支付页面组件的路由规则**

```js
const PayPage = () => import("@/views/pay/PayPage");

const routes = [
  {
    path: "/checkout/pay",
    component: PayPage,
  },
]
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
