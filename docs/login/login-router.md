# 登录-配置路由规则

::: tip 目标
这一小节，我们的目标是创建登录页页面组件, 配置登录页页面组件路由规则
:::

::: warning 步骤

1. 创建登录页面组件, 实现基础布局
2. 配置登录页面的路由规则
3. 为顶部通栏中的 `请先登录` 按钮添加跳转链接
:::

::: info 体验

* **Step.1：创建登录页面组件, 实现基础布局**

```html
<template>
  <div class="page-login">Login</div>
</template>
```

* **Step.2：配置登录页面的路由规则**

```js
// route/index.js

{
  path: "/login",
  component: () => import("@/views/Login/Login.vue"),
},
```

* **Step.3：为顶部通栏中的 `请先登录` 按钮添加跳转链接**

```html
<RouterLink to="/login">请先登录</RouterLink>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
