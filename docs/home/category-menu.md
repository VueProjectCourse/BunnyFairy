# 左侧分类结构渲染

::: tip 目标
这一小节，我们的目标是完成左侧分类列表基础布局及数据渲染，
示例如下:
![102.png](./images/102.png)
:::

::: warning 步骤

1. 创建首页左侧分类组件(HomeCategory), 编写布局代码
2. 编写样式代码
3. 在`Home`组件中调用左侧分类组件
4. 根据分类列表数据计算出新的左侧分类列表数据
5. 渲染左侧分类组件
:::

::: info 体验

* **Step.1：创建首页左侧分类组件(HomeCategory), 编写布局代码**

```html
<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="i in 10" :key="i">
        <RouterLink to="/">居家</RouterLink>
        <RouterLink to="/">洗漱</RouterLink>
        <RouterLink to="/">清洁</RouterLink>
      </li>
    </ul>
  </div>
</template>
```

* **Step.2：编写样式代码**

```html
<style scoped>
@import "@/assets/styles/variable.css";
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
}
.menu li {
  padding-left: 40px;
  height: 50px;
  line-height: 50px;
}
.menu li:hover {
  background-color: var(--theme-color);
}
.menu li a {
  margin-right: 4px;
  color: #fff;
}
.menu li a:first-child {
  font-size: 16px;
}
</style>
```

* **Step.3：在`Home`组件中调用左侧分类组件**

```html
<script setup>
import Layout from "@/components/Layout/Layout.vue";
import HomeCategory from "../../components/HomeCategory/HomeCategory.vue";
</script>

<template>
  <Layout>
    <div class="container">
      <HomeCategory />
    </div>
  </Layout>
</template>
```

* **Step.4：根据分类列表数据计算出新的左侧分类列表数据**

```js
import { computed} from "vue";
import { useCateStore } from "../../stores/cateStore";

export const useMenuList = () => {
  const cateStore = useCateStore();
  const brand = {
    id: "brand",
    name: "品牌",
    children: [{ id: "child-brand", name: "推荐品牌" }],
    brands: []
  };
  const menuList =computed(()=>{
    const list = cateStore.cateList.map((item) => ({
      ...item,
      children: item.children ? item.children.slice(0, 2) : null,
    }));
    // 向分类列表中添加品牌
    list.push(brand);
    // 返回处理好的分类列表数据
    return list;
  });
  return {menuList};
}
```

* **Step.5：渲染左侧分类组件**

```html
<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in menuList " :key="item.id">
        <RouterLink to="/">{{item.name}}</RouterLink>
        <RouterLink to="/" v-for="subitem in item.children" :key="subitem.id">{{subitem.name}}</RouterLink>
      </li>
    </ul>
  </div>
</template>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
