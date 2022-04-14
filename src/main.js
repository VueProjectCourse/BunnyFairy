import { createApp } from "vue";

import App from "./App.vue";
import router from "./route";
import store from "./stores";
// import MenuSkeleton from "./library/MenuSkeleton";
// import Carousel from "./library/Carousel/Carousel";
import library from "./library"; 
// import lazy from "./directive/lazy";
import "normalize.css";
import "@/assets/styles/base.css";
const app = createApp(App);

app.use(store);
app.use(router);

// app.use(MenuSkeleton)
// app.use(Carousel)
// app.use(lazy)
app.use(library)

app.mount("#app");
