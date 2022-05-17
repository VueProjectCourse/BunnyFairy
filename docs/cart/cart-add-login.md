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
export const addGoods = ({ skuId, count }) => {
  return request.post("/member/cart", { skuId, count });
};

```

* **Step.2：在store中调用接口实现加入购物车功能**

```js
 // 把商品添加到购物车
    async addGoodsToCart(goods) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
        await addGoods({
          skuId: goods.skuId,
          count: goods.count,
        });
        this.updateCartList();
      } else {
        // 如果没有登陆怎么办

        // 找购物车中有没有该商品

        const index = this.list.findIndex((item) => item.skuId === goods.skuId);

        if (index > -1) {
          // 如果有该商品 只需要添加数量 不需要添加商品信息
          goods.count += this.list[index].count;
          // 先要把购物车中的商品删除掉
          this.list.splice(index, 1);
          // 把刚刚添加到的该商品添加到数组的最前面
          this.list.unshift(goods);
        } else {
          // 如果购物车中，没有该商品 直接把该商品添加到购物车就可以了
          // 把马上要选购的商品添加到购物车
          this.list.unshift(goods);
        }
      }
    },
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
