# 项目初始化

::: tip 目标
这一小节，我们的目标是使用 构建工具来创建项目
:::

::: warning 步骤

1. 运行初始化命令创建项目
2. 可选功能提示
3. 装依赖并启动开发服务器
4. 清理项目无关文件及代码
:::

::: info 体验

* **Step.1：运行初始化命令创建项目**

  为了在机器上创建一个启用构建工具的 Vue 项目，请在命令行中运行下面的指令 (不要带上 > 符号)

  ```bash
  > npm init vue@latest
  ```

* **Step.2：可选功能提示**

  ```bash
  PS E:\**\**\**> npm create vite@latest
  Need to install the following packages:
    create-vue@latest
  Ok to proceed? (y) y

  Vue.js - The Progressive JavaScript Framework

  √ Project name: ... 项目名称
  √ Add TypeScript? ... No / Yes
  √ Add JSX Support? ... No / Yes
  √ Add Vue Router for Single Page Application development? ... No / Yes
  √ Add Pinia for state management? ... No / Yes
  √ Add Vitest for Unit Testing? ... No / Yes
  √ Add Cypress for both Unit and End-to-End testing? ... No / Yes
  √ Add ESLint for code quality? ... No / Yes
  √ Add Prettier for code formatting? ... No / Yes

  Scaffolding project in E:\**\**\**\ 项目名称...

  Done. Now run:

  cd 项目名称
  npm install
  npm run dev

  ```

* **Step.3：装依赖并启动开发服务器**

  ```bash
  > cd <your-project-name>
  > npm install
  > npm run dev
  ```

* **Step.4：清理项目无关文件及代码**

  * ⓵ 删除 /src/assets/base.css
  * ⓶ 删除 /src/assets/logo.svg
  * ⓷ 清空 /src/components
  * ⓸ 修改 /src/router/index.js 中无用代码
  * ⓹ 修改 /src/stores/index.js 中无用代码
  * ⓺ 删除 /src/views/ 中无用组件
  * ⓻ 修改 /src/App.vue 中无用代码

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】

  * ⓵ 推荐的 IDE 配置是 [Visual Studio Code](https://code.visualstudio.com/)+ [Volar扩展](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)，选用 WebStorm 也是可以的。

:::
