# 分页组件-生成页码数据

::: tip 目标
这一小节，我们的目标是计算页面中显示的页码

示例如下:

![data](./images/51.png)
:::

::: warning 步骤

1. 创建分页组件，编写布局代码
2. 在分页组件中，编写样式代码
3. 在评论列表组件中调用分页组件
4. 根据页码计算逻辑, 计算页码, 生成页码数组
:::

::: info 体验

* **Step.1：创建分页组件，编写布局代码**

```html
<template>
  <div class="xtx-pagination">
    <a href="javascript:">上一页</a>
    <span>...</span>
    <a href="javascript:">3</a>
    <a href="javascript:">4</a>
    <a href="javascript:" class="active">5</a>
    <a href="javascript:">6</a>
    <a href="javascript:">7</a>
    <span>...</span>
    <a href="javascript:">下一页</a>
  </div>
</template>
```

* **Step.2：在分页组件中，编写样式代码**

```css
@import "@/assets/styles/variable.css";
.xtx-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
}
.xtx-pagination > a {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  margin-right: 10px;
}
.xtx-pagination > a:hover {
  color: var(--primary-color);
}
.xtx-pagination > a.active {
  background: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
}
.xtx-pagination > a.disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
.xtx-pagination > a.disabled:hover {
  color: #333;
}
.xtx-pagination > span {
  margin-right: 10px;
}
```

* **Step.3：在评论列表组件中调用分页组件**

```html
<div class="list"></div>
<Pagination />
```

* **Step.4：根据页码计算逻辑, 计算页码, 生成页码数组**

```js
import { useVModel } from "@vueuse/core";
import { computed } from "vue";

const props = defineProps({
  // 当前页
  page: {
    type: Number,
    default: 1,
  },
  // 总数据条数
  count: {
    type: Number,
    default: 1,
  },
  // 每页显示数据条数
  pageSize: {
    type: Number,
    default: 10,
  },
});
const emit = defineEmits(["update:page"]);
// 当前页
const currentPage = useVModel(props, "page", emit);
// 总数据条数
const totalCount = computed(() => props.count);
// 每页显示数据条数
const pageSize = computed(() => props.pageSize);

// 显示页码按钮的个数
const pageButtonNum = 5;

// 页码偏移量计算
const pageOffset = Math.floor(pageButtonNum / 2); // 2

const pageInfo = computed(() => {

  let start = currentPage.value - pageOffset; // 3

  let end = start + pageButtonNum - 1;

  let totalPage = Math.ceil(totalCount.value / pageSize.value);

  if (start < 1) {
    start = 1;

    let tmp = start + pageButtonNum - 1;

     end = tmp > totalPage ? totalPage : tmp;
  }

  if (end > totalPage) {

    end = totalPage;

    let tmp = end - pageButtonNum + 1;
    
    start = tmp < 1 ? 1 : tmp;
  }

  let pageButtons = [];

  for (var i = start; i <= end; i++) {
    pageButtons.push(i);
  }

  return { start, end, totalPage, pageButtons };
});

```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
