# 购物车-基础布局

::: tip 目标
这一节，我们的目标是  创建购物车页面组件, 实现基础布局, 配置页面路由规则

示例如下:
![60](./images/60.png)
:::

::: warning 步骤

1. 创建购物车页面组件, 编写布局代码
2. 在购物车页面组件中，编写样式代码
3. 配置购物车页面路由规则
:::

::: info 体验

* **Step.1：创建购物车页面组件, 编写布局代码**

```html
<template>
  <AppLayout>
   <div class="cart-page">
      <div class="container">
        <XtxBread>
          <XtxBreadItem path="/">首页</XtxBreadItem>
          <XtxBreadItem>购物车</XtxBreadItem>
        </XtxBread>
        <div class="cart">
          <table>
            <thead>
              <tr>
                <th><XtxCheckbox>全选</XtxCheckbox></th>
                <th>商品信息</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
              </tr>
            </thead>
            <!-- 有效商品 -->
            <tbody>
              <tr v-for="i in 3" :key="i">
                <td><XtxCheckbox /></td>
                <td>
                  <div class="goods">
                    <RouterLink to="/"
                      ><img
                        src="https://yanxuan-item.nosdn.127.net/13ab302f8f2c954d873f03be36f8fb03.png"
                        alt=""
                    /></RouterLink>
                    <div>
                      <p class="name ellipsis">和手足干裂说拜拜 手足皲裂修复霜</p>
                      <!-- 选择规格组件 -->
                    </div>
                  </div>
                </td>
                <td class="tc">
                  <p>&yen;200.00</p>
                  <p>比加入时降价 <span class="red">&yen;20.00</span></p>
                </td>
                <td class="tc">
                  <XtxNumberBox></XtxNumberBox>
                </td>
                <td class="tc"><p class="f16 red">&yen;200.00</p></td>
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
              <tr v-for="i in 3" :key="i">
                <td></td>
                <td>
                  <div class="goods">
                    <RouterLink to="/"
                      ><img
                        src="https://yanxuan-item.nosdn.127.net/13ab302f8f2c954d873f03be36f8fb03.png"
                        alt=""
                    /></RouterLink>
                    <div>
                      <p class="name ellipsis">和手足干裂说拜拜 手足皲裂修复霜</p>
                      <p class="attr">颜色：粉色 尺寸：14cm 产地：中国</p>
                    </div>
                  </div>
                </td>
                <td class="tc"><p>&yen;200.00</p></td>
                <td class="tc">1</td>
                <td class="tc"><p>&yen;200.00</p></td>
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
            <XtxCheckbox>全选</XtxCheckbox>
            <a href="javascript:">删除商品</a>
            <a href="javascript:">移入收藏夹</a>
            <a href="javascript:">清空失效商品</a>
          </div>
          <div class="total">
            共 7 件商品，已选择 2 件，商品合计：
            <span class="red">¥400</span>
            <XtxButton type="primary">下单结算</XtxButton>
          </div>
        </div>
        <!-- 猜你喜欢 -->
        <GoodsRelevant />
      </div>
    </div>
  </AppLayout>
</template>
```

* **Step.2：在购物车页面组件中，编写样式代码**

```css
@import "@/assets/styles/variable.css";
.tc {
  text-align: center;
}
.tc .xtx-number-box {
  margin: 0 auto;
  width: 120px;
}
.red {
   color: var(--price-color);
}
.green {
  color: var(--primary-color);
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
}
.goods img {
  width: 100px;
  height: 100px;
}
.goods > div {
  width: 280px;
  font-size: 16px;
  padding-left: 10px;
}
.goods > div .attr {
  font-size: 14px;
  color: #999;
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
}
.action .xtx-checkbox {
  color: #999;
}
.action .batch a {
  margin-left: 20px;
}
.action .red {
  font-size: 18px;
  margin-right: 20px;
  font-weight: bold;
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.cart-page .cart {
  background: #fff;
  color: #666;
}
.cart-page .cart table {
  border-spacing: 0;
  border-collapse: collapse;
  line-height: 24px;
  width: 100%;
}
.cart-page .cart table th,
.cart-page .cart table td {
  padding: 10px;
  border-bottom: 1px solid #f5f5f5;
}
.cart-page .cart table th:first-child,
.cart-page .cart table td:first-child {
  text-align: left;
  padding-left: 30px;
  color: #999;
}
.cart-page .cart table th {
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}

```

* **Step.3：配置购物车页面路由规则**

```js
import CartPage from "@/views/cart/CartPage";

const routes = [
  { path: "/cart", component: CartPage },
]
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
