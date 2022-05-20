// 从 pinia中解构 createPinia方法
import { createPinia } from "pinia";
// 导入pinia的状态持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// 创建 store实例
const store = createPinia();
// 在 pinia中 挂载 插件
store.use(piniaPluginPersistedstate);

export default store;
