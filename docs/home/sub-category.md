# 创建二级分类页面

::: tip 目标

这一小节，我们的目标是创建二级分类页面, 配置二级分类页面的路由规则

:::

::: warning 步骤

1. 在`views`文件夹中，创建二级分类组件(SubCategory)
2. 配置二级分类路由
3. 在导航组件(`HeaderNav`)中添加二级分类链接
:::

::: info 体验

* **Step.1：在`views`文件夹中，创建二级分类组件(SubCategory)**

  ```html
  <script setup>
    import AppLayout from "../../components/AppLayout/AppLayout.vue"
  </script>
  <template>
    <AppLayout>
      <div>SubCategoryPage</div>
    </AppLayout>
  </template>
  ```

* **Step.2：配置二级分类路由**

  ```js
  const routes = [
    // 配置路由
    {
      path: "/",
      component: Home,
    },
    { path: "/category/:id", component: TopCategory },
    { path: "/category/sub/:id", component: SubCategory },
  ];
  ```

* **Step.3：在导航组件(`HeaderNav`)中添加二级分类链接**

  ```html
  <div class="layer">
    <ul>
      <li v-for="subitem in item.children" :key="subitem.id">
        <RouterLink :to="`/category/sub/${subitem.id}`">
          <img :src="subitem.picture" :alt="subitem.name" />
          <p>{{ subitem.name }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
