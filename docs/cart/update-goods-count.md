# 购物车-更改商品数量-未登录

::: tip 目标
这一小节，我们的目标是实现更改购物车中商品数量的功能
:::

::: warning 步骤

1. 在调用商品数量选择组件时传递必要属性
2. 当用户点击按钮更改商品数量时将值同步到 Store 中
:::

::: info 体验

* **Step.1：在调用商品数量选择组件时传递必要属性**

```html
 <NumberBox
  :max="goods.stock"
  :modelValue="goods.count"
  @update:modelValue="
    cartStore.changeGoodsCountOfCartBySkuId(
      goods.skuId,
      $event
    )
  "
></NumberBox>
```

* **Step.2：当用户点击按钮更改商品数量时将值同步到 Store 中**

```js
// 更改购物车中的商品数量
 changeGoodsCountOfCartBySkuId(skuId, count) {
      this.updateGoodsOfCartBySkuId({ skuId, count });
    },
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
