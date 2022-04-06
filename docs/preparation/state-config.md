# 配置状态管理器

::: tip 目标

这一小节，我们的目标是在Vue项目中配置Pinia,并实现状态持久化
:::

::: warning 步骤

1. 安装Pinia
2. 在项目入口文件中，挂载Pinia
3. 在src目录创建stores文件夹并创建JavaScript文件
4. 创建用户模块开启缓存
5. 创建购物车模块开启缓存
6. 创建分类模块
:::

::: info 体验

* **Step.1：安装Pinia**

  ```bash
  # 安装Pinia
  npm install pinia
  # 安装pinia 持久化插件
  npm i pinia-plugin-persist --save
  ```

* **Step.2：在src目录创建stores文件夹并创建`index.js`文件**

  ```js
  // 从 pinia中解构 createPinia方法
  import { createPinia } from 'pinia'
  // 导入pinia的状态持久化插件
  import piniaPluginPersist from 'pinia-plugin-persist'
  // 创建 store实例
  const store = createPinia()
  // 在 pinia中 挂载 插件
  store.use(piniaPluginPersist)

  export default store
  ```

* **Step.3：在项目入口文件中，挂载Pinia**

  ```js
  import { createApp } from "vue";

  import App from "./App.vue";
  import store from "./stores";

  const app = createApp(App);

  app.use(store);

  app.mount("#app");
  ```

* **Step.4：创建用户模块开启缓存**

```js
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "userStore",
  state: () => ({
    // 用户信息
    profile: {
      // 用户id
      id: "",
      // 用户头像
      avatar: "",
      // 用户昵称
      nickname: "",
      // 用户账号
      account: "",
      // 用户手机号
      mobile: "",
      // 用户登录凭证
      token: "",
    },
  }),
  getters: {},
  actions: {},
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});

```

* **Step.5：创建购物车模块开启缓存**

```js
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "cartStore",
  state: () => ({
    // 存储分类列表
    list: [],
  }),
   // 开启数据缓存
  persist: {
    enabled: true,
  },
});

```

* **Step.6：创建分类模块**

```js
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "cartStore",
  state: () => ({
    // 存储分类列表
    list: [],
  }),
});

```

:::

::: danger 总结

* 【重点】
  * ⓵ 安装Pinia
  * ⓶ 在项目入口文件中，挂载Pinia
  * ⓷ 在src目录创建stores文件夹并创建JavaScript文件

* 【难点】

  * ⓶ 在项目入口文件中，挂载Pinia
  * ⓸ 在JavaScript文件中声明Store

:::
