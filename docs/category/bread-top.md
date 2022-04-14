# 一级面包屑导航

::: tip 目标
这一小节，我们的目标是实现一级面包屑导航，示例如下:

```text
首页 > 居家
```

:::

::: warning 步骤

1. 在`components`文件夹中创建`BreadItem`组件，并添加布局代码
2. 在`BreadItem`组件中添加样式代码
3. 全局注册`BreadItem`组件
4. 在`components`文件夹中创建`Bread`组件,添加样式代码
5. 全局注册`Bread`组件
6. 通过render函数渲染`Bread`组件的布局
7. 在`TopCategory`组件中调用`Bread`组件和`BreadItem`组件
8. 根据所点击的位置，动态生成面包屑导航
9. 渲染动态生成的内容
:::

::: info 体验

* **Step.1：在`components`文件夹中创建`BreadItem`组件，并添加布局代码**

  ```html
  <template>
    <div class="xtx-bread-item">
      <RouterLink v-if="path" :to="path"><slot></slot></RouterLink>
      <span v-else><slot></slot></span>
    </div>
  </template>
  <script>
  export default {
    name: "XtxBreadItem",
    props: ["path"],
  };
  </script>
  ```

* **Step.2：在`BreadItem`组件中添加样式代码**

  ```css
  @import "@/assets/styles/variable.css";
  
  .xtx-bread-item a {
    color: #666;
    transition: all 0.4s;
  }
  
  .xtx-bread-item a:hover {
    color: var(--primary-color);
  }
  ```

* **Step.3：全局注册`BreadItem`组件**

  ```js
  import BreadItem from "@/components/BreadItem/BreadItem.vue";

  export default {
    install (app) {
      app.component("BreadItem", BreadItem);
    }
  }
  ```

* **Step.4：在`components`文件夹中创建`Bread`组件,添加样式代码**

  ```css
  @import "@/assets/styles/variable.css";

  .xtx-bread {
    display: flex;
    padding: 25px 10px;
  }

  .xtx-bread-item a {
    color: #666;
    transition: all 0.4s;
  }

  .xtx-bread-item a:hover {
    color: var(--primary-color);
  }

  .xtx-bread i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
  ```

* **Step.5：全局注册`Bread`组件**

  ```js
  import Bread from "@/components/Bread/Bread.vue";

  export default {
    install (app) {
      app.component("Bread", Bread);
    }
  }
  ```

* **Step.6：通过render函数渲染`Bread`组件的布局**

  ```js
  // 在 vue 中导入 h 方法, 用于创建元素
  import { defineComponent, h } from 'vue'
  export default defineComponent({
    render() {
      // 获取组件默认插槽的内容，获取BreadItem组件
      const items = this.$slots.default();
      // 存储子组件内容，因为icon需要动态生成
      const children = [];
      // 遍历插槽内容
      items.forEach((item, index) => {
        // 将当前便利插槽内容存储起来
        children.push(item);
        // 如果当前不是最后一项，动态生成icon
        if (index < items.length - 1) {
          children.push(h("i", {className: "iconfont icon-angle-right"}))
        }
      })
      // 创建面包屑最外层元素
      return h('div', {className: "xtx-bread"}, children)
    }
  })
  ```

* **Step.7：在`TopCategory`组件中调用`Bread`组件和`BreadItem`组件**

  ```html
  <script setup>
  import Layout from "../../components/Layout/Layout.vue"


  </script>

  <template>
    <Layout>
      <div>
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <BreadItem :path="`/category/10023`">居家</BreadItem>
        </Bread>
      </div>
    </Layout>
  </template>
  ```

* **Step.8：根据所点击的位置，动态生成面包屑导航**

  ```js
  import { useRoute } from "vue-router"
  import { useCateStore } from "../../stores/cateStore"
  import { storeToRefs } from "pinia"
  import { computed } from "vue";

  export const useBread = () => {
    // 获取路由信息对象
    const route = useRoute();
    // 获取分类数据
    const { cateList } = storeToRefs(useCateStore())

    // 通过计算属性得到一级分类
    const topCate = computed(() => {
      return cateList.value.find((item) => (item.id === route.params.id))
    })

    return { topCate }
  }
  ```

* **Step.9：渲染动态生成的内容**

  ```html
  <Bread>
    <BreadItem path="/">首页</BreadItem>
    <BreadItem :path="`/category/${topCate?.id}`">{{topCate?.name}}</BreadItem>
  </Bread>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
