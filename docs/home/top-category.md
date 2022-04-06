# 创建一级分类页面

::: tip 目标

这一小节，我们的目标是创建一级分类页面, 配置一级分类页面的路由规则

:::

::: warning 步骤

1. 在`views`文件夹中，创建一级分类组件(TopCategory)
2. 配置一级分类路由
3. 在导航组件(`HeaderNav`)中添加一级分类链接
:::

::: info 体验

* **Step.1：在`views`文件夹中，创建一级分类组件(TopCategory)**

```html
<script setup>
  import AppLayout from "../../components/AppLayout/AppLayout.vue"
</script>
<template>
  <AppLayout>
      <div>TopCategoryPage</div>
  </AppLayout>
</template>
```

* **Step.2：配置一级分类路由**

```js
const routes = [
  // 配置路由
  {
    path: "/",
    component: Home,
  },
  { path: "/category/:id", component: TopCategory },
];
```

* **Step.3：在导航组件(`HeaderNav`)中添加一级分类链接**

```html
<RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
