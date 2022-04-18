# 二级分类-筛选组件-数据更新

::: tip 目标
这一小节，我们的目标是实现在二级分类页面之间跳转时进行筛选条件数据的更新
:::

::: warning 步骤

1. 为什么在二级分类页面之间跳转时筛选数据不更新
2. 实现在二级分类页面之间跳转时更新筛选条件数据
:::

::: info 体验

* **Step.1：为什么在二级分类页面之间跳转时筛选数据不更新**

```html
1. 因为只有 `setup` 方法重新执行, 重新调用获取筛选条件数据的方法以后, 程序才会向服务器端发送请求获取最新筛选数据, 而 `setup` 方法只有在组件重新渲染时才会重新执行, 当我们从一个二级分类跳转到另一个二级分类以后, 实际上组件并没有重新渲染, 所以此时页面中并没有显示最新的筛选条件数据.

2. 因为路由规则本身并没有发生变化, 只有路由规则本身发生了变化, 组件才会重新渲染, 比如从一级分类跳转到二级分类, 路由规则从 `/category/:id` 变成了 `/category/sub/:id`, 比如从首页跳转到一级分类页面, 路由规则从 `/` 变成了 `/category/:id`, 此时路由规则发生了变化, 组件才会重新渲染.

当路由在二级分类页面之间跳转时只是路由参数发生了变化, 此时路由组件是不会重新渲染的.
```

* **Step.2：实现在二级分类页面之间跳转时更新筛选条件数据**

```js
import { useRoute, onBeforeRouteUpdate } from "vue-router";

onBeforeRouteUpdate((to) => {
  readFilter(to.params.id);
});
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::