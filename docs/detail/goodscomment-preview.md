# 评价组件-图片预览

::: tip 目标
这一小节，我们的目标是实现评价组件数据渲染, 实现评价组件大图预览功能

示例如下:

![header](./images/50.png)
:::

::: warning 步骤

1. 创建图片预览组件，编写布局代码
2. 编写样式代码
3. 在评论组件中调用图片预览组件
4. 渲染图片并实现大图预览效果
:::

::: info 体验

* **Step.1：创建图片预览组件，编写布局代码**

```html
<template>
  <div class="goods-comment-image">
    <div class="list">
      <a href="javascript:">
        <img src="" alt="" />
      </a>
    </div>
    <div class="preview">
      <img src="" alt="" />
      <i class="iconfont icon-close-new"></i>
    </div>
  </div>
</template>
```

* **Step.2：编写样式代码**

```css
@import "@/assets/styles/variable.css";
.goods-comment-image .list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.goods-comment-image .list a {
  width: 120px;
  height: 120px;
  border: 1px solid #e4e4e4;
  margin-right: 20px;
  margin-bottom: 10px;
}
.goods-comment-image .list a img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.goods-comment-image .list a.active {
  border-color: var(--primary-color);
}
.goods-comment-image .preview {
  width: 480px;
  height: 480px;
  border: 1px solid #e4e4e4;
  background: #f8f8f8;
  margin-bottom: 20px;
  position: relative;
}
.goods-comment-image .preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.goods-comment-image .preview i {
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  line-height: 30px;
}
```

* **Step.3：在评论组件中调用图片预览组件**

```html
<div class="text"></div>
<GoodsCommentImage :pictures="item.pictures" />
<div class="time"></div>
```

* **Step.4：渲染图片并实现大图预览效果**

```html
<script setup>
import { ref } from "vue";
defineProps({
  pictures: {
    type: Array,
    default: () => [],
  },
});

// 大图预览地址
const preview = ref(null);
</script>

<template>
  <div class="goods-comment-image">
    <div class="list">
      <a
        href="javascript:"
        @click="preview = picture"
        v-for="picture in pictures"
        :key="picture"
      >
        <img :src="picture" alt="" />
      </a>
    </div>
    <div class="preview" v-show="preview">
      <img :src="preview" alt="" />
      <i class="iconfont icon-close-new" @click="preview = null"></i>
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
