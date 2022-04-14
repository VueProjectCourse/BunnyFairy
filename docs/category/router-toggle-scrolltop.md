# 路由切换页面至顶部

::: tip 目标
这一小节，我们的目标是实现页面组件切换时, 滚动条重置回顶部

示例如下:
![scrollBehavior](./images/33.gif)
:::

::: warning 步骤

1. 通过路由配置指定滚动条的重置功能
:::

::: info 体验

* **Step.1：通过路由配置指定滚动条的重置功能**

```js
// /src/route/index.js

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
});
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
