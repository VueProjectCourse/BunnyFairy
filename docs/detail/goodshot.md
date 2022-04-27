# 热榜组件

::: tip 目标
这一小节，我们的目标是实现热榜组件数据渲染
:::

::: warning 步骤

1. 创建热榜组件, 实现基础布局
2. 在商品详情页页面组件中调用热榜组件
3. 创建用于获取热榜数据的 API 函数
4. 在商品详情页面组件中调用热榜组件时传递榜单类型, 用以显示标题和数据获取
5. 在热销组件中获取并渲染热销商品数据
:::

::: info 体验

* **Step.1：创建热榜组件, 实现基础布局**

```html
<template>
  <div class="goods-hot">
    <h3>24小时热榜</h3>
    <GoodsItem v-for="item in 3" :key="item"></GoodsItem>
  </div>
</template>

```

```css
.goods-hot h3 {
  height: 70px;
  background: var(--help-color);
  color: #fff;
  font-size: 18px;
  line-height: 70px;
  padding-left: 25px;
  margin-bottom: 10px;
  font-weight: normal;
}
.goods-hot :deep(.goods-item) {
  background: #fff;
  width: 100%;
  margin-bottom: 10px;
}
.goods-hot :deep(.goods-item) img {
  width: 200px;
  height: 200px;
}
.goods-hot :deep(.goods-item) p {
  margin: 0 10px;
}
.goods-hot :deep(.goods-item):hover {
  transform: none;
  box-shadow: none;
}
```

* **Step.2：在商品详情页页面组件中调用热榜组件**

```html
<!-- GoodsDetail -->
<div class="goods-aside">
  <GoodsHot />
</div>
```

* **Step.3：创建用于获取热榜数据的 API 函数**

```js
**
 * 获取热销商品
 * @param id 商品ID, 根据该商品推荐其同类的热销商品
 * @param limit 获取多少条商品数据
 * @param type 热销类型, 1为24小时，2为周榜，3为总榜，默认为1
 * @return {AxiosPromise}
 */
export function getHotGoodsApi({ id, limit = 3, type = 1 }) {
  return request("/goods/hot", "get", { id, limit, type });
}
```

* **Step.4：在商品详情页面组件中调用热榜组件时传递榜单类型, 用以显示标题和数据获取**

```html
<div class="goods-aside">
  <GoodsHot :type="1" />
  <GoodsHot :type="2" />
  <GoodsHot :type="3" />
</div>
```

```js
defineProps({
    type: {
      type: Number,
      default: 1,
    },
})
  
```

* **Step.5：在热销组件中获取并渲染热销商品数据**

```js
import { ref } from "vue";
import { readHotGoods } from "@/api/detailAPI";

export const useHotGoods = () => {
  // 声明bannerList数组 用来存储请求来的数据
  const hotList = ref(null);

  const setHostList = (id, type) => {
    // 调用接口请求数据
    readHotGoods(id, type).then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        hotList.value = res.result;
      }
    });
  };

  return { hotList, setHostList };
};
```

```html
<script setup>
import { onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import GoodsItem from "../../TopCategory/GoodsItem/GoodsItem.vue";
import { useHotGoods } from "./GoodsHot";
const route = useRoute();
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
});

const { hotList, setHostList } = useHotGoods();

onMounted(() => {
  setHostList(route.params.id, props.type);
});

onBeforeRouteUpdate((to) => {
  setHostList(to.params.id, props.type);
});
</script>
<template>
  <div class="goods-hot">
    <h3 v-if="type == 1">24小时热销榜</h3>
    <h3 v-else-if="type == 2">周热销榜</h3>
    <h3 v-else>总热销榜</h3>
    <GoodsItem v-for="item in hotList" :key="item.id" :goods="item"></GoodsItem>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
