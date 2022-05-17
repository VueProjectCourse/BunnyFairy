# 清空本地购物车-退出登录

::: tip 目标
这一小节，我们的目标是实现用户退出后清空本地购物车商品数据
:::

::: warning 步骤

1. 退出的时候 清空本地购物车
:::

::: info 体验

```js
const logout = () => {
  store.commit("cart/setCart", []);
} 
```

:::

::: danger 总结
* 【重点】
* 【难点】
* 【注意点】
:::