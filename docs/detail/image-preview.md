# 图片预览组件

::: tip 目标
这一小节，我们的目标是实现图片预览组件布局及图片切换效果

示例如下:
![breadcrumb](./images/37.png)
:::

::: warning 步骤

1. 创建图片预览组件(GoodsImages), 实现基础布局
2. 在商品详情页面组件中调用 `GoodsImages` 组件
3. 实现图片预览组件中图片的渲染及切换效果
:::

::: info 体验

* **Step.1：创建图片预览组件, 实现基础布局**

```html
<template>
  <div class="goods-image">
    <div class="middle">
      <img
        src="https://yanxuan-item.nosdn.127.net/5eb33f533b24295500da6fa9d9de569e.jpg"
        alt=""
      />
    </div>
    <ul class="small">
      <li class="active">
        <img
          src="https://yanxuan-item.nosdn.127.net/0423528ba155879e94648ee47eb06ab6.png"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/62de6ea422e9e6a63b83ec6e774525c4.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/ad957a03bf2a271943abe8e3d8d0fbb0.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/5eb33f533b24295500da6fa9d9de569e.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://yanxuan-item.nosdn.127.net/5cd9019410c4908cf8ee8df907d65595.png"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>
```

```css
@import "@/assets/styles/variable.css";
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
}
.goods-image .middle {
  width: 400px;
  height: 400px;
  background: #f5f5f5;
  position: relative;
  cursor: move;
}
.goods-image .small {
  width: 80px;
}
.goods-image .small li {
  width: 68px;
  height: 68px;
  margin-left: 12px;
  margin-bottom: 15px;
  cursor: pointer;
}
.goods-image .small li:hover,
.goods-image .small li.active {
  border: 2px solid var(--primary-color);
}


```

* **Step.2：在商品详情页面组件中调用 `GoodsImages` 组件**

```html
<div class="media">
  <GoodsImages :images="result.mainPictures" />
</div>
```

* **Step.3：实现图片预览组件中图片的渲染及切换效果**

```js
const current = ref(0);
```

```html
<template>
  <div class="goods-image">
    <div class="middle">
      <img :src="images[current]" alt="" />
    </div>
    <ul class="small">
      <li
        @mouseenter="current = index"
        v-for="(item, index) in images"
        :key="index"
        :class="{ active: index === current }"
      >
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
