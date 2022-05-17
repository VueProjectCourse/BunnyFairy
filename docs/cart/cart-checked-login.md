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
 * 更新购物车中的商品信息 (支持是否选中和商品数量)
 * @param skuId {string} - 商品 skuId
 * @param selected {boolean} - 是否选中状态
 * @param count {number} - 商品数量
 * @return {AxiosPromise}
 */
export const updateGoodsOfCartBySkuIds = ({ skuId, selected, count }) => {
  return request.put(`/member/cart/${skuId}`, { selected, count });
};

```

* **Step.2：在 store 中的 action 方法中调用接口实现修改服务器端购物车商品信息**

```js
  // 更改商品信息(是否选择)
    async updateGoodsOfCartBySkuId(partOfGoods) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
        // 更新商品信息
        // console.log(partOfGoods);
        await updateGoodsOfCartBySkuIds(partOfGoods);
        // 更新购物车商品列表
        this.updateCartList();
      } else {
        // 如果没有登陆怎么办
        // console.log(partOfGoods)
        // 1. 通过skuId查找到该商品在list中的索引
        const index = this.list.findIndex(
          (item) => item.skuId === partOfGoods.skuId
        );
        // console.log(index);
        // 2， 更改list中的那个商品的selected的值
        // 在vue中这样的写法更好
        // this.list[index].selected = partOfGoods.selected;

        // 更新商品
        // 在react中 只能用下面的方法
        // 编程范式-->数据不可变范式
        //
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
