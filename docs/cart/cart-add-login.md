# 购物车-加入购物车-已登录

::: tip 目标
这一小节，我们的目标是实现将商品添加到服务器端购物车
:::

::: warning 步骤

1. 创建用于实现加入购物功能的API函数
2. 在store中调用接口实现加入购物车功能
:::

::: info 体验

* **Step.1：创建用于实现加入购物功能的API函数**

```js
/**
 * 将商品加入购物车
 * @param skuId {string} - 商品 skuId
 * @param count {number} - 商品数量
 * @return {AxiosPromise}
 */
export function addGoodsToCart({ skuId, count }) {
  return request("/member/cart", "post", { skuId, count });
}
```

* **Step.2：在store中调用接口实现加入购物车功能**

```js
// src/store/cart.js
export default {
  actions: {
    // 将商品加入购物车
    async addGoodsToCart({ rootState, commit, dispatch }, goods) {
      // 判断用户是否登录
      if (rootState.user.profile.token) {
        // 登录
        // 发送请求 将商品添加到服务器端购物车
        await addGoodsToCart({
          skuId: goods.skuId,
          count: goods.count,
        });
        // 更新购物车列表
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
