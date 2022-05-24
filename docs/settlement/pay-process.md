# 支付-支付流程

::: tip Object
这一小节，我们的目标是了解支付流程
:::

::: warning Path

![72](./images/72.png)

1. 客户端跳转到服务器端指定的地址 (传递订单ID和回调页面地址)
2. 服务器端重定向到支付宝的支付页面
3. 用户支付
4. 支付有了结果后,支付宝服务端会向我们的服务端发送post请求通知支付结果
5. 支付宝服务端在浏览器中重定向到我们提前设置到的回跳地址，为用户显示支付结果

:::

::: info Experience

```bash
# 客户端跳转地址
http://pcapi-xiaotuxian-front-devtest.itheima.net/pay/aliPay?orderId=test&redirect=test
```

```bash
# 支付地址回调地址（可变）
http://www.corho.com:8080/#/pay/callback
```

```bash
买家账号jfjbwb4477@sandbox.com
登录密码111111
支付密码111111
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
