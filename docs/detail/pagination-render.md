# 分页组件-渲染分页数据

::: tip 目标
这一小节，我们的目标是实现分页数据的渲染逻辑
:::

::: warning 步骤

1. 分页组件每个按钮的逻辑分析
2. 实现分页数据的渲染
:::

::: info 体验

* **Step.1：分页组件每个按钮的逻辑分析**

  * 上一页：当前页大于1时上一页可以点击，否则禁用
  * 下一页：当前页小于总页数下一页可以点击，否则禁用
  * 上一页后面的省略号：当前显示着的第一个页码大于1时显示，否则隐藏
  * 下一页前面的省略号：当前显示着的最后一个页码小于总页数时显示，否则隐藏

* **Step.2：实现分页数据的渲染**

```html
<template>
  <div class="xtx-pagination">
    <a href="javascript:" @click="currentPage--" v-if="currentPage > 1"
      >上一页</a
    >
    <span v-if="pageInfo.start > 1">...</span>
    <a
      href="javascript:"
      @click="currentPage = page"
      :class="{ active: page === currentPage }"
      v-for="page in pageInfo.pageButtons"
      :key="page"
      >{{ page }}</a
    >
    <span v-if="pageInfo.start < pageInfo.totalPage">...</span>
    <a
      href="javascript:"
      @click="currentPage++"
      v-if="currentPage < pageInfo.totalPage"
      >下一页</a
    >
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
