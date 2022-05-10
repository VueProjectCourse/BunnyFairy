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
