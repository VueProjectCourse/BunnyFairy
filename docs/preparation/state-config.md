# 配置状态管理器

::: tip Object
这一小节，我们的目标是在Vue项目中配置Pinia,并实现状态持久化
:::

::: warning Path

1. 安装Pinia
2. 在项目入口文件中，挂载Pinia
3. 在src目录创建stores文件夹并创建JavaScript文件
:::

::: info Experience

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

:::

::: danger Note

* 【重点】
  * ⓵ 安装Pinia
  * ⓶ 在项目入口文件中，挂载Pinia
  * ⓷ 在src目录创建stores文件夹并创建JavaScript文件

* 【难点】

  * ⓶ 在项目入口文件中，挂载Pinia
  * ⓸ 在JavaScript文件中声明Store

:::
