# 支付-跳转支付

::: tip Object
这一小节，我们的目标是实现支付功能
:::

::: warning Path

1. 准备跳转地址, 实现支付功能
2. 在用户支付过程中显示正在支付弹框
:::

::: info Experience

* **Step.1：准备跳转地址, 实现支付功能**

  ```js
  // 支付结果回调地址
  // 回调地址必须经过编码, 否则回调地址中 # 号后面的内容将支付宝被截取掉
  // 比如: http://www.corho.com:8080/?payResult=true&orderId=1440510371952594945#/
  const redirect = encodeURIComponent(
    "http://www.corho.com:8080/#/pay/callback"
  );
  // 跳转到支付地址
  const payUrl = `${baseURL}pay/aliPay?orderId=${route.query.orderId}&redirect=${redirect}`;
  ```

  ```html
  <a class="btn alipay" :href="payUrl" target="_blank"></a>
  ```

* **Step.2：在用户支付过程中显示正在支付弹框**

  ```html
  <XtxDialog title="正在支付..." v-model:visible="paying">
    <div class="pay-wait">
      <img src="@/assets/images/load.gif" alt="" />
      <div v-if="info">
        <p>如果支付成功：</p>
        <RouterLink :to="`/member/order/${info.id}`">查看订单详情></RouterLink>
        <p>如果支付失败：</p>
        <RouterLink to="/">查看相关疑问></RouterLink>
      </div>
    </div>
  </XtxDialog>
  <script>
  export default {
    setup () {
          // 是否正在支付
      const paying = ref(false);
      return { paying }
    }
  }
  </script>
  <style scoped lang="less">
  .pay-wait {
    display: flex;
    justify-content: space-around;
    p {
      margin-top: 30px;
      font-size: 14px;
    }
    a {
      color: var(--primary-color);
    }
  }

  </style>
  ```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
