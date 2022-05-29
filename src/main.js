import { createApp } from "vue";
import store from "./stores";
import App from "./App.vue";
import router from "./route";
// import process from "process";
// 引入组件注册文件
import components from "./components";

// 引入重置样式
import "normalize.css";
import "./assets/styles/base.css";
import "./assets/styles/common.css";
const app = createApp(App);
// 挂载store
app.use(store);
// 挂载router
app.use(router);
// 在全局挂载组件
app.use(components);

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
  import("./mocks/works").then(async ({ default: worker }) => {
    // console.log(worker);
    worker.start({ onUnhandledRequest() {} });
    app.mount("#app");
  });
}
