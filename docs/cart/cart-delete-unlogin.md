# 购物车-删除-未登录

::: tip 目标
这一小节，我们的目标是实现购物车中商品的删除功能
:::

::: warning 步骤

1. 为删除按钮添加点击事件，执行删除操作
2. 如果购物车中没有有效商品, 显示用户提示
3. 判断购物车中是否没有商品，如果没有显示以上组件
:::

::: info 体验

* **Step.1：为删除按钮添加点击事件，执行删除操作**

```html
<td class="tc">
  <p><a href="javascript:">移入收藏夹</a></p>
  <p>
    <a
      class="green"
      href="javascript:"
      @click="cartStore.deleteGoodsOfCartBySkuId(goods.skuId)"
      >删除</a
    >
  </p>
  <p><a href="javascript:">找相似</a></p>
</td>
```

* **Step.2：如果购物车中没有有效商品, 显示用户提示**

```html
<!-- EmptyCart.vue` -->
<template>
  <div class="cart-none">
    <img src="@/assets/images/none.png" alt="" />
    <p>购物车内暂时没有商品</p>
    <div class="btn">
      <XtxButton type="primary" @click="$router.push('/')">继续逛逛</XtxButton>
    </div>
  </div>
</template>

```

```css
.cart-none {
  text-align: center;
  padding: 150px 0;
  background: #fff;
}
.cart-none  p {
    color: #999999;
    padding: 20px 0;
}
.cart-none  img {
    width: 180px;
}
```

* **Step.3：判断购物车中是否没有商品，如果没有显示以上组件**

```html
<tr v-if="effectiveGoodsCount === 0">
  <td colspan="6">
    <EmptyCart />
  </td>
</tr>
<tr v-else v-for="goods in effectiveGoodsList" :key="goods.id"></tr>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
