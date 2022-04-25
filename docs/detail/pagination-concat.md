# 分页组件-关联评论列表

::: tip 目标
这一小节，我们的目标是在评论列表组件中使用分页组件, 实现数据分页
:::

::: warning 步骤

1. 在调用分页组件时传递当前页和总数据条数
2. 当前页实现双向数据绑定
3. 总数据条数映射为计算属性

:::

::: info 体验

* **Step.1：在调用分页组件时传递当前页和总数据条数**

```html
<XtxPagination
  v-if="commentList.pages > 1"
  v-model:page="reqParams.page"
  :pageSize="reqParams.pageSize"
  :count="commentList.counts"
/>
```

* **Step.2：当前页实现双向数据绑定**

```js
export default {
  name: "XtxPagination",
  props: {
    page: {
      type: Number,
      default: 1,
    },
    count: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    // 当前页
    const currentPage = useVModel(props, "page", emit);
    // 总数据条数
    const totalCount = computed(() => props.count);
    // 每页显示数据条数
    const pageSize = computed(() => props.pageSize);
  },
};
```

* **Step.3：总数据条数映射为计算属性**

```js
export default {
  name: "XtxPagination",
  props: {
    page: {
      type: Number,
      default: 1,
    },
    count: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    // 当前页
    const currentPage = useVModel(props, "page", emit);
    // 总数据条数
    const totalCount = computed(() => props.count);
    // 每页显示数据条数
    const pageSize = computed(() => props.pageSize);
  },
};
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
