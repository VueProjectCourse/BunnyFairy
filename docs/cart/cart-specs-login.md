# 购物车-修改商品规格-已登录

::: tip 目标
这一小节，我们的目标是实现修改服务器端购物车中的商品规格信息

在接口文档中没有提供修改商品规格的接口，修改商品规格可以通过删除商品接口和添加商品接口实现
:::

::: warning 步骤
在接口文档中没有提供修改商品规格的接口，修改商品规格可以通过删除商品接口和添加商品接口实现

```js
export default {
  actions: {
    // 商品规格信息发生变化, 更新商品信息
    async updateGoodsOfCartBySkuChanged(
      { rootState, state, commit, dispatch },
      { oldSkuId, userSelectedNewSku }
    ) {
      if (rootState.user.profile.token) {
        // 登录
        // 查找原有商品信息, 通过原有商品信息获取用户选择的商品数据
        const oldGoods = state.list.find((item) => item.skuId === oldSkuId);
        // 删除原有商品
        await deleteGoodsOfCartBySkuIds([oldSkuId]);
        // 添加新商品
        await addGoodsToCart({
          skuId: userSelectedNewSku.skuId,
          count: oldGoods.count,
        });
        // 更新购物车商品列表
        await dispatch("updateCartList");
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
