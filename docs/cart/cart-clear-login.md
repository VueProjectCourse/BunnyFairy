# 清空本地购物车-退出登录

::: tip 目标
这一小节，我们的目标是实现用户退出后清空本地购物车商品数据
:::

::: warning 步骤

1. 退出的时候 清空本地购物车
:::

::: info 体验

```js
<script setup>
// 导入 useUserStore
import { useUserStore } from "@/stores/userStore";
import { useCartStore } from "../../../stores/cartStore";
import { useRouter } from "vue-router";
// 导入 storeToRefs
import { storeToRefs } from "pinia";
// 解构出 profile
const { profile } = storeToRefs(useUserStore());
const userStore = useUserStore();
const cartStore = useCartStore();
const router = useRouter();
const handlerLogout = () => {
  // 1.清理store中的数据
  userStore.$reset();
  cartStore.$reset();
  // 2.跳转路由
  router.push("/login");
};
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
