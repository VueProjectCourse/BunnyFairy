# 购物车-更新商品列表-未登录

::: tip 目标
这一小节，我们的目标是 再次访问应用时, 更新本地购物车列表中的商品信息 (目的就是检测本地购物车中的商品是否还可以购买)
:::

::: warning 步骤

1. 创建用于更新本地购物车商品的API接口
2. 编写用于实现购物车商品信息更新的方法
3. 在组件中触发 action 进行购物车中商品信息的更新
:::

::: info 体验

* **Step.1：创建用于更新本地购物车商品的API接口**

```js
import request from "@/utils/request";

/**
 * 更新购物车中的商品信息 (库存, 是否有效, 现价)
 * @param skuId
 * @param id
 * @return {Promise}
 */
export const updateLocalCart = (skuId) => {
  return request.get(`/goods/stock/${skuId}`);
};

```

* **Step.2：编写用于实现购物车商品信息更新的方法**

  在购物车中可能会有多个商品, 意味着我们要同时发送多个请求获取商品信息, 当请求发出以后, 哪一个请求先响应是不确定的, 服务器端返回的商品信息也没有skuId, 也就是说我们不能确定当前请求返回的商品信息到底是哪个商品的信息. 如何解决这个问题呢?

  确保请求的发送顺序和响应结果的顺序保持一致, 通过 Promise.all 方法实现. 先使用 map 方法遍历购物车中的商品数据, 在遍历的过程中发送更新商品信息的请求, 将请求的返回值 Promise 对象按照遍历的顺序放置在一个数组中, 当购物车中的商品遍历完成后, 我们就得到了一个存储 Promise 对象的数组, 接下来将 Promise 对象数组传递到 Promise.all 方法中, 该方法可以让我们按照请求的发送顺序获取到请求的响应结果.

  当获取到响应结果以后, 我们仍然要通过 skuId 更新商品信息, 因为这种行为更加通用, 编写出来的方法在其他场景下也可以使用, 比如购物车中的更改商品数量功能也可以使用该方法. 服务器端返回的商品信息中是没有 skuId 的, 所以我们要手动为数据添加 skuId, 如何添加呢? 因为我们确保了请求的顺序和响应的顺序, 所以我们可以通过索引找到对应商品的 skuId. 遍历响应结果数组, 通过遍历索引从原有的购物车商品列表中获取商品的 skuId, 从而为当前遍历的商品添加 skuId.

```js
 // 更新购物车商品
    updateCartList() {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        // 遍历购物车中的商品，发送请求获取该商品的最新信息
        const arrayPromise = this.list.map(({ skuId }) =>
          // 将方法调用后返回的 promise 对象存储在一个数组中
          updateLocalCart(skuId)
        );

        // 批量获取多个请求的响应数据，所有响应书就被存储在一个数组中
        Promise.all(arrayPromise).then((data) => {
          data.forEach((item, index) => {
            item.data.result.skuId = this.list[index].skuId;

            this.list[index] = {
              ...this.list[index],
              ...item.data.result,
            };
          });

          console.log(this.list);
        });
      }
    },
```

* **Step.3：在组件中触发 action 进行购物车中商品信息的更新**

```js
const cartStore = useCartStore();

onMounted(() => {
  cartStore.updateCartList().then(() => {
    Message({ type: "success", text: "本地购物车中的商品信息更新成功" });
  });
});
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
