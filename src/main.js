import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import router from "@/routes/indexRouter.js";
import "normalize.css"
app.use(router)
app.mount('#app');
