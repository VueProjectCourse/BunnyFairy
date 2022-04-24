# 评价组件-数据排序与筛选

::: tip 目标
这一小节，我们的目标是实现评价列表数据的筛选与排序
:::

::: warning 步骤

1. 收集用户选择的筛选条件和排序条件
2. 检测筛选条件变化重新获取评价列表数据
3. 为排序按钮添加选中效果
:::

::: info 体验

* **Step.1：收集用户选择的筛选条件和排序条件**

```js
// 筛选参数
export const useReqParams = () => {
  const reqParams = ref({
    page: 1,
    hasPicture: null,
    tag: "",
    // praiseCount 最热
    // createTime 最新
    sortField: "",
  });

  const setReqParams = (params) => {
    // 如果用户选择的是评价标签,单独处理
    if (params.tag) {
      // 如果用户选择的是有图
      if (params.tag === "有图") {
        // 将 hasPicture 设置为true
        reqParams.value.hasPicture = true;
      } else {
        // 用户选择的不是有图， 将hasPicture设置为false
        reqParams.value.hasPicture = false;
        // 如果用户选择的是全部
        if (reqParams.value.tag === "全部评价") {
          // 将tag设置为空字符串
          reqParams.value.tag = "";
        } else {
          // 其他标签，用户选什么设置什么
          reqParams.value.tag = params.tag;
        }
      }
    } else {
      // 排序选项
      reqParams.value = { ...reqParams.value, ...params };
    }

    // 当筛选条件发生变化后重置页码
    reqParams.value.page = 1;
  };
```

* **Step.2：检测筛选条件变化重新获取评价列表数据**

```js
watchEffect(() => {
  setCommentList(route.params.id, reqParams.value);
});
```

* **Step.3：为排序按钮添加选中效果**

```html
<div class="sort">
      <span>排序：</span>
      <a
        href="javascript:"
        @click="setReqParams({ sortField: '' })"
        :class="{ active: reqParams.sortField === '' }"
        >默认</a
      >
      <a
        href="javascript:"
        @click="setReqParams({ sortField: 'createTime' })"
        :class="{ active: reqParams.sortField === 'createTime' }"
        >最新</a
      >
      <a
        href="javascript:"
        @click="setReqParams({ sortField: 'praiseCount' })"
        :class="{ active: reqParams.sortField === 'praiseCount' }"
        >最热</a
      >
    </div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
