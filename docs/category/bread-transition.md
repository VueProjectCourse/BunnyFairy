# 面包屑导航动画

::: tip 目标
这一小节，我们的目标是实现面包屑导航动画
:::

::: warning 步骤

1. 用`Transition`组件包裹面包屑导航
2. 在 `base.css`中添加过渡样式
:::

::: info 体验

* **Step.1：用`Transition`组件包裹面包屑导航**

  ```html
  <Transition name="fade-right" mode="out-in">
      <!-- 
          为什么加 key ?
          动画执行的先决条件是元素的创建和销毁, 而每次导航切换时, 变化的只是 category.name, 
          元素是没有变化的, 加 key 就是为了让元素发生变化, 从而执行动画, 每个分类的 ID 都不一样,
          所以分类 ID 变化, 元素必定重新渲染
      -->
      <xtx-bread-item :key="category?.id">{{ category?.name }}</xtx-bread-item>
        <!-- 
              mode: 指定过渡模式
              默认情况下入场元素的动画和离场元素的动画是同时执行的, 通过过渡模式可以更改这一默认行为
              in-out: 入场元素的动画先执行, 离场元素的动画后执行
              out-in: 离场元素的动画先执行, 入场元素的动画后执行
          -->
  </Transition>
  ```

* **Step.2：在 `base.css`中添加过渡样式**
  
  ```css
  .fade-right-enter-from,
  .fade-right-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  .fade-right-enter-active,
  .fade-right-leave-active {
    transition: all 0.5s;
  }
  .fade-right-enter-to,
  .fade-right-leave-from {
    transform: none;
    opacity: 1;
  }
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
