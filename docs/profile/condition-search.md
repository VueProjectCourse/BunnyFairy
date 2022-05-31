# 订单管理-条件查询

::: tip Object
这一小节，我们的目标是 点击不同状态的订单时, 重新获取订单数据, 显示加载提示状态, 如果没有数据, 显示暂无订单数据, 实现订单列表数据分页
:::

::: warning Path

1. 当用户点击订单状态选项卡标题时, 重新获取订单数据
2. 在订单数据加载过程中显示加载提示
3. 实现暂无数据用户提示
4. 实现订单列表数据分页显示
:::

::: info Experience

* **Step.1：当用户点击订单状态选项卡标题时, 重新获取订单数据**

```html
<script>
  const active = ref(0);
  // 获取订单列表数据
  const { reqParams } = useOrderList();
  // 监听用户点击选项卡的行为
  watch(active, (current) => {
    // 重置订单状态参数
    reqParams.value.orderState = current;
    // 重置页码参数
    reqParams.value.page = 1;
  });
</script>
<template>
  <div class="member-order">
    <Tabs v-model:active="active">
      <TabTitle v-for="status in orderStatus" :key="status.name">{{
        status.label
      }}</TabTitle>
    </Tabs>
    <div class="order-list" v-if="orderList">
      <OrderItem :order="item" v-for="item in orderList.items" :key="item.id" />
    </div>
  </div>
</template>
```

* **Step.2：在订单数据加载过程中显示加载提示**

```html
<div class="order-list">
  <div class="loading" v-if="loading"></div>
  <div class="order-list" v-if="orderList && !loading">
</div>
```

```css
.loading {
  height: calc(100% - 60px);
  width: 100%;
  min-height: 400px;
  position: absolute;
  left: 0;
  top: 60px;
  background: rgba(255, 255, 255, 0.9) url(../../assets/images/loading.gif)
    no-repeat center 18%;
}
```

```js
// 获取订单列表数据
function useOrderList() {
  // 订单列表数据加载状态
  const loading = ref(false);
  // 获取并存储订单列表数据
  const getData = () => {
    // 更新加载状态
    loading.value = true;
    // 请求订单列表数据
    getOrderList(reqParams.value).then((data) => {
      // 更新加载状态
      loading.value = false;
    });
  };
  return { loading };
}
```

```js
export default {
  components: { OrderItem },
  setup() {
    const { loading } = useOrderList();
    return { loading };
  },
};
```

* **Step.3：实现暂无数据用户提示**

```html
<div v-if="!loading && orderList?.items?.length === 0" class="none">
  暂无数据
</div>
```

```css
.none {
  height: 400px;
  text-align: center;
  line-height: 400px;
  color: #999;
  background: rgba(255, 255, 255, 0.9);
}
```

* **Step.4：实现订单列表数据分页显示**

```html
<XtxPagination
  v-if="orderList && totalPage > 1"
  v-model:page="reqParams.page"
  :pageSize="reqParams.pageSize"
  :count="totalCount"
/>
```

```js
// 获取订单列表数据
function useOrderList() {
  // 请求参数
  const reqParams = ref({ page: 1, pageSize: 3, orderState: 0 });
  // 用于存储总数据条数
  const totalCount = ref(0);
  // 用于存储总页数
  const totalPage = ref(0);
  // 获取并存储订单列表数据
  const getData = () => {
    // 获取订单列表数据
    getOrderList(reqParams.value).then((data) => {
      // 更新总数据条数
      totalCount.value = data.result.counts;
      // 更新总页数
      totalPage.value = data.result.pages;
    });
  };
  return { reqParams, totalCount, totalPage };
}
```

```js
export default {
  setup() {
    // 获取订单列表数据
    const { reqParams, totalCount, totalPage } = useOrderList();
    return { reqParams, totalCount, totalPage };
  },
};
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
