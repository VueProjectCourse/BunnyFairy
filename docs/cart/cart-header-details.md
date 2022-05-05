# 头部购物车-细节处理

::: tip 目标
这一小节，我们的目标是完善头部购物车中的一些细节
:::

::: warning 步骤

1. 当购物车中没有商品或者当前已经处于购物车页面时隐藏头部购物车列表
2. 点击头部购物车链接时跳转到购物页面
3. 点击购物车中的商品跳转到商品详情页面
4. 点击去购物车结算按钮跳转到购物车
:::

::: info 体验

* **Step.1：当购物车中没有商品或者当前已经处于购物车页面时隐藏头部购物车列表**

```html
<!-- AppHeaderCart.vue -->
<div class="layer" v-if="effectiveGoodsCount > 0 && !isCartPage"></div>
```

```js
// AppHeaderCart.vue
// 获取路由信息对象
  const route = useRoute();
  // 是否是购物车页面
  const isCartPage = ref(route.path === "/cart");
  // 路由发生更新时重新判断当前页面是否是购物车页面
  onBeforeRouteUpdate((to) => {
    isCartPage.value = to.path === "/cart";
  });
```

* **Step.2：点击头部购物车链接时跳转到购物页面**

```html
<RouterLink class="curr" to="/cart"></RouterLink>
```

* **Step.3：点击购物车中的商品跳转到商品详情页面**

```html
<RouterLink :to="`/goods/${goods.id}`"></RouterLink>
```

* **Step.4：点击去购物车结算按钮跳转到购物车**

```html
<Button type="plain"><RouterLink to="/cart">去购物车结算</RouterLink></Button>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
