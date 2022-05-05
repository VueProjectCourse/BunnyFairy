# 头部购物车-商品列表渲染-未登录

::: tip 目标
这一小节，我们的目标是创建头部购物车组件, 渲染头部购物车组件
:::

::: warning 步骤

1. 创建头部购物车组件, 编写布局代码
2. 在头部购物车组件中，编写样式代码
3. 在头部组件中调用头部购物车组件
4. 准备购物车所需数据, 可购买商品列表, 可购买商品总价, 可购买商品数量
5. 在头部购物车组件中获取所需数据
6. 根据数据渲染头部购物车组件
:::

::: info 体验

* **Step.1：创建头部购物车组件, 编写布局代码**

```html
<template>
  <div class="cart">
    <a class="curr" href="#"> <i class="iconfont icon-cart"></i><em>2</em> </a>
    <div class="layer">
      <div class="list">
        <div class="item" v-for="i in 4" :key="i">
          <RouterLink to="">
            <img
              src="https://yanxuan-item.nosdn.127.net/ead73130f3dbdb3cabe1c7b0f4fd3d28.png"
              alt=""
            />
            <div class="center">
              <p class="name ellipsis-2">和手足干裂说拜拜 手足皲裂修复霜</p>
              <p class="attr ellipsis">颜色：修复绿瓶 容量：150ml</p>
            </div>
            <div class="right">
              <p class="price">¥45.00</p>
              <p class="count">x2</p>
            </div>
          </RouterLink>
          <i class="iconfont icon-close-new"></i>
        </div>
      </div>
      <div class="foot">
        <div class="total">
          <p>共 3 件商品</p>
          <p>¥135.00</p>
        </div>
        <Button type="plain">去购物车结算</Button>
      </div>
    </div>
  </div>
</template>
```

* **Step.2：在头部购物车组件中，编写样式代码**

```css
@import "@/assets/styles/variable.css";
.cart {
  width: 50px;
  position: relative;
  z-index: 600;
}
.cart .curr {
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: relative;
  display: block;
}
.cart .curr .icon-cart {
  font-size: 22px;
}
.cart .curr em {
  font-style: normal;
  position: absolute;
  right: 0;
  top: 0;
  padding: 1px 6px;
  line-height: 1;
  background: var(--help-color);
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  font-family: Arial, serif;
}
.cart:hover .layer {
  opacity: 1;
  transform: none;
}
.cart .layer {
  opacity: 0;
  transition: all 0.4s 0.2s;
  transform: translateY(-200px) scale(1, 0);
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50px;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 4px;
  padding-top: 10px;
}
.cart .layer::before {
  content: "";
  position: absolute;
  right: 14px;
  top: -10px;
  width: 20px;
  height: 20px;
  background: #fff;
  transform: scale(0.6, 1) rotate(45deg);
  box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
}
.cart .layer .foot {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 70px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
  align-items: center;
}
.cart .layer .foot .total {
  padding-left: 10px;
  color: #999;
}
.cart .layer .foot .total p:last-child {
  font-size: 18px;
  color: var(--price-color);
}
.cart .list {
  height: 310px;
  overflow: auto;
  padding: 0 10px;
}
.cart .list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.cart .list::-webkit-scrollbar-track {
  background: #f8f8f8;
  border-radius: 2px;
}
.cart .list::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 10px;
}
.cart .list::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
.cart .list .item {
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 0;
  position: relative;
}
.cart .list .item i {
  position: absolute;
  bottom: 38px;
  right: 0;
  opacity: 0;
  color: #666;
  transition: all 0.5s;
}
.cart .list .item:hover i {
  opacity: 1;
  cursor: pointer;
}
.cart .list .item a {
  display: flex;
  align-items: center;
}
.cart .list .item a img {
  height: 80px;
  width: 80px;
}
.cart .list .item a .center {
  padding: 0 10px;
  width: 200px;
}
.cart .list .item a .center .name {
  font-size: 16px;
}
.cart .list .item a .center .attr {
  color: #999;
  padding-top: 5px;
}
.cart .list .item a .right {
  width: 100px;
  padding-right: 20px;
  text-align: center;
}
.cart .list .item a .right .price {
  font-size: 16px;
  color: var(--price-color);
}
.cart .list .item a .right .count {
  color: #999;
  margin-top: 5px;
  font-size: 16px;
}
```

* **Step.3：在头部组件中调用头部购物车组件**

```html
 <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>

      <!-- 导航组件 -->
      <HeaderNav></HeaderNav>

      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 删除以前的静态代码 -->
      <!-- <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i>
          <em>2</em>
        </a>
      </div> -->
      <!-- 直接引入购物车组件即可 -->
      <AppHeaderCart />
    </div>
  </header>
```

* **Step.4：准备购物车所需数据, 可购买商品列表, 可购买商品总价, 可购买商品数量**

```js
  getters: {
    // 可购买商品列表（有效商品 + 商品库存数量大于0）
    effectiveGoodsList(state) {
      return state.list.filter((item) => item.isEffective && item.stock > 0);
    },
    // 可购买商品数量
    effectiveGoodsCount() {
      return this.effectiveGoodsList.reduce(
        (count, item) => count + item.count,
        0
      );
    },
    // 可购买商品总价
    effectiveGoodsPrice() {
      return this.effectiveGoodsList.reduce(
        (price, item) => price + Number(item.nowPrice) * item.count,
        0
      );
    },
  },
```

* **Step.5：在头部购物车组件中获取所需数据**

```js
// 获取 store 对象
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cartStore";
const { effectiveGoodsCount, effectiveGoodsPrice, effectiveGoodsList } = storeToRefs(useCartStore());
```

* **Step.6：根据数据渲染头部购物车组件**

```html
<template>
  <div class="cart">
    <a class="curr" href="#">
      <i class="iconfont icon-cart"></i><em>{{ effectiveGoodsCount }}</em>
    </a>
    <div class="layer">
      <div class="list">
        <div class="item" v-for="goods in effectiveGoodsList" :key="goods.id">
          <RouterLink to="">
            <img :src="goods.picture" alt="" />
            <div class="center">
              <p class="name ellipsis-2">{{ goods.name }}</p>
              <p class="attr ellipsis">{{ goods.attrsText }}</p>
            </div>
            <div class="right">
              <p class="price">¥{{ goods.nowPrice }}</p>
              <p class="count">x{{ goods.count }}</p>
            </div>
          </RouterLink>
          <i class="iconfont icon-close-new"></i>
        </div>
      </div>
      <div class="foot">
        <div class="total">
          <p>共 {{ effectiveGoodsCount }} 件商品</p>
          <p>¥{{ effectiveGoodsPrice }}</p>
        </div>
        <Button type="plain">去购物车结算</Button>
      </div>
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
