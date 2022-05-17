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
export const deleteGoodsOfCartBySkuIds = (ids) => {
  console.log(ids);
  return request.delete("/member/cart", { data: { ids } });
};

```

* **Step.2：在store中调用接口实现删除商品功能**

```js
   // 把商品从购物车中删除
    async deleteGoodsOfCartBySkuId(skuId) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
        // console.log(skuId);
        await deleteGoodsOfCartBySkuIds([skuId]);
        // 更新购物车商品列表
        this.updateCartList();
      } else {
        // 如果没有登陆怎么办
        const index = this.list.findIndex((item) => item.skuId === skuId);

        this.list.splice(index, 1);
      }
    },
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
