# 基础布局

::: tip 目标
这一小节，我们的目标是完成首页页面组件的渲染
:::

::: warning 步骤

1. 在views文件夹中创建首页页面组件
2. 在首页页面使用布局模板页面
3. 配置首页页面组件的路由规则
:::

::: info 体验

* **Step.1：在views文件夹中创建首页页面组件**
* **Step.2：在首页页面使用布局模板页面**

```html
<script setup>
import AppLayout from "@/components/AppLayout/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <div>首页</div>
  </AppLayout>
</template>
```

* **Step.3：配置首页页面组件的路由规则**

```js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
const routes = [
  // 配置路由
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

```

:::
