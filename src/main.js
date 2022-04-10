import { createApp } from "vue";

import App from "./App.vue";
import router from "./route";
import store from "./stores";
import MenuSkeleton from "./components/MenuSkeleton";
import "normalize.css";
import "@/assets/styles/base.css";
const app = createApp(App);

app.use(store);
app.use(router);
app.use(MenuSkeleton)

app.mount("#app");
