# 规格组件-数据渲染与选中

::: tip 目标
这一小节，我们的目标是 实现规格组件渲染, 实现规格的选中效果
:::

::: warning 步骤

1. 根据传入的规格数据渲染规格组件
2. 为规格选项添加点击事件, 点击事件发生后更改规格的选中标识
:::

::: info 体验

* **Step.1：根据传入的规格数据渲染规格组件**

```html
<div class="goods-sku">
  <dl v-for="spec in specs" :key="spec.name">
    <dt>{{ spec.name }}</dt>
    <dd>
      <template v-for="value in spec.values" :key="value.name">
        <img v-if="value.picture" :src="value.picture" :alt="value.name" />
        <span v-else>{{ value.name }}</span>
      </template>
    </dd>
  </dl>
</div>
```

* **Step.2：为规格选项添加点击事件, 点击事件发生后更改规格的选中标识**

```html
<img @click="updateSpecSelected(spec, value)" :class="{ selected: value.selected }"/>
<span @click="updateSpecSelected(spec, value)" :class="{ selected: value.selected }"></span>
```

```js
// 更新规格的选中状态
const updateSpecSelected = (spec, value) => {
      // 如果用户点击的规格已经是选中的
      if (value.selected) {
        // 让其取消选中
        value.selected = false;
      } else {
        // 先将该规格中的所有规格取消选中
        spec.values.forEach((item) => (item.selected = false));
        // 将当前用户点击的规格设置为选中
        value.selected = true;
      }
    };
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
