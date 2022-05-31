# 订单详情-头部展示

::: tip Object
这一小节，我们的目标是完成订单详情页面的头部展示
:::

::: warning Path

1. 创建组件订单详情头部组件, 实现基础布局
2. 创建用于获取订单详情的API接口函数
3. 在订单详情页面组件中发送请求获取订单详情数据并调用订单详情头部组件
4. 在订单详情头部组件中接收订单详情信息及重新获取订单详情的方法
5. 据不同的订单状态显示不同的操作按钮
:::

::: info Experience

* **Step.1：创建组件订单详情头部组件, 实现基础布局**

```html
<template>
  <div class="detail-action">
    <div class="state">
      <span class="iconfont icon-order-unpay"></span>
      <p>待支付</p>
    </div>
    <div class="info">
      <p>订单编号：1372361846887026690</p>
      <p>下单时间：2021-03-18 01:45:10</p>
    </div>
    <div class="btn">
      <XtxButton type="primary" size="small">评价商品</XtxButton>
      <XtxButton type="plain" size="small">再次购买</XtxButton>
      <XtxButton type="gray" size="small">申请售后</XtxButton>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailAction",
};
</script>
<style scoped lang="less">
.detail-action {
  height: 180px;
  width: 100%;
  display: flex;
  align-items: center;
  .state {
    width: 220px;
    text-align: center;
    .iconfont {
      font-size: 40px;
      color: @xtxColor;
    }
    p {
      font-size: 16px;
      color: #666;
      margin-bottom: 10px;
    }
  }
  .info {
    width: 240px;
    line-height: 30px;
    p {
      color: #999;
    }
  }
  .btn {
    flex: 1;
    text-align: right;
    margin-right: 100px;
    .xtx-button {
      margin-left: 20px;
    }
  }
}
</style>
```

* **Step.2：创建用于获取订单详情的API接口函数**

```js
/**
 * 获取订单详情
 * @param id 订单ID
 * @return {AxiosPromise}
 */
export function getOrderDetail(id) {
  return request(`/member/order/${id}`, "get");
}
```

* **Step.3：在订单详情页面组件中发送请求获取订单详情数据并调用订单详情头部组件**

```js
import { ref } from "vue";
import { getOrderDetail } from "@/api/member";
import { useRoute } from "vue-router";
import DetailAction from "@/views/member/order/components/DetailAction";

export default {
  setup() {
    // 获取订单详情
    const { orderDetail, getData } = useOrderDetail();
    return { orderDetail, getData };
  },
};
function useOrderDetail() {
  // 获取路由信息对象
  const route = useRoute();
  // 用于存储订单详情信息
  const orderDetail = ref(null);
  // 获取订单详情数据
  const getData = () => {
    getOrderDetail(route.params.id).then((data) => {
      orderDetail.value = data.result;
    });
  };
  getData();
  return { orderDetail, getData };
}
```

```html
<DetailAction :orderDetail="orderDetail" :getOrderDetail="getData"/>
```

* **Step.4：在订单详情头部组件中接收订单详情信息及重新获取订单详情的方法**

```js
export default {
  props: {
    orderDetail: {
      type: Object,
      default: () => ({}),
    },
    getOrderDetail: {
      type: Function,
      default: () => {},
    },
  }
};
```

* **Step.5：据不同的订单状态显示不同的操作按钮**

```text
1. 待付款：立即付款，取消订单
2. 待发货：再次购买
3. 待收货：确认收货，再次购买
4. 待评价：评价商品，再次购买，申请售后
5. 已完成：查看评价，再次购买，申请售后
6. 已取消：-
```

```html
<div class="btn">
  <!-- 待付款 -->
  <template v-if="orderDetail.orderState === 1">
    <XtxButton
      @click="$router.push('/member/pay?orderId=' + orderDetail.id)"
      type="primary"
      size="small"
    >立即付款</XtxButton>
    <XtxButton type="gray" size="small">取消订单</XtxButton>
  </template>
  <!-- 待发货 -->
  <template v-if="orderDetail.orderState === 2">
    <XtxButton type="primary" size="small">再次购买</XtxButton>
  </template>
  <!-- 待收货 -->
  <template v-if="orderDetail.orderState === 3">
    <XtxButton type="primary" size="small">确认收货</XtxButton>
    <XtxButton type="plain" size="small">再次购买</XtxButton>
  </template>
  <!-- 待评价 -->
  <template v-if="orderDetail.orderState === 4">
    <XtxButton type="primary" size="small">再次购买</XtxButton>
    <XtxButton type="plain" size="small">评价商品</XtxButton>
    <XtxButton type="gray" size="small">申请售后</XtxButton>
  </template>
  <!-- 已完成 -->
  <template v-if="orderDetail.orderState === 5">
    <XtxButton type="primary" size="small">再次购买</XtxButton>
    <XtxButton type="plain" size="small">查看评价</XtxButton>
    <XtxButton type="gray" size="small">申请售后</XtxButton>
  </template>
  <!-- 已取消 -->
</div>
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
