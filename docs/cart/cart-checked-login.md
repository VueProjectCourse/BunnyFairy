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
export const selectOrUnselectCartGoods = ({ selected, ids }) => {
  return request.put("/member/cart/selected", { selected, ids });
};

```

* **Step.2：在 store 中的 action 方法中调用接口实现修改服务器端购物车商品信息**

```js
 async selectIsAll(partOfGoods) {
      // console.log(partOfGoods)

      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
        const ids = this.effectiveGoodsList.map((item) => item.skuId);
        console.log(ids);

        await selectOrUnselectCartGoods({
          ids,
          selected: partOfGoods.selected,
        });

        this.updateCartList();
      } else {
        // 如果没有登陆怎么办
        this.list.forEach((item) => {
          // console.log(item.selected)
          item.selected = partOfGoods.selected;
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
