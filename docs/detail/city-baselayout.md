# 城市选择组件-基础布局

::: tip 目标
这一小节，我们的目标是 创建城市选择组件, 实现基础布局

示例如下:
![city-baselayout](./images/39.png)
:::

::: warning 步骤

1. 在城市选择组件(`City`)中，编写布局代码
2. 在城市选择组件(`City`)中，编写样式代码
3. 在 `GoodsInfo` 组件中调用 `City` 组件
4. 实现组件内部弹框的显示隐藏逻辑
:::

::: info 体验

* **Step.1：在城市选择组件(`City`)中，编写布局代码**

```html
<template>
  <div class="xtx-city">
    <div class="select">
      <span class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option">
      <span class="ellipsis" v-for="i in 24" :key="i">北京市</span>
    </div>
  </div>
</template>
```

* **Step.2：在城市选择组件(`City`)中，编写样式代码**

```css
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
}
.xtx-city .select {
  border: 1px solid #e4e4e4;
  height: 30px;
  padding: 0 5px;
  line-height: 28px;
  cursor: pointer;
}
.xtx-city .select.active {
  background: #fff;
}
.xtx-city .select .placeholder {
  color: #999;
}
.xtx-city .select .value {
  color: #666;
  font-size: 12px;
}
.xtx-city .select i {
  font-size: 12px;
  margin-left: 5px;
}
.xtx-city .option {
  width: 542px;
  border: 1px solid #e4e4e4;
  position: absolute;
  left: 0;
  top: 29px;
  background: #fff;
  min-height: 30px;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.xtx-city .option > span {
  width: 130px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 0 3px;
}
.xtx-city .option > span:hover {
  background: #f5f5f5;
}

.xtx-city .option .loading {
  height: 290px;
  width: 100%;
  background: url(@/assets/images/loading.gif) no-repeat center;
}
```

* **Step.3：在 `GoodsInfo` 组件中调用 `City` 组件**

```html
<dl>
  <dt>配送</dt>
  <dd>至 <City /></dd>
</dl>
```

* **Step.4：实现组件内部弹框的显示隐藏逻辑**

```js
// 控制下拉菜单是否显示
const visible = ref(false);
// 用于获取下拉框元素
const target = ref(null);
// 显示下拉菜单
const show = () => {
  visible.value = true;
};
// 隐藏下拉菜单
const hide = () => {
  visible.value = false;
};
// 切换下拉菜单的显示和隐藏
const toggle = () => {
  visible.value ? hide() : show();
};
// 在下拉框元素外面点击时
onClickOutside(target, () => {
  // 隐藏下拉框
  hide();
});
```

```html
<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="toggle" :class="{ active: visible }"></div>
    <div class="option" v-if="visible"></div>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
