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
// 批量删除或情况无效商品
    async deleteGoodsOfCartByUserSelectedOrInvalid(flag) {
      // userSelectedGoodsList
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
        // 获取要批量删除商品的 skuId 数组
        const skuIds = this[flag].map((item) => item.skuId);
        await deleteGoodsOfCartBySkuIds(skuIds);
        this.updateCartList();
      } else {
        // 如果没有登陆怎么办
        this[flag].forEach((item) => {
          this.deleteGoodsOfCartBySkuId(item.skuId);
        });
      }
    },
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
