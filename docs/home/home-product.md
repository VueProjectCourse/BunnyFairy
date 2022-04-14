# 实现产品区块主体

::: tip 目标
这一小节，我们的目标是 实现产品区块组件渲染， 示例如下:
![home-goods](./images/111.png)
:::

::: warning 步骤

1. 创建`HomeProduct`组件，并添加布局代码
2. 在`HomeProduct`组件中添加样式代码
3. 在`HomeProduct`组件中引入需要的组件
4. 在`Home`组件中调用`HomeProduct`组件
5. 在`homeAPI`中声明获取数据的方法
6. 在`HomeProduct`组件实现数据懒加载
7. 把数据渲染到`HomeProduct`组件中
:::

::: info 体验

* **Step.1：创建`HomeProduct`组件，并添加布局代码**

```html
<template>
  <div class="home-product">
    <HomePanel title="生鲜" v-for="i in 4" :key="i">
      <template v-slot:right>
        <div class="sub">
          <RouterLink to="/">海鲜</RouterLink>
          <RouterLink to="/">水果</RouterLink>
          <RouterLink to="/">蔬菜</RouterLink>
          <RouterLink to="/">水产</RouterLink>
          <RouterLink to="/">禽肉</RouterLink>
        </div>
        <XtxMore />
      </template>
      <template v-slot:default>
        <div class="box">
          <RouterLink class="cover" to="/">
            <img
              src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_cover.jpg"
              alt=""
            />
            <strong class="label">
              <span>生鲜馆</span>
              <span>全场3件7折</span>
            </strong>
          </RouterLink>
          <ul class="goods-list">
            <li v-for="i in 8" :key="i">
              <!-- 左侧商品列表 -->
            </li>
          </ul>
        </div>
      </template>
    </HomePanel>
  </div>
</template>
```

* **Step.2：在`HomeProduct`组件中添加样式代码**

```html
<style scoped>
@import "@/assets/styles/variable.css";

.home-product {
  background: #fff;
  height: 2900px;
}

.home-product .sub {
  margin-bottom: 2px;
}

.home-product .sub a {
  padding: 2px 12px;
  font-size: 16px;
  border-radius: 4px;
}

.home-product .sub a:hover {
  background: var(--primary-color);
  color: #fff;
}

.home-product .sub a:last-child {
  margin-right: 80px;
}

.home-product .box {
  display: flex;
}

.home-product .box .cover {
  width: 240px;
  height: 610px;
  margin-right: 10px;
  position: relative;
}

.home-product .box .cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-product .box .cover .label {
  width: 188px;
  height: 66px;
  display: flex;
  font-size: 18px;
  color: #fff;
  line-height: 66px;
  font-weight: normal;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}

.home-product .box .cover .label span {
  text-align: center;
}

.home-product .box .cover .label span:first-child {
  width: 76px;
  background: rgba(0, 0, 0, 0.9);
}

.home-product .box .cover .label span:last-child {
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
}

.home-product .box .goods-list {
  width: 990px;
  display: flex;
  flex-wrap: wrap;
}

.home-product .box .goods-list li {
  width: 240px;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.home-product .box .goods-list li:nth-last-child(-n+4) {
  margin-bottom: 0;
}

.home-product .box .goods-list li:nth-child(4n) {
  margin-right: 0;
}
</style>
```

* **Step.3：在`HomeProduct`组件中引入需要的组件**

```js
import HomePanel from '../HomePanel/HomePanel.vue';
```

* **Step.4：在`Home`组件中调用`HomeProduct`组件**

```html
<script setup>
import HomeProduct from "../../components/HomeProduct/HomeProduct.vue";
</script>

<template>
  <Layout>
    <!-- ...省略代码 -->
    <HomeBrand/>
    <HomeProduct/>
  </Layout>
</template>
```

* **Step.5：在`homeAPI`中声明获取数据的方法**

```js
/**
 * 获取产品区块数据
 * @return {Promise<{result: Array<Product>}>}
 */
export const readGoodProducts = () => {
  return request.get("/home/goods");
}
```

* **Step.6：在`HomeProduct`组件实现数据懒加载**

```js
import { readGoodProducts } from "../../api/homeAPI"
import { useLazyData } from "../HomeNew/useHomeNew"
const { target, result } = useLazyData(readGoodProducts)
```

* **Step.7：把数据渲染到`HomeProduct`组件中**

```html
<template>
  <div class="home-product" ref="target">
    <HomePanel :title="item.name" v-for="item in result" :key="item.id">
      <template v-slot:right>
        <div class="sub">
          <RouterLink :to="`/category/sub/${sub.id}`" v-for="sub in item.children" :key="sub.id">{{ sub.name }}
          </RouterLink>
        </div>
        <More :path="`/category/${item.id}`" />

      </template>
      <template v-slot:default>
        <div class="box">
          <RouterLink class="cover" to="/">
            <img :src="item.picture" alt="" />
            <strong class="label">
              <span>{{ item.name }}馆</span>
              <span>{{ item.saleInfo }}</span>
            </strong>
          </RouterLink>
          <ul class="goods-list" v-if="item.goods">
          <li v-for="goods in item.goods" :key="goods.id">
              <!-- 左侧商品列表 -->
          </li>
        </ul>
        </div>
      </template>
    </HomePanel>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
