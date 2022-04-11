# 封装面板组件

::: tip 目标
这一小节，我们的目标是 实现面板组件的封装,示例如下:
![panel](./images/30.png)
:::

::: warning 步骤

1. 创建 `HomePanel` 面板组件,并添加布局代码
2. 在`HomePanel`添加样式代码
3. 将 `查看更多`(More) 封装为单独组件，添加布局代码
4. 在`查看更多`组件中添加样式代码
5. 全局注册查看更多组件
:::

::: info 体验

* **Step.1：创建 `HomePanel` 面板组件,并添加布局代码**

```html
<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
})
</script>
<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
        <slot name="right"></slot>
      </div>
      <slot name="default"></slot>
    </div>
  </div>
</template>
```

* **Step.2：在`HomePanel`添加样式代码**

```css
.home-panel {
  background-color: #fff;
}

.head {
  padding: 40px 0;
  display: flex;
  align-items: flex-end;
}

.head h3 {
  flex: 1;
  font-size: 32px;
  font-weight: normal;
  margin-left: 6px;
  height: 35px;
  line-height: 35px;
}

.head h3 small {
  font-size: 16px;
  color: #999;
  margin-left: 20px;
}
```

* **Step.3：将 `查看更多`(More) 封装为单独组件，添加布局代码**

```html
<script setup>
defineProps({
  path: {
    type: String,
    default: "/",
  },
})
</script>

<template>
  <RouterLink :to="path" class="xtx-more">
    <span>查看全部</span>
    <i class="iconfont icon-angle-right"></i>
  </RouterLink>
</template>
```

* **Step.4：在`查看更多`组件中添加样式代码**

```css
@import "@/assets/styles/variable.css";

.xtx-more {
  margin-bottom: 2px;
}

.xtx-more span {
  font-size: 16px;
  vertical-align: middle;
  margin-right: 4px;
  color: #999;
}

.xtx-more i {
  font-size: 14px;
  vertical-align: middle;
  position: relative;
  top: 2px;
  color: #ccc;
}

.xtx-more:hover span,
.xtx-more:hover i {
  color: var(--theme-color);
}
```

* **Step.5：全局注册查看更多组件**

```js
import More from "@/components/More/More.vue";

export default {
  install (app) {
    app.component("More", More);
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
