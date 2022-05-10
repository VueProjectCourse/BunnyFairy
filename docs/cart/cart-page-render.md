# 购物车-数据渲染-未登录

::: tip 目标
这一小节，我们的目标是实现购物车页面组件的数据渲染
:::

::: warning 步骤

1. 准备页面渲染所需数据
2. 在购物车页面组件中获取组件所需数据
3. 渲染页面
:::

::: info 体验

* **Step.1：准备页面渲染所需数据**

```js
  getters: {
    // 购物车中的商品列表
    effectiveGoodsList(state) {
      // 返回商品库存大于0且有效的商品列表
      return state.list.filter((item) => item.stock > 0 && item.isEffective);
    },
    // 购物车中的商品数量
    effectiveGoodsCount() {
      // 返回商品库存大于0且有效的商品列表
      return this.effectiveGoodsList.reduce(
        (count, item) => count + item.count,
        0
      );
    },
    // 购物车中的商品总价
    effectiveGoodsPrice() {
      // 返回商品库存大于0且有效的商品列表
      return this.effectiveGoodsList.reduce(
        (price, item) => price + Number(item.nowPrice) * item.count,
        0
      );
    },
    // 无效商品的商品列表
    invalidGoodsList(state) {
      return state.list.filter((item) => item.stock === 0 && !item.isEffective);
    },
    // 用户选择的商品列表
    userSelectedGoodsList(state) {
      return state.list.filter((item) => item.selected);
    },
    // 用户选择的商品数量
    userSelectedGoodsCount() {
      return this.userSelectedGoodsList.reduce(
        (count, item) => count + item.count,
        0
      );
    },
    // 用户选择的商品总价
    userSelectedGoodsPrice() {
      return this.userSelectedGoodsList.reduce(
        (price, item) => price + Number(item.nowPrice) * item.count,
        0
      );
    },
  },
```

* **Step.2：在购物车页面组件中获取组件所需数据**

```html
<script setup>
import Layout from "../DefaultLayout/Layout.vue";
import GoodsRelevant from "../Detail/GoodsRelevant/GoodsRelevant.vue";
import { useCartStore } from "../../stores/cartStore";
import { storeToRefs } from "pinia";

const {
  effectiveGoodsList,
  invalidGoodsList,
  userSelectedGoodsList,
  userSelectedGoodsCount,
  userSelectedGoodsPrice,
} = storeToRefs(useCartStore());
</script>
```

* **Step.3：渲染页面**

```html
<template>
  <div class="cart-page">
    <div class="container">
      <Bread>
        <BreadItem to="/">首页</BreadItem>
        <BreadItem>购物车</BreadItem>
      </Bread>
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th><Checkbox>全选</Checkbox></th>
              <th>商品信息</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="goods in effectiveGoodsList" :key="goods.id">
              <td><Checkbox /></td>
              <td>
                <div class="goods">
                  <RouterLink :to="`/goods/${goods.id}`"
                    ><img :src="goods.picture" alt=""
                  /></RouterLink>
                  <div>
                    <p class="name ellipsis">{{ goods.name }}</p>
                    <!-- 选择规格组件 -->
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>¥{{ goods.nowPrice }}</p>
                <p v-if="goods.price - goods.nowPrice > 0">
                  比加入时降价
                  <span class="red"
                    >¥{{ (goods.price - goods.nowPrice).toFixed(2) }}</span
                  >
                </p>
              </td>
              <td class="tc">
                <NumberBox></NumberBox>
              </td>
              <td class="tc">
                <p class="f16 red">
                  ¥{{ (goods.nowPrice * goods.count).toFixed(2) }}
                </p>
              </td>
              <td class="tc">
                <p><a href="javascript:">移入收藏夹</a></p>
                <p><a class="green" href="javascript:">删除</a></p>
                <p><a href="javascript:">找相似</a></p>
              </td>
            </tr>
          </tbody>
          <!-- 无效商品 -->
          <tbody>
            <tr>
              <td colspan="6"><h3 class="tit">失效商品</h3></td>
            </tr>
            <tr v-for="goods in invalidGoodsList" :key="goods.id">
              <td><Checkbox style="color: #eee" /></td>
              <td>
                <div class="goods">
                  <RouterLink :to="`/goods/${goods.id}`"
                    ><img :src="goods.picture" alt=""
                  /></RouterLink>
                  <div>
                    <p class="name ellipsis">{{ goods.name }}</p>
                    <p class="attr">{{ goods.attrsText }}</p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>¥{{ goods.nowPrice }}</p>
              </td>
              <td class="tc">{{ goods.count }}</td>
              <td class="tc">
                <p>¥{{ (goods.nowPrice * goods.count).toFixed(2) }}</p>
              </td>
              <td class="tc">
                <p><a class="green" href="javascript:">删除</a></p>
                <p><a href="javascript:">找相似</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          <Checkbox>全选</Checkbox>
          <a href="javascript:">删除商品</a>
          <a href="javascript:">移入收藏夹</a>
          <a href="javascript:">清空失效商品</a>
        </div>
        <div class="total">
          共 {{ effectiveGoodsCount }} 件商品，已选择
          {{ userSelectedGoodsCount }} 件，商品合计：
          <span class="red">¥{{ userSelectedGoodsPrice }}</span>
          <Button type="primary">下单结算</Button>
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <GoodsRelevant />
    </div>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
