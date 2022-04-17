# 二级分类-筛选组件-骨架屏

::: tip 目标
这一小节，我们的目标是实现在加载筛选数据时的骨架屏效果
:::

::: warning 步骤

1. 添加骨架屏结构和样式
2. 添加筛选数据加载状态
3. 通过状态控制骨架屏结构的渲染与销毁
:::

::: info 体验

* **Step.1：添加骨架屏结构和样式**

```html
<div class="sub-filter" >
  <Skeleton class="item" width="800px" height="40px" />
  <Skeleton class="item" width="800px" height="40px" />
  <Skeleton class="item" width="600px" height="40px" />
  <Skeleton class="item" width="600px" height="40px" />
  <Skeleton class="item" width="600px" height="40px" />
</div>
```

```css
.xtx-skeleton {
  padding: 10px 0;
}
```

* **Step.2：添加筛选数据加载状态**

  当从一个二级分类切换到另一个二级分类时, 此时如果只判断 filters 是否有值的话, 那么此时 filters 是一定有值的, 但是在切换到另一个二级分类的过程中, 程序确实又向服务器端发送了请求获取了最新的筛选条件数据, 此时是需要显示骨架屏的, 但 filters 一直有数据骨架屏显示不出来, 所以此处不能只判断 filters, 所以此处加入了加载状态 `filtersLoading`

  ```js
  export const filtersLoading = ref(false);
  export const selectedFilters = ref({
    brandId: null,
    attrs: [],
  });
  export const readFilter = (paramId) => {
    filtersLoading.value = true;
    readFilterById(paramId).then(({ data: res, status: status }) => {
      if (status === 200) {
        // console.log(res.result);
        filtersLoading.value = false;
        res.result.brands.unshift({ id: null, name: "全部" });
  
        res.result.selectedBrandId = null;
  
        res.result.saleProperties.forEach((item) => {
          item.properties.unshift({ id: null, name: "全部" });
          item.selectedFilterName = "全部";
        });
        filters.value = res.result;
      }
    });
    return { filters };
  };

  ```

* **Step.3：通过状态控制骨架屏结构的渲染与销毁**

  ```html
  <div class="sub-filter" v-if="filters && !filtersLoading"></div>
  <div class="sub-filter" v-else></div>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
