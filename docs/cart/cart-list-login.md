# 购物车-购物车列表-已登录

::: tip 目标
这一小节，我们的目标是实现将服务器端购物车数据同步到本地 Store 中
:::

::: warning 步骤

1. 创建用于获取购物车列表的API接口函数
2. 在登录后获取服务器端列表数据
:::

::: info 体验

* **Step.1：创建用于获取购物车列表的API接口函数**

```js
/**
 * 获取服务器端购物车列表数据
 * @return {AxiosPromise}
 */
export const getCartList = () => {
  return request.get("/member/cart");
};

```

* **Step.2：在登录后获取服务器端列表数据**

```js
actions: {
  // 更新购物车商品(many)
  async updateCartList({ rootState, state, commit }) {
    if (rootState.user.profile.token) {
      // 登录
      // 获取服务器端购物车列表数据
      let data = await getCartList();
      // 将服务器端购物车列表数据存储到 vuex 中
      this.list = data.result
    } else {
      // 未登录
    }
  },
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
