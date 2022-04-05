# 顶部通栏布局

::: tip 目标
这一小节，我们的目标是实现顶部通栏的基础布局

如下图:
![topnav](./images/24.png)
:::

::: warning 步骤

1. 引入字体图标库
2. 在 `AppTopNav` 组件中编写布局代码
3. 在 `AppTopNav` 组件中编写样式代码
4. 根据当前登录状态切换显示用户名和退出登录
:::

::: info 体验

* **Step.1：引入字体图标库**

```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
```

* **Step.2：在 `AppTopNav` 组件中加入如下布局代码**

```html
<template>
  <nav class="app-top-nav">
    <div class="container">
      <ul>
        <li>
          <a href="javascript:"><i class="iconfont icon-user"></i>周杰伦</a>
        </li>
        <li><a href="javascript:">退出登录</a></li>
        <li><a href="javascript:">请先登录</a></li>
        <li><a href="javascript:">免费注册</a></li>
        <li><a href="javascript:">我的订单</a></li>
        <li><a href="javascript:">会员中心</a></li>
        <li><a href="javascript:">帮助中心</a></li>
        <li><a href="javascript:">关于我们</a></li>
        <li>
          <a href="javascript:"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
```

* **Step.3：在 `AppTopNav` 组件中编写样式代码**

```css
@import "@/assets/styles/base.css";
.app-top-nav {
  background: #333;
}

.app-top-nav ul {
  display: flex;
  height: 53px;
  justify-content: flex-end;
  align-items: center;
}

.app-top-nav ul a {
  padding: 0 15px;
  color: #cdcdcd;
  line-height: 1;
  display: inline-block;
}

.app-top-nav ul a:hover {
  color: var(--theme-color);
}

.app-top-nav li ~ li a {
  border-left: 2px solid #666;
}

.app-top-nav ul i {
  font-size: 14px;
  margin-right: 2px;
}
```

* **Step.4：根据当前登录状态切换显示用户名和退出登录**

```js
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
