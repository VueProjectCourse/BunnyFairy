# 购物车-批量删除-清空无效-未登录

::: tip 目标
这一小节，我们的目标是 实现删除选中商品功能、实现清空无效商品功能
:::

::: warning 步骤

1. 在购物车组件模板中为删除商品按钮和清空无效商品按钮添加点击事件
2. 为删除商品功能添加事件处理函数调用 action 方法实现删除操作
3. 创建用于实现删除用户选择商品和清空无效商品的 action 方法
:::

::: info 体验

* **Step.1：在购物车组件模板中为删除商品按钮和清空无效商品按钮添加点击事件**

```html
 <!-- 操作栏 -->
        <div class="action">
          <div class="batch">
            <Checkbox>全选</Checkbox>
            <a
              href="javascript:"
              @click="
                deleteGoodsOfCartByUserSelectedOrInvalid(
                  'userSelectedGoodsList'
                )
              "
              >删除商品</a
            >
            <a href="javascript:">移入收藏夹</a>
            <a
              href="javascript:"
              @click="
                deleteGoodsOfCartByUserSelectedOrInvalid('invalidGoodsList')
              "
              >清空失效商品</a
            >
          </div>
          <div class="total">
            共 {{ effectiveGoodsCount }} 件商品，已选择
            {{ userSelectedGoodsCount }} 件，商品合计：
            <span class="red">¥{{ userSelectedGoodsPrice }}</span>
            <Button type="primary">下单结算</Button>
          </div>
        </div>
```

* **Step.2：为删除商品功能添加事件处理函数调用 action 方法实现删除操作**

```js
// 删除用户选择的商品 userSelectedGoodsList、清空无效商品 invalidGoodsList
const deleteGoodsOfCartByUserSelectedOrInvalid = (flag) => {
  // 弹框提示文字
  let content = "";
  // 如果当前操作是删除用户选择的商品
  if (flag === "userSelectedGoodsList") {
    // 判断用户是否选择了商品
    if (userSelectedGoodsCount.value === 0) {
      Message({ type: "error", text: "请选择要删除的商品" });
      return;
    }
    // 设置弹框提示文字
    content = "确定要删除选中的商品吗?";
  }
  // 如果当前操作是清空无效商品
  if (flag === "invalidGoodsList") {
    // 判断当前是否有无效商品
    if (invalidGoodsList.value.length === 0) {
      // 提示
      Message({ type: "error", text: "没有无效商品" });
      return;
    }
    // 设置弹框提示文字
    content = "确定要删除无效商品吗?";
  }
  // 和用户进行确认
  Confirm({ content })
    .then(() => {
      // 执行操作
      cartStore.deleteGoodsOfCartByUserSelectedOrInvalid(flag);
    })
    .catch(() => {});
};
```

* **Step.3：创建用于实现删除用户选择商品和清空无效商品的 action 方法**

```js
// cartStore.js
// 删除用户选择的商品、清空无效商品
    deleteGoodsOfCartByUserSelectedOrInvalid(flag) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        this[flag].forEach((item) => {
          this.deleteGoodsOfCartBySkuId(item.skuId);
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
