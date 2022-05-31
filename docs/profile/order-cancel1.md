# 订单管理-取消订单(1)

::: tip Object
这一小节，我们的目标是实现点击取消订单按钮弹出选择取消原因的弹出框
:::

::: warning Path

1. 创建取消订单弹框组件, 实现基础布局
2. 在订单列表组件中调用取消订单弹框组件
3. 在取消订单弹框中渲染取消原因列表
4. 点击弹框组件中的取消按钮时, 隐藏弹框
5. 点击取消订单按钮渲染取消弹框组件
6. 在订单列表页面组件中接收自定义事件以渲染弹层
:::

::: info Experience

* **Step.1：创建取消订单弹框组件, 实现基础布局**

```html
<template>
  <XtxDialog title="取消订单" v-model:visible="visible">
    <!-- 组件内容 -->
    <template #default>
      <div class="cancel-info">
        <p>取消订单后，本单享有的优惠可能会一并取消，是否继续？</p>
        <p class="tip">请选择取消订单的原因（必选）：</p>
        <div class="btn">
          <a>取消原因文字</a>
        </div>
      </div>
    </template>
    <!-- 按钮操作 -->
    <template #footer>
      <XtxButton type="gray" style="margin-right: 20px">取消</XtxButton>
      <XtxButton type="primary">确认</XtxButton>
    </template>
  </XtxDialog>
</template>
<script>
import { ref } from "vue";

export default {
  name: "CancelOrder",
  setup() {
      // 用于控制弹框是否显示
    const visible = ref(true);
    return { visible };
  },
};
</script>
<style scoped lang="less">
.xtx-dialog :deep(.wrapper) {
  width: 620px;
}
.cancel-info {
  p {
    font-size: 16px;
    line-height: 35px;
    &.tip {
      color: #999;
    }
  }
  .btn {
    padding-top: 21px;
    display: flex;
    flex-wrap: wrap;
    a {
      width: 250px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #ffffff;
      border: 1px solid #e4e4e4;
      margin-right: 20px;
      margin-bottom: 20px;
      color: #666;
      &:nth-child(2n) {
        margin-right: 0;
      }
      &:hover,
      &.active {
        background-color: #e3f9f4;
        border-color: @xtxColor;
      }
    }
  }
}
</style>
```

* **Step.2：在订单列表组件中调用取消订单弹框组件**

因为取消订单按钮在 `orderItem` 组件中, 如果将取消订单弹层组件渲染在这个组件中, 那么有多少订单就会渲染多少弹层, 所以我们要将弹层组件放在父组件中, 就是订单列表组件.

```html
<CancelOrder />
```

* **Step.3：在取消订单弹框中渲染取消原因列表**

```js
// 取消订单的原因
export const cancelReason = [
  "配送信息有误",
  "商品买错了",
  "重复下单/误下单",
  "忘记使用优惠券、兔币等",
  "其他渠道价格更低",
  "不想买了",
];
```

```js
<template>
  <a
      v-for="(reason, index) in cancelReason"
      :key="index"
      :class="{ active: reason === selected }"
      @click="selected = reason"
  >{{ reason }}</a>
</template>
<script>
import { ref } from "vue";
import { cancelReason } from "@/api/constants";

export default {
  setup() {
      // 用于存储用户选择的原因
    const selected = ref("");
    return { cancelReason, selected };
  },
};
</script>
```

* **Step.4：点击弹框组件中的取消按钮时, 隐藏弹框**

```html
<XtxButton @click="visible = false">取消</XtxButton>
```

* **Step.5：点击取消订单按钮渲染取消弹框组件**

由于取消订单按钮在 `OrderItem` 组件中, 取消订单弹框组件在 `OrderListPage` 组件中, 他们是父子关系, 所以当点击取消订单按钮时, 我们要触发一个自定义事件告诉订单列表组件我们点击了取消按钮.

```html
<a @click="onCancelOrderButtonClickHandler(order.id)">取消订单</a>
```

```js
export default {
  setup(props, { emit }) {
    // 当用户点击取消订单按钮时
    const onCancelOrderButtonClickHandler = (id) => {
      emit("onCancelOrder", id);
    };
    return { onCancelOrderButtonClickHandler };
  },
};
```

* **Step.6：在订单列表页面组件中接收自定义事件以渲染弹层**

```html
<OrderItem @onCancelOrder="onCancelOrderHandler"/>
```

```html
<CancelOrder ref="cancelOrderComponent" />
```

```js
export default {
  setup() {
    // 用于存储取消订单弹层组件实例对象
    const cancelOrderComponent = ref();
    // 当用户点击取消按钮时
    const onCancelOrderHandler = () => {
      // 渲染取消订单弹层
      cancelOrderComponent.value.visible = true;
    };
    return { cancelOrderComponent, onCancelOrderHandler };
  },
};
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
