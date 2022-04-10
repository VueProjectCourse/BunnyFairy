# 实现吸顶导航(工具库)

::: tip 目标
这一小节，我们的目标是使用 `@vueuse/core` 工具库提供的方法实现吸顶导航功能 [文档](https://vueuse.org/)
:::

::: warning 步骤

1. 安装`@vueuse/core` 工具库
2. 使用工具库中的 `useWindowScroll` 获取浏览器滚动高度
:::

::: info 体验

* **Step.1：安装`@vueuse/core` 工具库**

```bash
npm install @vueuse/core
```

* **Step.2：使用工具库中的 `useWindowScroll` 获取浏览器滚动高度**

```js
import HeaderNav from '../HeaderNav/HeaderNav.vue';
import {useWindowScroll} from "@vueuse/core"
const {y: scrollTop} = useWindowScroll();
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
