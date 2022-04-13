# 面包屑导航概述

::: tip 目标
这一小节，我们的目标是实现面包屑导航组件, 示例如下:

![bread](./images/31.png)
:::

::: warning 步骤

1. 什么是面包屑导航
2. 面包屑导航组件实现思路
3. 面包屑导航区块的 HTML 结构
:::

::: info 体验

* **Kn.1：什么是面包屑导航**

  面包屑导航组件用于提示用户他所访问的当前位置: `首页 > 一级分类 > 二级分类 > 商品名称`

* **Kn.2：面包屑导航组件实现思路**

  ```html
  <Bread>
    <BreadItem path="/">首页</BreadItem>
    <BreadItem path="/category/1005000">居家</BreadItem>
    <BreadItem path="/category/sub/1017000">宠物食品</BreadItem>
    <BreadItem>多重口味，清煮肉罐（猫）85克*12罐</BreadItem>
  </Bread>
  ```

  1. BreadItem 组件用于渲染每一个具体的面包屑选项
  2. 在调用 BreadItem 组件时, path 属性可传可不传, 传了在内部渲染链接, 不传在内部渲染普通文本
  3. 用户所处的当前位置不加链接, 因为他已经在这个位置了，不再需要链接进行跳转
  4. Bread 组件用于重新组织布局结构, 因为并不是所有的面包屑名称后面都有 ">"

* **Kn.3：面包屑导航区块的 HTML 结构**

  ```html
  <template>
    <div class='xtx-bread'>
      <div class="xtx-bread-item">
        <RouterLink to="/">首页</RouterLink>
      </div>
      <i class="iconfont icon-angle-right"></i>
      <div class="xtx-bread-item">
        <RouterLink to="/category/10000">电器</RouterLink>
      </div>
      <i class="iconfont icon-angle-right"></i>
      <div class="xtx-bread-item">
        <span>空调</span>
      </div>
    </div>
  </template>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
