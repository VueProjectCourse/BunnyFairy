# 渲染面包屑导航

::: tip 目标
这一小节，我们的目标是渲染面包屑导航组件

示例如下:
![breadcrumb](./images/124.png)
:::

::: warning 步骤

1. 创建用于获取商品详细信息的API方法
2. 在商品详情页面组件中调用 `getGoodsDetailById` 方法获取商品详情信息
3. 根据商品详情信息渲染面包屑组件
:::

::: info 体验

* **Step.1：创建用于获取商品详细信息的API方法**

```js
/**
 * 根据商品ID获取商品详情信息
 * @param id 商品ID
 * @return {Promise}
 */
export const readGoodsDetailById = (id) => {
  return request.get("/goods", {
    params: {
      id,
    },
  });
};
```

* **Step.2：在商品详情页面组件中调用 `getGoodsDetailById` 方法获取商品详情信息**

```js
// useDetail.js
// 商品详情
import { ref } from "vue";
import { readGoodsDetailById } from "../../api/detailAPI";
// 商品详情状态
export const goodsDetail = ref(null);
// 声明设置商品详情状态方法
export const setGoodsDetail = (id) => {
  readGoodsDetailById(id).then(({ data: res, status: status }) => {
    if (status === 200) {
      // 把数据赋值给bannerList
      goodsDetail.value = res.result;
    }
  });
};

```

```js
// Detail.vue
import { goodsDetail, setGoodsDetail } from "./useDetail";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

const route = useRoute();
onMounted(() => {
  setGoodsDetail(route.params.id);
});


onBeforeRouteUpdate((to) => {
  setGoodsDetail(to.params.id);
});
```

* **Step.3：根据商品详情信息渲染面包屑组件**

```html
<Bread>
  <BreadItem path="/">
    首页
  </BreadItem>
  <BreadItem :path="`/category/${goodsDetail.categories[1].id}`">
    {{ goodsDetail.categories[1].name }}
  </BreadItem>
  <BreadItem :path="`/category/sub/${goodsDetail.categories[0].id}`">
    {{ goodsDetail.categories[0].name }}
  </BreadItem>
  <BreadItem>
    {{ goodsDetail.name }}
  </BreadItem>
</Bread>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
