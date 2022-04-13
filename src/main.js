import { createApp } from "vue";

import App from "./App.vue";
import router from "./route";
import store from "./stores";
import MenuSkeleton from "./components/MenuSkeleton";
import Carousel from "./components/Carousel/Carousel";
import More from "./components/More/More";
import Bread from "./components/Bread/Bread";
import BreadItem from "./components/BreadItem/BreadItem";
import lazy from "./directive/lazy";
import "normalize.css";
import "@/assets/styles/base.css";
const app = createApp(App);

app.use(store);
app.use(router);

app.use(MenuSkeleton)
app.use(Carousel)
app.use(More)
app.use(Bread)
app.use(BreadItem)
app.use(lazy)

app.mount("#app");
