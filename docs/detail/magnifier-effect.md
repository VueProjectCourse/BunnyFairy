# 放大镜效果

::: tip 目标
这一小节，我们的目标是实现商品图片的放大镜效果

示例如下:
![breadcrumb](./images/36.png)
:::

::: warning 步骤

1. 在 `GoodsImages` 组件中添加大图容器
2. 在 `GoodsImages` 组件中添加镜片容器
3. 实现放大镜效果
:::

::: info 体验

* **Step.1：在 `GoodsImages` 组件中添加大图容器**

```html
<div class="goods-image">
  <div class="large" :style="{ backgroundImage: `url(${images[current]})` }"></div>
  <div class="middle"></div>
</div>
```

```css
.goods-image .large {
  position: absolute;
  top: 0;
  left: 412px;
  width: 400px;
  height: 400px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-repeat: no-repeat;
  background-size: 800px 800px;
  background-color: #f8f8f8;

}
```

* **Step.2：在 `GoodsImages` 组件中添加镜片容器**

```html
<div class="middle">
  <div class="layer"></div>
</div>
```

```css
.goods-image .middle .layer {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
  position: absolute;
}
```

* **Step.3：实现放大镜效果**

  1. 声明 `show` 布尔值用于控制镜片容器和大图容器的显示和隐藏
  2. 通过 `useMouseInElement` 方法获取元素和鼠标之前的关系 (鼠标是否移入到元素中、鼠标在元素中的位置)
  3. 根据鼠标是否在元素中决定大图容器和镜片容器的显示和隐藏
  4. 根据鼠标在元素中的位置计算镜片容器位置
  5. 根据镜片元素位置计算大图位置

```html
<template>
  <div class="goods-image">
    <div
      class="large"
      :style="{
        backgroundImage: `url(${images[current]})`,
        backgroundPositionX: bgPosition.x + 'px',
        backgroundPositionY: bgPosition.y + 'px',
      }"
      v-show="show"
    ></div>
    <div class="middle" ref="middleElement">
      <img :src="images[current]" alt="" />
      <div
        class="layer"
        v-show="show"
        :style="{
          left: layerPosition.left + 'px',
          top: layerPosition.top + 'px',
        }"
      ></div>
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
<script>
import { ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";

export default {
  name: "GoodsImages",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    // 用于存储当前要显示的图片的索引
    const current = ref(0);
    // 用于控制镜片和大图是否显示
    const show = ref(false);
    // 用于存储中图元素
    const middleElement = ref(null);
    // 获取鼠标和元素之间的位置关系
    const { isOutside, elementX, elementY } = useMouseInElement(middleElement);
    // 用于存储镜片元素位置
    const layerPosition = ref({ left: 0, top: 0 });
    // 用于存储大图背景位置
    const bgPosition = ref({ x: 0, y: 0 });
    watch([isOutside, elementX, elementY], () => {
      /*
       * 如果鼠标在元素外部, 隐藏镜片和大图
       * if (isOutside.value) show.value = false
       * 如果鼠标在元素内部, 显示静态和大图
       * if (!isOutside.value) show.value = true
       * 下面这句代码等同以上代码
       * */
      show.value = !isOutside.value;

      // 更新镜片元素位置
      layerPosition.value = {
        left: elementX.value - 100,
        top: elementY.value - 100,
      };
      // 对镜片元素的水平方向位置进行限制
      if (layerPosition.value.left < 0) {
        layerPosition.value.left = 0;
      } else if (layerPosition.value.left > 200) {
        layerPosition.value.left = 200;
      }
      // 对镜片元素的垂直方向位置进行限制
      if (layerPosition.value.top < 0) {
        layerPosition.value.top = 0;
      } else if (layerPosition.value.top > 200) {
        layerPosition.value.top = 200;
      }

      // 更新大图背景位置
      bgPosition.value = {
        x: -layerPosition.value.left * 2,
        y: -layerPosition.value.top * 2,
      };
    });

    return {
      current,
      show,
      middleElement,
      isOutside,
      layerPosition,
      bgPosition,
    };
  },
};
</script>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
