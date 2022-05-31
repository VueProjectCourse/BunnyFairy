# 订单管理-查看物流

::: tip Object
这一小节，我们的目标是实现查看订单物流信息
:::

::: warning Path

1. 创建物流信息展示组件, 实现基础布局
2. 为查看物流按钮添加点击事件, 渲染查看物流组件
3. 创建用于查看物流信息的API函数
4. 获取物流信息并渲染查看物流组件
:::

::: info Experience

* **Step.1：创建物流信息展示组件, 实现基础布局**

```html
<template>
  <XtxDialog v-model:visible="visible" title="物流信息">
    <div class="order-logistics-goods">
      <a class="image" href="javascript:"
        ><img
          src="https://yanxuan-item.nosdn.127.net/8c22451f7841aaa07f4525e6c49ad098.png"
          alt=""
        />
        <p>1件商品</p></a
      >
      <div class="info">
        <p><span>配送企业：</span>传智播客</p>
        <p><span>快递单号：</span>59595959595</p>
        <p><span>联系电话：</span>18586747568</p>
      </div>
    </div>
    <div class="order-logistics-list">
      <div class="item" v-for="i in 5" :key="i">
        <div class="line" :class="{ active: i === 0 }"></div>
        <div class="logistics">
          <p>物流信息</p>
          <p>2080-04-05</p>
        </div>
      </div>
    </div>
  </XtxDialog>
</template>
<script>
import { ref } from "vue";
export default {
  name: "OrderLogistics",
  setup() {
    const visible = ref(true);
    return { visible };
  },
};
</script>
<style scoped lang="less">
.xtx-dialog :deep(.wrapper) {
  width: 680px;
}
.order-logistics-goods {
  display: flex;
  background-color: #f5f5f5;
  height: 130px;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 14px;
  .image {
    width: 92px;
    height: 92px;
    border: 1px solid #e4e4e4;
    position: relative;
    p {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20px;
      line-height: 20px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
    }
  }
  .info {
    flex: 1;
    padding-left: 20px;
    line-height: 30px;
    span {
      color: #999;
    }
  }
}
.order-logistics-list {
  position: relative;
  padding-top: 10px;
  font-size: 14px;
  .item {
    display: flex;
    &:last-child {
      .line {
        border-color: transparent;
        &::before {
          top: 0;
        }
      }
    }
    .line {
      width: 27px;
      border-right: 2px solid #f5f5f5;
      margin-right: 25px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(7px, 0);
        border-radius: 50%;
      }
      &::before {
        width: 12px;
        height: 12px;
        background: #e4e4e4;
      }
      // 激活
      &.active {
        &::before {
          background: @xtxColor;
          z-index: 1;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(11px, -4px);
          border-radius: 50%;
          width: 20px;
          height: 20px;
          background: #e3f9f4;
        }
      }
    }
    .logistics {
      flex: 1;
      padding-bottom: 35px;
      position: relative;
      top: -3px;
      p {
        &:first-child {
          color: #666;
        }
        &:last-child {
          color: #999;
          margin-top: 6px;
        }
      }
    }
  }
}
</style>
```

* **Step.2：为查看物流按钮添加点击事件, 渲染查看物流组件**

```html
<a @click="onViewLogisticsButtonClickHandler(order.id)">查看物流</a>
```

```js
// 当用户点击查看物流按钮时
const onViewLogisticsButtonClickHandler = (id) => {
    emit("onViewLogistics", id);
};
```

```html
<OrderLogistics ref="OrderLogisticsComponent" />
```

```js
export default {
  components: { OrderLogistics },
  setup() {
    // 用于存储查看物流弹框组件实例对象
    const OrderLogisticsComponent = ref();
    // 当用户点击查看物流按钮时
    const onViewLogisticsHandler = (id) => {
      // 渲染查看物流弹框组件
      OrderLogisticsComponent.value.visible = true;
    };
    return { OrderLogisticsComponent, onViewLogisticsHandler };
  },
};
```

* **Step.3：创建用于查看物流信息的API函数**

```js
/**
 * 获取订单物流信息
 * @param id 订单ID
 * @return {AxiosPromise}
 */
export function getLogisticsByOrderId(id) {
  return request(`/member/order/${id}/logistics`, "get");
}
```

* **Step.4：获取物流信息并渲染查看物流组件**

```js
import { getLogisticsByOrderId } from "@/api/member";

// 当用户点击查看物流按钮时
const onViewLogisticsHandler = (id) => {
  // 获取订单物流信息
  getLogisticsByOrderId(id).then((data) => {
    // 存储订单物流信息
    OrderLogisticsComponent.value.logistics = data.result;
  });
};
```

```js
export default {
  setup() {
    const logistics = ref(null);
    return { logistics };
  },
};
```

```html
<template>
  <XtxDialog v-model:visible="visible" title="物流信息">
    <div class="order-logistics-goods" v-if="logistics">
      <a class="image" href="javascript:"
        ><img :src="logistics.picture" alt="" />
        <p>{{ logistics.count }}件商品</p></a
      >
      <div class="info">
        <p><span>配送企业：</span>{{ logistics.company.name }}</p>
        <p><span>快递单号：</span>{{ logistics.number }}</p>
        <p><span>联系电话：</span>{{ logistics.tel }}</p>
      </div>
    </div>
    <div class="order-logistics-list" v-if="logistics">
      <div class="item" v-for="(item, index) in logistics.list" :key="item.id">
        <div class="line" :class="{ active: index === 0 }"></div>
        <div class="logistics">
          <p>{{ item.text }}</p>
          <p>{{ item.time }}</p>
        </div>
      </div>
    </div>
  </XtxDialog>
</template>
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
