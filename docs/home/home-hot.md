# 实现人气推荐

::: tip 目标
这一小节，我们的目标是实现渲染人气推荐组件，示例如下:
![hot](./images/107.png)
:::

::: warning 步骤

1. 创建用于获取人气推荐的 API 函数
2. 创建人气推荐组件实现基础布局及样式
3. 在首页组件中调用人气推荐组件
4. 获取人气推荐数据
5. 渲染人气推荐数据至模板
:::

::: info 体验

* **Step.1：创建用于获取人气推荐的 API 函数**

```js
/**
 * 获取人气推荐
 * @return {Promise<{result: Array<hotGoods>}>}
 */
export function readHotProduct() {
  return request.get("/home/hot");
}
```

* **Step.2：创建人气推荐组件实现基础布局及样式**

```html
<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
      <li>
        <RouterLink to="/">
          <img
            src="https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg"
            alt=""
          />
          <p class="name">特惠推荐</p>
          <p class="desc">它们最实惠</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>
```

```css
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
}

.goods-list li {
  width: 306px;
  height: 406px;
  transition: all .5s;
}

.goods-list li:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.goods-list li img {
  width: 306px;
  height: 306px;
}

.goods-list li p {
  font-size: 22px;
  padding-top: 12px;
  text-align: center;
}

.goods-list li .desc {
  color: #999;
  font-size: 18px;
}
```

* **Step.3：在首页组件中调用人气推荐组件**

```html
<script setup>
import Layout from "@/components/Layout/Layout.vue";
import HomeCategory from "../../components/HomeCategory/HomeCategory.vue";
import HomeBanner from "../../components/HomeBanner/HomeBanner.vue";
import HomeNew from "../../components/HomeNew/HomeNew.vue";
import HomeHot from "../../components/HomeHot/HomeHot.vue";
</script>

<template>
  <Layout>
    <div class="container">
      <HomeCategory />
      <HomeBanner />
    </div>

    <HomeNew />
    <HomeHot />
  </Layout>
</template>

```

* **Step.4：获取人气推荐数据**

```js
import { ref } from "vue";
import { readHotProduct } from "../../api/homeAPI"

export const useHotProduct = () => {
  const hotList = ref(null);
  readHotProduct().then(({ data: res, status: status }) => {
    if (status === 200) {
      hotList.value = res.result;
    }
  });

  return { hotList }
}
```

```html
<script setup>
import HomePanel from '../HomePanel/HomePanel.vue';
import { useHotProduct } from "./useHomeHot"
const { hotList } = useHotProduct()
</script>
```

* **Step.5：渲染人气推荐数据至模板**

```html
<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list" v-if="hotList">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" :alt="item.title" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
