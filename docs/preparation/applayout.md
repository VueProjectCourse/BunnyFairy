# 布局模板页面

::: tip 目标
这一小节，我们的目标是完成布局模板组件的开发...
:::

::: warning 步骤

1. 创建页面级公共组件顶部通栏
2. 创建页面级公共组件头部
3. 创建页面级公共组件底部
4. 在布局组件 `AppLayout` 中引入页面级公共路由组件
:::

::: info 体验

* **Step.1：创建页面级公共组件顶部通栏**

  ```html
  <template>
    <div>顶部通栏</div>
  </template>
  ```

* **Step.2：创建页面级公共组件头部**

  ```html
  <template>
    <div>头部</div>
  </template>
  ```

* **Step.3：创建页面级公共组件底部**

  ```html
  <template>
    <div>底部</div>
  </template>
  ```

* **Step.4：在布局组件 `AppLayout` 中引入页面级公共路由组件**

  ```html
  <script setup>
  import AppTopNav from "../AppTopNav/AppTopNav.vue";
  import AppHeader from "../AppHeader/AppHeader.vue";
  import AppFooter from "../AppFooter/AppFooter.vue";
  </script>
  <template>
    <AppTopNav />
    <AppHeader />
    <slot />
    <AppFooter />
  </template>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
