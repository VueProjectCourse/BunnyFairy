# 轮播图点击轮播

::: tip 目标
这一小节，我们的目标是实现轮播图点击轮播
:::

::: warning 步骤

1. 实现点击轮播图左右按钮切换轮播图功能
2. 实现点击导航原点轮播
:::

::: info 体验

* **Step.1：实现点击轮播图左右按钮切换轮播图功能**

```js
import { ref } from "vue";


export const useCarouselEffect = (carousels) => {

  // 轮播图当前索引
  const currentIndex = ref(0)
  // 轮播图切换
  const toggle = (step = 1) => {
    // 计算索引
    const nextIndex = currentIndex.value + step;
    // 如果索引值小于了第一张图片的索引
    if (nextIndex < 0) {
      // 让索引值为最后一张图片的索引
      currentIndex.value = carousels.length - 1;
    } else if (nextIndex > carousels.length - 1) {
      // 让索引值为第一张图片的索引
      currentIndex.value = 0;
    } else {
      // 索引值范围正常
      currentIndex.value = nextIndex;
    }
  }

  return { currentIndex, toggle}
}
```

```html
<a href="javascript:" class="carousel-btn prev" @click="toggle(-1)">
      <i class="iconfont icon-angle-left"></i>
    </a>
<a href="javascript:" class="carousel-btn next" @click="toggle(1)">
      <i class="iconfont icon-angle-right"></i>
</a>
```

* **Step.2：实现点击导航原点轮播**

```html
<span
    :class="{ active: index === currentIndex }"
    v-for="(item, index) in carousels"
    :key="item.id"
  @click="currentIndex = index"
></span>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
