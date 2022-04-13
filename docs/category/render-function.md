# 渲染函数

::: tip 目标
这一小节，我们的目标是掌握 Vue 中渲染函数的使用方式，为什么要掌握Vue 中渲染函数的使用方式呢？来看看接下来的示例:

```html
<!-- 根据下面的组件渲染对应的布局: -->
<!-- 要求: 如果level="3"那么就渲染为h3标签，里面的"内容"作为h3标签的内容 -->
<!--      如果level="4"那么就渲染为h4标签，里面的"内容"作为h4标签的内容-->
<Heading level="3">内容</Heading>
```

如果使用已学知识，大概可以这样实现:

```html
<script>
defineProps(['level'])
</script>
<template>
  <h1 v-if="level == '1'"><slot></slot></h1>
  <h2 v-else-if="level == '2'"><slot></slot></h2>
  <h3 v-else-if="level == '3'"><slot></slot></h3>
  <h4 v-else-if="level == '4'"><slot></slot></h4>
  <h5 v-else-if="level == '5'"><slot></slot></h5>
  <h6 v-else-if="level == '6'"><slot></slot></h6>
</template>
```

缺点： 以上的代码实现起来带麻烦，且没有扩展性...

:::

::: warning 步骤

1. 什么是渲染函数
2. 渲染函数的使用方式
3. 渲染函数的使用场景
:::

::: info 体验

* **Kn.1：什么是渲染函数**

  染函数允许开发者通过 JavaScript 的方式创建组件模板，它以组件配置选项的形式存在。
  使用 JavaScript 的方式创建模板, 这种方式更加灵活。

  ```js
  // 在 vue 中导入 h 方法, 用于创建元素
  import { defineComponent, h } from 'vue'
  export default defineComponent({
    // render 函数返回什么, 页面中就显示什么
    render() {
       // 如果子元素只有一个, 直接传入, 如果有多个, 放入数组中
      return h(元素名称, 元素属性, 子元素)
    }
  }) 
  ```

* **Kn.2：渲染函数的使用方式**

  ```js
  // 在 vue 中导入 h 方法, 用于创建元素
  import { defineComponent, h } from 'vue'
  export default defineComponent({
    // render 函数返回什么, 页面中就显示什么
    render() {
       //        h(元素名称, 元素属性, 子元素)
       // return h('div', { class: 'haha' }, 'hello world')
       // 如果子元素只有一个, 直接传入, 如果有多个, 放入数组中
      return h('div', { id: 'box' }, [
        h('h2', null, '我是h2'),
        h('h3', null, '我是h3')
      ])
    }
  }) 
  ```

* **Kn.3：渲染函数的使用场景**

  ```js
  import { defineComponent, h } from 'vue'
  export default defineComponent({
    name: "heading",
    props: ['level'],
    render() {
      console.log(this.level)
      console.log(this.$slots.default())
      return h(`h${this.level}`,null, this.$slots.default())
    }
  })
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
