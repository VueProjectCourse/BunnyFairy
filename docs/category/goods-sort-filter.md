# 二级分类-商品排序与筛选

::: tip 目标
这一小节，我们的目标是实现商品排序功能
:::

::: warning 步骤

1. 声明 `updateReqParams` 方法, 供组件使用, 用于更新请求参数
2. 将 `updateReqParams` 方法导出, 让组件可以使用
3. 当排序条件和筛选条件发生变化时调用 `updateReqParams` 方法更新请求参数, 重新获取商品数据
:::

::: info 体验

* **Step.1：声明 `updateReqParams` 方法, 供组件使用, 用于更新请求参数**

```js
function useGoods() {
  // 用于更新请求参数
  const onFilterSortParamsChanged = (target) => {
    reqParams.value = { ...reqParams.value, ...target };
  };
  return { onFilterSortParamsChanged }
}
```

* **Step.2：将 `updateReqParams` 方法导出, 让组件可以使用**

```js
export default {
  setup() {
    const { onFilterSortParamsChanged } = useGoods();
    return { onFilterSortParamsChanged };
  },
};
```

* **Step.3：当排序条件和筛选条件发生变化时调用 `updateReqParams` 方法更新请求参数, 重新获取商品数据**

```html
<!-- 排序区块 -->
<SubSort @onSortParamsChanged="onFilterSortParamsChanged" />
<!-- 筛选区块 -->
<SubFilter @onFilterParamsChanged="onFilterSortParamsChanged" />
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
