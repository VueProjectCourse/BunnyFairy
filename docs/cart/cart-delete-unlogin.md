# 头部购物车-删除-未登录

::: tip 目标
这一小节，我们的目标是实现删除本地购物车中的商品
:::

::: warning 步骤

1. 在 Store 中定义用于删除购物车中商品的 action 方法
2. 在组件中实现删除购物车商品功能
:::

::: info 体验

* **Step.1：在 Store 中定义用于删除购物车中商品的 action 方法**

```js
 // 根据skuId 删除商品
    deleteGoodsOfCartBySkuId(skuId) {
      const userStore = useUserStore();
      console.log(skuId);
      // 获取要被删除商品的索引
      //  判断用户是否登录
      // 判断用户是否登录
      if (userStore.profile.token) {
        // 登录了
        console.log("登录了");
      } else {
        // 获取要被删除的商品的索引
        const index = this.list.findIndex((item) => item.skuId === skuId);

        this.list = [
          ...this.list.slice(0, index),
          ...this.list.slice(index + 1),
        ];
      }
    },
```

* **Step.2：在组件中实现删除购物车商品功能**

```js
const cartStore = useCartStore();
```

```html
<i
  class="iconfont icon-close-new"
  @click="cartStore.deleteGoodsOfCartBySkuId(goods.skuId)"
></i>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
