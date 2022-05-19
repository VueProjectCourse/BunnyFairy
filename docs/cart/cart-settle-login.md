# 购物车-下单结算按钮

::: tip 目标
这一小节，我们的目标是点击下单结算按钮跳转到下单结算页面
:::

::: warning 步骤

1. 点击下单结算按钮进行链接跳转
2. 添加路由前置守卫, 进行路由拦截, 判断用户是否登录
3. 当用户登录成功后判断url中是否存在redirectURL参数, 如果有就跳转到对应的地址
:::

::: info 体验

* **Step.1：点击下单结算按钮进行链接跳转**

```html
<!-- views/cart/Cart.vue -->
<Button @click="jumpToCheckout" type="primary">下单结算</Button>
```

```js
import { useRouter } from "vue-router";

// 获取路由对象
const router = useRouter();

// 下单结算按钮
const jumpToCheckout = () => {
  // 判断用户是否选择了商品
  if (userSelectedGoodsCount.value === 0) {
    return Message({ type: "error", text: "请至少选择一件商品" });
  }
  // 跳转到结算页面
  router.push("/checkout/order");
};
```

* **Step.2：添加路由前置守卫, 进行路由拦截, 判断用户是否登录**

```js
import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";
export default (to, from, next) => {
  // 指明需要登陆的路由地址
  const requiredLogin = ["checkout", "member"];
  // 在发送请求之前做些什么
  const { profile } = storeToRefs(useUserStore());
  // 将用户访问的路由地址的开始字符串匹配出来
  // 如果用户访问的页面时需要登陆的
  if (requiredLogin.includes(to.path.split("/")[1])) {
    // 如果用户没有登陆
    if (!profile.value.token) {
      next({ path: "/login", query: { redirectURL: to.fullPath } });
    } else {
      // 如果登陆了
      next();
    }
  } else {
    // 用户访问的是不需要登陆的
    next();
  }
};

```

```js
import authGuard from "@/router/authGuard";

// 检测用户是否登录
router.beforeEach(authGuard)
```

* **Step.3：当用户登录成功后判断url中是否存在redirectURL参数, 如果有就跳转到对应的地址**

```js
// src/views/login/logic/useAfterLogin.js
import { useRoute } from 'vue-router'

export default function useLoginAfter () {
  // 获取路由信息对象
  const route = useRoute();
  // 登录成功之后做的事情
  const loginSuccessful = async ({ result }) => {
    // 跳转目标地址
    /** @type {string} */
    const redirectURL = route.query.redirectURL;
    // 跳转到首页或目标页
    router.push(redirectURL || "/").then(() => {});
  };
}
```

:::
