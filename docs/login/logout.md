# 退出登录

::: tip 目标
这一小节，我们的目标是实现用户退出登录功能
:::

::: warning 步骤

1. 为退出登录按钮添加点击事件, 事件触发后执行退出登录方法
2. 执行退出操作, 清除用户信息, 跳转到登录页
:::

::: info 体验

* **Step.1：为退出登录按钮添加点击事件, 事件触发后执行退出登录方法**

```html
<li><a @click="logout" href="javascript:;">退出登录</a></li>
```

* **Step.2：执行退出操作, 清除用户信息, 跳转到登录页**

```js
// 导入 useUserStore
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
// 导入 storeToRefs
import { storeToRefs } from "pinia";
// 解构出 profile
const { profile } = storeToRefs(useUserStore());
const store = useUserStore();
const router = useRouter();
const handlerLogout = () => {
  // 1.重置store中的数据
  store.$reset();
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
