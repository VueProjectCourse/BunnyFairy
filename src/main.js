import { createApp } from "vue";

import App from "./App.vue";
import router from "./route";
import store from "./stores";
import components from "./components"; 
import "normalize.css";
import "@/assets/styles/base.css";

const app = createApp(App);
// 挂载
app.use(store);
app.use(router);
app.use(components)
app.mount("#app");
