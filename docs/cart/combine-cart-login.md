# 购物车-合并购物车-已登录

::: tip 目标
这一小节，我们的目标是用户登录成功后, 将本地购物车和服务端购物车进行合并

我们需要完成的是: 登录成功后, 将本地购物车数据合并到服务器端购物车中, 然后清空本地购物车, 将服务器端购物车数据拉取到本地.

用户退出登录后, 清空本地购物车数据.
:::

::: warning 步骤

1. 创建用于合并购物车的 API 接口函数
2. 在Store中创建用于合并购物车的 action 方法
3. 在登录成功之后触发合并购物车的 action 方法
:::

::: info 体验

* **Step.1：创建用于合并购物车的 API 接口函数**

```js
/**
 * 将本地购物车和服务器端购物车进行合并
 * @param {Array<{skuId: string, selected: boolean, count: number}>} cart
 * @return {Promise}
 */
export const setMergeCart = (cart) => {
  return request.post("/member/cart/merge", cart);
};
```

* **Step.2：在Store中创建用于合并购物车的 action 方法**

```js
// 合并购物车
    async mergeCart() {
      console.log(11111);
      // 如果本地购物车中没有数据，不用进行合并
      if (this.list.length === 0) return;
      // 准备合并购物车接口所需数据
      const carts = this.list.map((item) => ({
        skuId: item.skuId,
        selected: item.selected,
        count: item.count,
      }));

      try {
        // 合并购物车
        await setMergeCart(carts);
        // 清空本地购物车
        this.list = [];
      } catch (error) {
        // 购物车合并失败, 抛出异常
        throw new Error(error);
      }
    },
```

* **Step.3：在登录成功之后触发合并购物车的 action 方法**

```js
// loginForm.js
import { useCartStore } from "@/stores/cartStore";
// 手机短信登陆
export const useMobileLogin = () => {
  // vue-router 用的是provide inject
  // 注意 useRouter方法 必须在setup内执行 或者是 函数式组件
  const router = useRouter();
  const cartStore = useCartStore();

  // 请求成功时的回调
  const successFn = async ({ data: res, status: status }) => {
    const { profile } = storeToRefs(useUserStore());
    if (status === 200) {
      // 把用户信息存储到Store中
      profile.value = { ...profile.value, ...res.result };
      await cartStore.mergeCart();
      await cartStore.updateCartList();
      // // 判断登陆成功 跳转到首页
      router.push("/").then(() => {
        // 登录成功之后的提示信息
        Message({ type: "success", text: "登录成功" });
      });
    }
  };
  // 登陆失败时的回调
  const failFn = (error) => {
    // console.log(error.response.data.message);
    Message({ type: "error", text: error.response.data.message });
  };

  // 登陆方法
  const setMobileLogin = (loginParams) => {
    loginByMobileMsgCode(loginParams).then(successFn).catch(failFn);
  };

  return { setMobileLogin };
};
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
