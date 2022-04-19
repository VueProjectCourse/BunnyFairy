# 实现左侧分类骨架效果

::: tip 目标
这一小节，我们的目标是 创建一个通用的用于实现骨架屏效果的组件, 实现左侧分类骨架效果。
做骨架屏的意义在于在数据加载过程中为用户提供加载等待提示效果, 用于提升用户体验。
:::

::: warning 步骤

1. 在`components`中创建骨架屏组件(MenuSkeleton),实现基础布局
2. 在`MenuSkeleton`组件中添加样式代码
3. 在`MenuSkeleton`组件中添加组件所需props属性
4. 将`MenuSkeleton`组件通过 Vue 插件注册为全局可以使用的组件
5. 在应用入口文件(main.js)中注册插件
6. 使用`MenuSkeleton`组件实现左侧二级分类菜单加载等待效果
:::

::: info 体验

* **Step.1：在`components`中创建骨架屏组件(MenuSkeleton),实现基础布局**

  ```html
  <template>
    <div class="xtx-skeleton" :style="{ width, height }" :class="animated">
      <!-- 1 盒子-->
      <div class="block" :style="{ backgroundColor: bg }"></div>
      <!-- 2 闪效果 xtx-skeleton 伪元素 --->
    </div>
  </template>
  ```

* **Step.2：在`MenuSkeleton`组件中添加样式代码**

  ```html
  <style scoped>
  .xtx-skeleton {
    display: inline-block;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
  }
  .xtx-skeleton .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
  @keyframes scroll {
    0% {
      left: -100%;
    }
    100% {
      left: 120%;
    }
  }
  @keyframes fade {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
  .scroll::after {
    content: "";
    position: absolute;
    animation: scroll 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
  .fade {
    animation: fade 1s linear infinite alternate;
  }
  </style>
  ```

* **Step.3：在`MenuSkeleton`组件中添加组件所需props属性**

  ```html
  <script setup>
  defineProps({
    bg: {
      type: String,
      default: "#efefef",
    },
    width: {
      type: String,
      default: "100px",
    },
    height: {
      type: String,
      default: "100px",
    },
    animated: {
      type: String,
      default: "scroll", // 'fade'
    },
  })
  </script>
  ```

* **Step.4：将`MenuSkeleton`组件通过 Vue 插件注册为全局可以使用的组件**

  ```js
  import MenuSkeleton from "./MenuSkeleton.vue"

  export default {
    install(app) {
      app.component("MenuSkeleton",MenuSkeleton)
    }
  }
  ```

* **Step.5：在应用入口文件(main.js)中注册插件**

  ```js
  import { createApp } from "vue";

  import MenuSkeleton from "./components/MenuSkeleton";

  app.use(MenuSkeleton)

  app.mount("#app");
  ```

* **Step.6：使用`MenuSkeleton`组件实现左侧二级分类菜单加载等待效果**

  ```html
  <ul class="menu" v-if="menuList">
    <li v-for="item in menuList " 
        :key="item.id" 
        @mouseenter="current = item" 
        :class="{ active: current?.id && current.id === item.id}" >
      <RouterLink to="/">{{ item.name }}</RouterLink>
      <template v-if="item.children">
        <RouterLink to="/" 
                    v-for="subitem in item.children" 
                    :key="subitem.id">{{ subitem.name }}</RouterLink>
      </template>
      
      <template v-else>
        <MenuSkeleton
          animated="fade"
          width="60px"
          height="18px"
          bg="rgba(255,255,255,0.2)"
          style="margin-right: 5px"
          ></MenuSkeleton>
        <MenuSkeleton animated="fade"
          width="60px"
          height="18px"
          bg="rgba(255,255,255,0.2)"
          ></MenuSkeleton>
     </template>
    </li>
  </ul>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
