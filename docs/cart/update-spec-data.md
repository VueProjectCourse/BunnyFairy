# 购物车-规格数据修改-未登录

::: tip 目标
这一小节，我们的目标是实现购物车页面中规格数据的修改
:::

::: warning 步骤

1. 获取并临时存储用户选择的新的规格数据
2. 将用户选择的规格数据通过 action 方法提交到 store 中
3. 在 store 中创建用于修改商品规格数据的 action 方法
:::

::: info 体验

* **Step.1：获取并临时存储用户选择的新的规格数据**

```html
<GoodsSku @on-spec-changed="onSpecChanged" />
```

```js
// 存储用户选择的新的商品规格
let userSelectedNewSku = null;
// 监听规格信息变化
const onSpecChanged = (sku) => {
  userSelectedNewSku = sku;
};
```

* **Step.2：将用户选择的规格数据通过 action 方法提交到 store 中**

```html
 <GoodsSku
  v-if="!loadingSku && specsAndSkus"
  :skuId="skuId"
  :specs="specsAndSkus.specs"
  :skus="specsAndSkus.skus"
  @on-spec-changed="onSpecChanged"
/>
<Button
  @click="submitSku"
  v-if="specsAndSkus"
  type="primary"
  size="mini"
  style="margin-left: 60px"
>
  确定
</Button>
```

```js
const submitSku = () => {
  hide();
  // 如果用户没有重新选择规格, 或者用户选择了规格, 但是选择的规格和之前是一样的
  if (
    !userSelectedNewSku ||
    (userSelectedNewSku && userSelectedNewSku.skuId === props.skuId)
  ) {
    // 用户提示
    Message({ type: "warn", text: "商品规格信息没有发生变化" });
    return;
  }
  cartStore.updateGoodsOfCartBySkuChanged({
    oldSkuId: props.skuId,
    userSelectedNewSku,
  });
};
```

* **Step.3：在 store 中创建用于修改商品规格数据的 action 方法**

```js
  // 商品规格信息发生变化, 更新商品信息
  updateGoodsOfCartBySkuChanged({ oldSkuId, userSelectedNewSku }) {
    const userStore = useUserStore();
    // 判断用户是否登陆
    if (userStore.profile.token) {
      // 如果登陆
    } else {
      // 如果没有登陆怎么办
      // 先根据旧的 skuId 查找商品, 根据旧商品生成新商品, 删除旧商品, 插入新商品
      const oldGoods = this.list.find((item) => item.skuId === oldSkuId);
      const newGoods = {
        ...oldGoods,
        skuId: userSelectedNewSku.skuId,
        stock: userSelectedNewSku.inventory,
        oldPrice: userSelectedNewSku.oldPrice,
        nowPrice: userSelectedNewSku.price,
        attrsText: userSelectedNewSku.attrsText,
      };
      this.deleteGoodsOfCartBySkuId(oldGoods);
      this.addGoodsToCart(newGoods);
    }
  },
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
