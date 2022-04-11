# 轮播图布局

::: tip 目标
这一小节，我们的目标是实现轮播图基础布局
:::

::: warning 步骤

1. 在`components`文件夹中新建轮播图组件(Carousel),并编写布局代码
2. 在轮播图组件中，编写样式代码
3. 将轮播图组件注册为应用级全局组件
4. 在入口文件main中挂载
5. 创建 `HomeBanner` 组件，在该组件中调用轮播图组件
6. 在 `Home`组件中调用 `HomeBanner` 组件, 实现静态轮播图结构展示
:::

::: info 体验

* **Step.1：在`components`文件夹中新建轮播图组件(Carousel),并编写布局代码**

```html
<template>
  <div class="xtx-carousel">
    <ul class="carousel-body">
      <li class="carousel-item fade">
        <RouterLink to="/">
          <img
            src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg"
            alt=""
          />
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:" class="carousel-btn prev"
      ><i class="iconfont icon-angle-left"></i
    ></a>
    <a href="javascript:" class="carousel-btn next"
      ><i class="iconfont icon-angle-right"></i
    ></a>
    <div class="carousel-indicator">
      <span v-for="i in 5" :key="i"></span>
    </div>
  </div>
</template>
```

* **Step.2：在轮播图组件中，编写样式代码**

```css
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
}
.xtx-carousel .carousel-body {
  width: 100%;
  height: 100%;
}
.xtx-carousel .carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
}
.xtx-carousel .carousel-item.fade {
  opacity: 1;
  z-index: 1;
}
.xtx-carousel .carousel-item img {
  width: 100%;
  height: 100%;
}
.xtx-carousel .carousel-indicator {
  position: absolute;
  left: 0;
  bottom: 20px;
  z-index: 2;
  width: 100%;
  text-align: center;
}
.xtx-carousel .carousel-indicator span {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
}
.xtx-carousel .carousel-indicator span ~ span {
  margin-left: 12px;
}
.xtx-carousel .carousel-indicator span.active {
  background: #fff;
}
.xtx-carousel .carousel-btn {
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 228px;
  z-index: 2;
  text-align: center;
  line-height: 44px;
  opacity: 0;
  transition: all 0.5s;
}
.xtx-carousel .carousel-btn.prev {
  left: 20px;
}
.xtx-carousel .carousel-btn.next {
  right: 20px;
}
.xtx-carousel:hover .carousel-btn {
  opacity: 1;
}
```

* **Step.3：将轮播图组件注册为应用级全局组件**

```js
import Carousel from "./Carousel.vue";

export default {
  install (app) {
    app.component("Carousel", Carousel)
  }
}
```

* **Step.4：在入口文件main中挂载**

```js
import { createApp } from "vue";

import App from "./App.vue";

import Carousel from "./components/Carousel/Carousel";

app.use(Carousel)

app.mount("#app");
```

* **Step.5：创建 `HomeBanner` 组件，在该组件中调用轮播图组件**

```html
<template>
  <div class="home-banner">
    <Carousel />
  </div>
</template>
```

```html
<style scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
.home-banner .xtx-carousel :deep(.carousel-btn.prev) {
  left: 270px;
}
.home-banner .xtx-carousel :deep(.carousel-indicator) {
  padding-left: 250px;
}
</style>
```

* **Step.6：在 `Home`组件中调用 `HomeBanner` 组件, 实现静态轮播图结构展示**

```html
<script setup>
import Layout from "@/components/Layout/Layout.vue";
import HomeCategory from "../../components/HomeCategory/HomeCategory.vue";
import HomeBanner from "../../components/HomeBanner/HomeBanner.vue";
</script>

<template>
  <Layout>
    <div class="container">
      <HomeCategory />
      <HomeBanner/>
    </div>
  </Layout>
</template>

```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
