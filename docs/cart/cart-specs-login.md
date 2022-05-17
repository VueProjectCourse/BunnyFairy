# 购物车-修改商品规格-已登录

::: tip 目标
这一小节，我们的目标是实现修改服务器端购物车中的商品规格信息

在接口文档中没有提供修改商品规格的接口，修改商品规格可以通过删除商品接口和添加商品接口实现
:::

::: warning 步骤
在接口文档中没有提供修改商品规格的接口，修改商品规格可以通过删除商品接口和添加商品接口实现

```js
 async updateGoodsOfCartBySkuChanged(partOfGoods) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
        // 找到旧的商品
        const oldGoods = this.list.find(
          (item) => item.skuId === partOfGoods.oldSkuId
        );
        // 把旧的商品删除
        // await deleteGoodsOfCartBySkuIds([oldSkuId]);
        // 获取新的商品
        const newGoods = {
          ...oldGoods,
          skuId: partOfGoods.userSelectedNewSku.value.skuId,
          stock: partOfGoods.userSelectedNewSku.value.inventory,
          oldPrice: partOfGoods.userSelectedNewSku.value.oldPrice,
          nowPrice: partOfGoods.userSelectedNewSku.value.price,
          attrsText: partOfGoods.userSelectedNewSku.value.specsText,
        };
        // 添加新商品

        this.deleteGoodsOfCartBySkuId(partOfGoods.oldSkuId);
        this.addGoodsToCart(newGoods);
      } else {
        // 如果没有登陆怎么办
        const oldGoods = this.list.find(
          (item) => item.skuId === partOfGoods.oldSkuId
        );

        const newGoods = {
          ...oldGoods,
          skuId: partOfGoods.userSelectedNewSku.value.skuId,
          stock: partOfGoods.userSelectedNewSku.value.inventory,
          oldPrice: partOfGoods.userSelectedNewSku.value.oldPrice,
          nowPrice: partOfGoods.userSelectedNewSku.value.price,
          attrsText: partOfGoods.userSelectedNewSku.value.specsText,
        };

        this.deleteGoodsOfCartBySkuId(partOfGoods.oldSkuId);
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
