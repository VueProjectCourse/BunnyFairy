# 详情组件

::: tip 目标
这一小节，我们的目标是渲染商品属性集合、渲染商品图片集合、渲染商品评论数量
:::

::: warning 步骤

1. 在商品详情页页面组件中将商品详情数据通过 provide 开放到子组件
2. 在商品详情组件中通过 inject 获取商品详情信息 result
3. 在标签页组件中获取商品数据展示评论数量
:::

::: info 体验

* **Step.1：在商品详情页页面组件中将商品详情数据通过 provide 开放到子组件**

```js
// GoodsDetailPage.vue
import { provide } from 'vue'
// 将 product 数据开放到子组件
provide('result', result)
```

* **Step.2：在商品详情组件中通过 inject 获取商品详情信息 result**

`result.details.properties`: 商品详情属性集合
`result.details.pictures`: 商品详情图片集合

```js
// GoodsDetail.vue
import { inject } from 'vue'
export default {
  setup () {
    const result = inject('result')
    return { result }
  }
}
```

```html
<template>
  <div class="goods-detail">
    <!-- 属性 -->
    <ul class="attrs">
      <li>
        <span class="dt">属性名称</span>
        <span class="dd">属性值</span>
      </li>
    </ul>
    <!-- 图片 -->
    <img src="" alt="" />
  </div>
</template>
```

```css
.goods-detail {
  padding: 40px;
}
.goods-detail .attrs {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.goods-detail .attrs li {
  display: flex;
  margin-bottom: 10px;
  width: 50%;
}
.goods-detail .attrs li .dt {
  width: 100px;
  color: #999;
}
.goods-detail .attrs li .dd {
  flex: 1;
  color: #666;
}
.goods-detail > img {
  width: 100%;
}
```

```html
<template>
  <div class="goods-detail">
    <!-- 属性 -->
    <ul class="attrs">
      <li v-for="property in result.details.properties" :key="property.name">
        <span class="dt">{{ property.name }}</span>
        <span class="dd">{{ property.value }}</span>
      </li>
    </ul>
    <!-- 图片 -->
    <img :src="img" alt="" v-for="img in result.details.pictures" :key="img" />
  </div>
</template>
```

* **Step.3：在标签页组件中获取商品数据展示评论数量**

```js
import { inject } from 'vue'
const result = inject('result') 
```

```html
<span>({{result.commentCount}})</span>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
