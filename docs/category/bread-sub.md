# 二级面包屑导航

::: tip 目标
这一小节，我们的目标是实现二级面包屑导航，示例如下:

```text
首页 > 居家 > 茶咖酒具
```

:::

::: warning 步骤

1. 在`SubCategory`组件中调用面包屑导航
2. 实现二级导航的筛选
3. 渲染二级面包屑导航
:::

::: info 体验

* **Step.1：在`SubCategory`组件中调用面包屑导航**

  ```html
  <Bread>
    <BreadItem path="/">首页</BreadItem>
    <BreadItem :path="`/category/1039022`">居家</BreadItem>
    <BreadItem :path="`/category/sub/232332`">茶咖酒具</BreadItem>
  </Bread>
  ```

* **Step.2：实现二级导航的筛选**

  ```js
  import { useRoute } from "vue-router"
  import { useCateStore } from "../../stores/cateStore"
  import { storeToRefs } from "pinia"
  import { ref, watchEffect } from "vue";

  export const useBread = () => {
    // 获取路由信息对象
    const route = useRoute();
    // console.log(route.params.id)
    // 获取分类信息store
    // const cateStore = useCateStore();
    const { cateList } = storeToRefs(useCateStore())
    // 当前访问分类信息
    const topCate = ref(null);
    const subCate = ref(null);

    watchEffect(()=>{
      cateList.value.forEach((item) => {
        item.children?.forEach((subitem) => {
          if (subitem.id == route.params.id) {
            topCate.value = item;
            subCate.value = subitem;
          }
        })
      })
    })

    return { topCate, subCate }
  }
  ```

* **Step.3：渲染二级面包屑导航**

  ```html
  <Bread>
    <BreadItem path="/">首页</BreadItem>
    <BreadItem :path="`/category/${topCate?.id}`">{{topCate?.name}}</BreadItem>
    <BreadItem :path="`/category/sub/${subCate?.id}`">{{subCate?.name}}</BreadItem>
  </Bread>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
