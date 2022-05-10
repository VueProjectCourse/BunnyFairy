# 购物车-全选-未登录

::: tip 目标
这一小节，我们的目标是实现全选、全不选功能
:::

::: warning 步骤

1. 计算全选按钮状态
2. 为全选按钮绑定状态
3. 为全选按钮添加数据更新事件
4. 在 vuex 中接收全选按钮的最新值, 将值同步到购物车列表中的商品.
:::

::: info 体验

* **Step.1：计算全选按钮状态**

```js
// 全选、全不选按钮的状态
selectAllButtonStatus() {
  // 有效商品的数量和选中商品的数量相等意味着所有有效商品已选中
  // 并且有效商品数量必须大于 0
  return (
    this.effectiveGoodsList.length > 0 &&
    this.userSelectedGoodsList.length === this.effectiveGoodsList.length
  );
},
```

* **Step.2：为全选按钮绑定状态**

```html
 <th>
  <Checkbox
    :modelValue="selectAllButtonStatus"
    >全选</Checkbox
  >
</th>
```

* **Step.3：为全选按钮添加数据更新事件**

```html
 <th>
  <Checkbox
    :modelValue="selectAllButtonStatus"
    @update:modelValue="cartStore.selectIsAll($event)"
    >全选</Checkbox
  >
</th>
```

* **Step.4：在 store 中接收全选按钮的最新值, 将值同步到购物车列表中的商品**

```js
selectIsAll(isSelected) {
    const userStore = useUserStore();
    // 判断用户是否登陆
    if (userStore.profile.token) {
      // 如果登陆
    } else {
      // 如果没有登陆怎么办
      this.list.forEach((item) => {
        const index = this.list.findIndex(
          (subitem) => subitem.skuId === item.skuId
        );
        // 更新商品
        this.list[index] = {
          ...this.list[index],
          selected: isSelected,
        };
      });
    }
},
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
