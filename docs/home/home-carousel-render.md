# 轮播图数据渲染

::: tip 目标
这一小节，我们的目标是获取轮播图数据, 根据轮播图数据渲染轮播图组件
:::

::: warning 步骤

1. 定义获取轮播图数据的请求函数
2. 获取轮播图数据并将其传递到轮播图组件中
3. 在轮播图组件内部根据数据渲染轮播图结构
:::

::: info 体验

* **Step.1：定义获取轮播图数据的请求函数**

```js
// homeAPI.js
/**
 * 获取轮播图数据
 * @param {number} distributionSite - 广告投放位置 1 首页 2 分类页面
 * @return {Promise<{result: Array<Banner>}>} 广告图列表
 */
export function readBanners(distributionSite = 1) {
  return request.get("/home/banner", {
    params: {
      distributionSite
    }
  });
}
```

* **Step.2：获取轮播图数据并将其传递到轮播图组件中**

```js
// HomeBanner/useHomeBanner.js
import { ref } from "vue"
import { readBanners } from "../../api/homeAPI"
export const useBanners = () => {
  const bannerList = ref(null);

  readBanners().then(({ data: res, status }) => {
    console.log(res, status)
    if (status === 200) {
      bannerList.value = res.result;
    }
  })

  return { bannerList }
}
```

```html
<script setup>
import { useBanners } from "./useHomeBanner"
const { bannerList } = useBanners()
</script>

<template>
  <div class="home-banner" >
    <Carousel v-if="bannerList" :carousels="bannerList"  />
  </div>
</template>

```

* **Step.3：在轮播图组件内部根据数据渲染轮播图结构**

```html
<script setup>import { ref } from 'vue';
defineProps({
  carousels: {
    type: Array
  }
})
const currentIndex = ref(0)
</script>
<template>
  <div class="xtx-carousel">
    <ul class="carousel-body">
      <li
        class="carousel-item fade"
        v-for="(item, index) in carousels"
        :key="item.id"
        :class="{ fade: index === currentIndex }"
      >
        <RouterLink :to="item.hrefUrl">
          <img :src="item.imgUrl" alt />
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:" class="carousel-btn prev">
      <i class="iconfont icon-angle-left"></i>
    </a>
    <a href="javascript:" class="carousel-btn next">
      <i class="iconfont icon-angle-right"></i>
    </a>
    <div class="carousel-indicator">
      <span
        v-for="(item, index) in carousels"
        :key="item.id"
        :class="{ active: index === currentIndex }"
      ></span>
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
