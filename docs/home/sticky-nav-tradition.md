# 实现吸顶导航(传统)

::: tip 目标
这一小节，我们的目标是自己动手使用原生事件的方式实现吸顶导航功能
:::

::: warning 步骤

1. 在`component`文件夹中创建`HeaderSticky`组件，并完成布局
2. 编写`HeaderSticky`组件的样式代码
3. 在`Layout`组件中调用`HeaderSticky`组件
4. 在`HeaderSticky`组件中封装获取滚动距离的方法
5. 在组件中使用获取滚动距离的方法，根据滚动距离控制吸顶导航的显示和隐藏
:::

::: info 体验

* **Step.1：在`component`文件夹中创建`HeaderSticky`组件，并完成布局**

  ```html
  <template>
    <div class="header-sticky" >
      <div class="container">
        <RouterLink to="/" class="logo" />
        <HeaderNav />
        <div class="right">
          <RouterLink to="/">品牌</RouterLink>
          <RouterLink to="/">专题</RouterLink>
        </div>
      </div>
    </div>
  </template>
  ```

* **Step.2：编写`HeaderSticky`组件的样式代码**

  ```html
  <style scoped>
  @import "@/assets/styles/variable.css";
  .header-sticky {
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    transform: translateY(-100%);
    opacity: 0;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
  }

  .header-sticky.show {
    transform: none;
    opacity: 1;
    transition: all 0.3s linear;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid var(--primary-color);
  }
  .right a {
    width: 38px;
    margin-right: 40px;
    font-size: 16px;
    line-height: 1;
  }
  .right a:hover {
    color: var(--primary-color);
  }
  </style>
  ```

* **Step.3：在`Layout`组件中调用`HeaderSticky`组件**

  ```html
  <script setup>
  import TopNav from "../TopNav/TopNav.vue";
  import AppHeader from "../AppHeader/AppHeader.vue";
  import HeaderSticky from "../HeaderSticky/HeaderSticky.vue";
  import AppFooter from "../AppFooter/AppFooter.vue";
  import { useCateStore } from "../../stores/cateStore"
  const cateStore = useCateStore();
  cateStore.initCategories();

  </script>
  <template>
    <!-- 顶部导航 -->
    <TopNav />
    <!-- 头部 -->
    <AppHeader />
    <!-- 吸顶头部 -->
    <HeaderSticky />
    <slot />
    <!-- 底部 -->
    <AppFooter />
  </template>
  ```

* **Step.4：在`HeaderSticky`组件中封装获取滚动距离的方法**

  ```js
  import { onMounted, onUnmounted, ref } from 'vue';
  export const useScroll = () => {
    // 存储滚动距离，用于在模板中作为元素显示隐藏的依据
    const scrollTop = ref(0);
    // 滚动事件的事件处理函数
    const handlerScroll = () => {
      // 存储滚动距离
      scrollTop.value = document.documentElement.scrollTop;
    }

    // 组件挂载完成后
    onMounted(() => {
      // 为window添加滚动事件
      window.addEventListener('scroll', handlerScroll);
    })
    // 组件卸载完成后
    onUnmounted(() => {
      window.removeEventListener('scroll', handlerScroll)
    })

    return {
      scrollTop
    }
  }
  ```

* **Step.5：在组件中使用获取滚动距离的方法，根据滚动距离控制吸顶导航的显示和隐藏**

  ```html
  <template>
    <div class="header-sticky" :class="{ show: scrollTop > 78 }">
      <div class="container" v-show="scrollTop > 78">
        <RouterLink to="/" class="logo" />
        <HeaderNav />
        <div class="right">
          <RouterLink to="/">品牌</RouterLink>
          <RouterLink to="/">专题</RouterLink>
        </div>
      </div>
    </div>
  </template>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
