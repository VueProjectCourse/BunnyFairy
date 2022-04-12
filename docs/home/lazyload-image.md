# 实现图片懒加载

::: tip 目标
这一小节，我们的目标是封装一个用于实现图片懒加载的自定义指令
:::

::: warning 步骤

1. 创建一个用于图片懒加载的指令
2. 将指令注册到应用全局范围内
3. 在产品区块应用图片懒加载指令
:::

::: info 体验

* **Step.1：创建一个用于图片懒加载的指令**

```js
// 导入默认产品图片
import defaultImage from "@/assets/images/default.png";

export default {
  install(app) {
    app.directive("lazy", {
      // 在绑定元素的父组件及他自己的所有子节点都 挂载 完成后调用
      mounted(el, binding) {
        const observer = new IntersectionObserver(([{ isIntersecting }]) => {
          // 判断元素是否进入可视区
          if (isIntersecting) {
            // 停止监听元素
            observer.unobserve(el);
            // 动态加载图片
            el.src = binding.value;
            // 当图片加载出错时
            el.onerror = () => {
              // 显示默认产品图片
              el.src = defaultImage;
            };
          }
        });
        // 指定要监听的元素
        observer.observe(el);
      },
      // 绑定元素的父组件卸载之后调用
      unmounted() { }
    });
  }
}
```

* **Step.2：将指令注册到应用全局范围内**

```js
import { createApp } from "vue";
import App from "./App.vue";
import lazy from "./directive/lazy";
const app = createApp(App);

app.use(lazy)

app.mount("#app");

```

* **Step.3：在产品区块应用图片懒加载指令**

```html
<!-- components/HomeProduct -->
 <RouterLink class="cover" to="/">
  <img v-lazy="item.picture" alt="" />
  <strong class="label">
    <span>{{ item.name }}馆</span>
    <span>{{ item.saleInfo }}</span>
  </strong>
</RouterLink>
```

```html
<!-- components/HomeGoods -->
 <RouterLink :to="`/product/${goods.id}`" class="image">
  <img v-lazy="goods.picture" alt="" />
</RouterLink>
```

:::
