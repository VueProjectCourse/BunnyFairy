# 购物车-单选-未登录

::: tip 目标
这一小节，我们的目标是实现购物车中商品的选择功能
:::

::: warning 步骤

1. 通过 `modelValue` 传递商品的默认是否选中状态
2. 通过 `@update:modelValue` 指定更新商品数量的方法
3. 在 store 中编写更改商品信息的 action 方法
:::

::: info 体验

* **Step.1：通过 `modelValue` 传递商品的默认是否选中状态**

```html
<!-- 有效商品 -->
<td>
  <Checkbox :modelValue="goods.selected" />
</td>
```

* **Step.2：通过 `@update:modelValue` 指定更新商品数量的方法**

```html
<td>
  <Checkbox
    :modelValue="goods.selected"
    @update:modelValue="
      cartStore.updateGoodsOfCartBySkuId({
        skuId: goods.skuId,
        selected: $event,
      })
    "
  />
</td>
```

* **Step.3：在 store 中编写更改商品信息的 action 方法**

```js
updateGoodsOfCartBySkuId(partOfGoods) {
  const userStore = useUserStore();
  // 判断用户是否登陆
  if (userStore.profile.token) {
    // 如果登陆
  } else {
    // 如果没有登陆怎么办
    // 根据 skuId在购物车列表中查找哦想要更新的商品
    const index = this.list.findIndex(
      (item) => item.skuId === partOfGoods.skuId
    );
    // 更新商品
    this.list[index] = {
      ...this.list[index],
      ...partOfGoods,
    };
  }
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
