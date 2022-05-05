# 加入购物车-未登录

::: tip 目标
这一小节，我们的目标是实现将商品添加到本地购物车
:::

::: warning 步骤

1. 收集购物车中需要的当前商品信息
2. 在 store 中实现加入购物车逻辑
3. 在组件中调用 store 中的 action 方法, 实现加入购物车功能
:::

::: info 体验

* **Step.1：收集购物车中需要的当前商品信息**

```js
{
  // 商品id
  id: String,
  // 商品 skuId
  skuId: String,
  // 商品名称
  name: String,
  // 商品规格属性文字
  attrsText: String,
  // 商品图片
  picture: String,
  // 商品原价
  price: String,
  // 商品现价
  nowPrice: String,
  // 是否选中
  selected: Boolean,
  // 商品库存
  stock: Number,
  // 用户选择的商品数量
  count: Number,
  // 是否为有效商品
  isEffective: Boolean
}
```

```html
 <GoodsSku @onSkuChanged="onSkuChanged" @onSkuChangedHalf="goodsDetail.currentSkudId = null"/>
<XtxButton @click="addCart">加入购物车</XtxButton>
```

```js
const onSpecChanged = (data) => {
  // 数据回传，
  // console.log(data);
  // result.value = { ...result.value, ...data };
  result.value.price = data.price;
  result.value.oldPrice = data.oldPrice;
  result.value.inventory = data.inventory;
  result.value.currentSelectedSkuId = data.skuId;
  result.value.currentSelectedSkuText = data.specsText;
};
```

```js
const addCart = () => {
  // 判断用户是否选择了规格
  if (!result.value.currentSelectedSkuId)
    return Message({ type: "error", text: "请选择商品规格" });

  const goods = {
    // 商品id
    id: result.value.id,
    // 商品 skuId
    skuId: result.value.currentSelectedSkuId,
    // 商品名称
    name: result.value.name,
    // 商品规格属性文字
    attrsText: result.value.currentSelectedSkuText,
    // 商品图片
    picture: result.value.mainPictures[0],
    // 商品原价
    price: result.value.oldPrice,
    // 商品现价
    nowPrice: result.value.price,
    // 是否选中
    selected: true,
    // 商品库存
    stock: result.value.inventory,
    // 用户选择的商品数量
    count: count.value,
    // 如果用户选择了规格, 该商品就一定是有效商品, 因为能够选择的规格都是有库存的
    isEffective: true,
  };

};
```

* **Step.2：在 store 中实现加入购物车逻辑**

```js
 addGoodsToCart(goods) {
      const userStore = useUserStore();
      // 判断用户是否登录
      if (userStore.profile.token) {
        // 登录了
        console.log("登录了");
      } else {
        // 未登录
        // 将商品加入购物车(本地购物车)
        // 在购物车列表中查找当前要添加的商品
        const index = this.list.findIndex((item) => item.skuId === goods.skuId);
        // 如果购物车中已经存在该商品
        if (index > -1) {
          // 商品数量累加
          this.list[index].count += goods.count;
          // 将商品从购物车中删除
          // 再将它重新添加到购物车顶端
          // splice方法的返回值是包含被删除元素的数组
          this.list.unshift(this.list.splice(index, 1)[0]);
          console.log(this.list);
        } else {
          // 将商品直接添加到购物车中
          this.list.unshift(goods);
        }
      }
    },
```

* **Step.3：在组件中调用 store 中的 action 方法, 实现加入购物车功能**

```js
const addCart = () => {
  // 判断用户是否选择了规格
  if (!result.value.currentSelectedSkuId)
    return Message({ type: "error", text: "请选择商品规格" });

  const goods = {
    // 商品id
    id: result.value.id,
    // 商品 skuId
    skuId: result.value.currentSelectedSkuId,
    // 商品名称
    name: result.value.name,
    // 商品规格属性文字
    attrsText: result.value.currentSelectedSkuText,
    // 商品图片
    picture: result.value.mainPictures[0],
    // 商品原价
    price: result.value.oldPrice,
    // 商品现价
    nowPrice: result.value.price,
    // 是否选中
    selected: true,
    // 商品库存
    stock: result.value.inventory,
    // 用户选择的商品数量
    count: count.value,
    // 如果用户选择了规格, 该商品就一定是有效商品, 因为能够选择的规格都是有库存的
    isEffective: true,
  };

  // console.log(goods);

  cartStore.addGoodsToCart(goods);
};
```

:::
