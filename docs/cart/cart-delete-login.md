# 购物车-删除商品-已登录

::: tip 目标
这一小节，我们的目标是实现删除服务器端购物车删除
:::

::: warning 步骤

1. 创建用于删除购物商品的API接口函数
2. 在store中调用接口实现删除商品功能
:::

::: info 体验

* **Step.1：创建用于删除购物商品的API接口函数**

```js
/**
 * 删除购物车中的商品 支持批量删除 支持单个删除
 * @param ids {Array<string>} 商品 skuId 数组
 * @return {AxiosPromise}
 */
export function deleteGoodsOfCartBySkuIds(ids) {
  return request("/member/cart", "delete", { ids });
}
```

* **Step.2：在store中调用接口实现删除商品功能**

```js
import { deleteGoodsOfCartBySkuIds } from "@/api/cart";

export default {
  actions: {
    // 根据 skuId 删除商品
    async deleteGoodsOfCartBySkuId({ rootState, commit, dispatch }, skuId) {
      if (rootState.user.profile.token) {
        // 已登录
        await deleteGoodsOfCartBySkuIds([skuId]);
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
