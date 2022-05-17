# 购物车-选中状态和数量-已登录

::: tip 目标
这一小节，我们的目标是 实现修改服务器端购物车中的商品数量和选中状态
:::

::: warning 步骤

1. 创建用于修改商品信息的API接口
2. 在 store 中的 action 方法中调用接口实现修改服务器端购物车商品信息
:::

::: info 体验

* **Step.1：创建用于修改商品信息的API接口**

```js
/**
 * 全选、取消全选
 * @param selected 选中状态
 * @param ids skuId 数组
 * @return {AxiosPromise}
 */
export function selectOrUnselectCartGoods({ selected, ids }) {
  return request("/member/cart/selected", "put", { selected, ids });
}
```

* **Step.2：在 store 中的 action 方法中调用接口实现修改服务器端购物车商品信息**

```js
export default {
  actions: {
    // 全选、全不选
    async selectIsAll({ rootState, getters, commit, dispatch }, isAll) {
      if (rootState.user.profile.token) {
        // 登录
        // 获取商品 skuId 数组
        const ids = getters.effectiveGoodsList.map((item) => item.skuId);
        // 发送请求执行, 全选、全不选操作
        await selectOrUnselectCartGoods({ ids, selected: isAll });
        // 更新购物车商品列表
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
