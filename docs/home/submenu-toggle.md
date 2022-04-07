# 导航二级菜单显示隐藏

::: tip 目标
这一小节，我们的目标是使用 JavaScript 的方式控制导航二级菜单的显示和隐藏。

为什么要这样做呢？

目前导航下拉菜单的显示和隐藏是通过样式的方式控制的, 通过样式控制存在一个问题, 就是当点击链接跳转后，导航下拉菜单不隐藏，所以此处我们要通过 JavaScript 控制二级分类菜单的显示和隐藏。
:::

::: warning 步骤

1. 移除通过css方式控制显示隐藏的代码
2. 添加操作类名的方式控制显示隐藏的代码
3. 在store中为每个一级分类添加open属性
4. 在store中添加用于控制导航下拉菜单显示隐藏的方法
5. 为 `.layer` 元素动态绑定 `open` 类名
6. 在组件中为元素添加事件控制下拉菜单的显示和隐藏
:::

::: info 体验

* **Step.1：移除通过css方式控制显示隐藏的代码**

```css
/* .app-header-nav > li:hover > .layer {
  height: 132px;
  opacity: 1;
} */
```

* **Step.2：添加操作类名的方式控制显示隐藏的代码**

```css
.layer.open {
  height: 132px;
  opacity: 1;
}
```

* **Step.3：在store中为每个一级分类添加open属性**

```js
// 初始化分类数据
async initCategories() {
  const { data: res, status: status } = await readCategories();
  res.result.forEach((category) => (category.open = false))
  if (status === 200) {
    this.cateList = res.result;
  }
},
```

* **Step.4：在store中添加用于控制导航下拉菜单显示隐藏的方法**

```js
// 控制导航下拉菜单的显示
open(id){
  const target = this.cateList.find((item)=> item.id === id);
  target.open = true;
},
// 控制导航下拉菜单的隐藏
close(id){
  const target = this.cateList.find((item)=> item.id === id);
  target.open = false;
}
```

* **Step.5：为 `.layer` 元素动态绑定 `open` 类名**

```html
<div class="layer" :class="{open: item.open}"></div>
```

* **Step.6：在组件中为元素添加事件控制下拉菜单的显示和隐藏**

```html
<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li
      v-for="item in cateList"
      :key="item.id"
      @mouseenter="cateStore.open(item.id)"
      @mouseleave="cateStore.close(item.id)"
    >
      <!-- <a href="#">{{item.name}}</a> -->
      <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
      <div class="layer" :class="{ open: item.open }">
        <ul>
          <li v-for="subitem in item.children" :key="subitem.id" @click="cateStore.close(item.id)">
            <RouterLink :to="`/category/sub/${subitem.id}`">
              <img :src="subitem.picture" :alt="subitem.name" />
              <p>{{ subitem.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
