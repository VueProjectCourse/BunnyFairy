# 一级分类-轮播图

::: tip 目标
这一小节，我们的目标是实现一级分类页面的轮播图

示例如下:
![topcate-carousel](./images/113.png)
:::

::: warning 步骤

1. 在`TopCategory`组件中调用`Carousel`组件
2. 在`TopCategory`组件的JavaScript代码中请求轮播图数据
3. 渲染轮播图，传递所需参数
:::

::: info 体验

* **Step.1：在`TopCategory`组件中调用`Carousel`组件**

  ```html
  <template>
    <Layout>
      <div class="container top-category">
        <Bread>
          <!-- ...省略代码 -->
        </Bread>

        <Carousel></Carousel>
      </div>
    </Layout>
  </template>
  ```

* **Step.2：在`TopCategory`组件的JavaScript代码中请求轮播图数据**

  ```js
  export const useTopCateBanner = () => {
    // 存储轮播图数据
    const carouselList = ref(null);
    // 获取轮播图数据
    readBanners(2).then(({ data: res, status: status }) => {
      if (status === 200) {
        carouselList.value = res.result;
      }
    });

    return { carouselList }
  }
  ```

* **Step.3：渲染轮播图，传递所需参数**

  ```html
  <script setup>
  import Layout from "../../components/Layout/Layout.vue"
  import { useBread, useTopCateBanner } from "./useTopCategory"
  const { topCate } = useBread();
  const { carouselList } = useTopCateBanner();

  </script>

  <template>
    <Layout>
      <div class="container top-category">
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <Transition name="fade-right" mode="out-in">
            <BreadItem :key="topCate?.id" :path="`/category/${topCate?.id}`">{{ topCate?.name }}</BreadItem>
          </Transition>
        </Bread>

        <Carousel v-if="carouselList"  :auto="true" :carousel="carouselList" :style="{ height: '500px' }"></Carousel>
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
