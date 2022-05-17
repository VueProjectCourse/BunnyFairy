# 购物车-批量删除商品-已登录

::: tip 目标
这一小节，我们的目标是  实现批量删除服务器端购物车商品
:::

::: warning 步骤

1. 获取要批量删除商品的 skuId 数组
2. 发送请求实现商品的批量删除
:::

::: info 体验

* **Step.1：获取要批量删除商品的 skuId 数组**
* **Step.2：发送请求实现商品的批量删除**

```js
export default {
  actions: {
    // 删除用户选择的商品、清空无效商品
    async deleteGoodsOfCartByUserSelectedOrInvalid(
      { getters, rootState, commit, dispatch },
      flag
    ) {
      if (rootState.user.profile.token) {
        // 登录
        // 获取要批量删除商品的 skuId 数组
        const skuIds = getters[flag].map((item) => item.skuId);
        // 发送请求 批量删除商品
        await deleteGoodsOfCartBySkuIds(skuIds);
        // 更新商品列表
        dispatch("updateCartList");
      } else {
        // 未登录
      }
    },
  }
} 
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
