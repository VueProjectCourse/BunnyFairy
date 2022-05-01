# 规格组件通讯-数据回传

::: tip 目标
这一小节，我们的目标是 用户选择完规格后, 将规格相关数据回传到父组件

为什么要做这样的功能呢？

当用户选择完规格以后, 要将规格对象中存储的现价、原价、库存、规格ID以及由规格值组成的字符串传递到父组件。

不同规格对应的商品, 它的现价和原价是不一样的, 当用户选择完规格以后要及时更新视图。

在用户选择购买商品的数量时, 数量不能超过库存.

在用户点击添加购物车按钮时, 要将用户选择的商品规格id传递到购物车中使用.

购物车中还要显示由规格值组件的字符串.
:::

::: warning 步骤

1. 当用户选择规格时调用 `sendDataToParent` 方法将数据传递到父组件
2. 创建 sendData 方法
3. 在父组件中监听 `on-spec-changed` 事件, 实时更改商品价格等信息
:::

::: info 体验

* **Step.1：当用户选择规格时调用 `sendDataToParent` 方法将数据传递到父组件**

```js
const updateSpecSelected = (spec, value) => {
  // 将数据回传到父组件
  // props.specs: 在组件中显示的供用户选择的规格选项, 使用它获取用户已经选择的规格名称
  // pathMap: 将获取到的规格名称以下划线组合, 组合后规格名称作为 pathMap 对象的属性可获取 skuId
  // props.skus: 通过 skuId 可以在 skus 规格数组中找到具体的规格对象信息
  // emit: 具体的规格对象信息获取到以后, 可以通过 emit 将信息传递到父组件
  sendDataToParent(props.specs, props.skus, emit, pathMap);
};
```

* **Step.2：创建 sendData 方法**

```js
// 将数据回传到父组件
function sendDataToParent(specs, skus, emit, pathMap) {
  // 获取到用户选择的规格名称数组
  const selected = getUserSelected(specs).filter((item) => item);
  // 判断用户是否选择了所有的规格
  if (selected.length === specs.length) {
    // 将规格名称以下划线进行组合, 组合后将它作为 pathMap 对象的属性, 以获取规格组合的 skuId
    const skuId = pathMap[selected.join("_")];
    // 通过 skuId 在规格集合中查找具体的规格对象信息
    const target = skus.find((sku) => sku.id === skuId);
    // 触发自定义事件将规格信息传递到父组件
    emit("on-spec-changed", {
      skuId,
      price: target.price,
      oldPrice: target.oldPrice,
      inventory: target.inventory,
      specsText: target.specs
        .map((spec) => `${spec.name}: ${spec.valueName}`)
        .join(" "),
    });
  }
}
```

* **Step.3：在父组件中监听 `on-spec-changed` 事件, 实时更改商品价格等信息**

```html
<goods-sku @on-spec-changed="onSpecChanged"></goods-sku>
```

```js
setup () {
  const result = useGoods();
  // 监听规格组件传递过来的数据
  const onSpecChanged = (data) => {
    result.value.price = data.price;
    result.value.oldPrice = data.oldPrice;
    result.value.inventory = data.inventory;
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
