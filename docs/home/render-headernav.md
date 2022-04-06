# 导航组件数据填充

::: tip 目标
这一小节，我们的目标是完成导航组件的真实数据填充，并渲染页面
:::

::: warning 步骤

1. 在`api`文件夹中，新建`cateAPI.js`文件,并声明获取分类数据的方法
2. 在`cateStore`文件中，创建获取分类数据的 `action` 方法
3. 在`AppLayout` 组件中调用获取分类数据的方法
4. 在`HeaderNav` 组件中，获取`cateStore`分类数据，并将其填充至模板
5. 在 `api` 文件夹下创建 `constantsAPI.js` 文件，用于应用级静态数据
:::

::: info 体验

* **Step.1：在`api`文件夹中，新建`cateAPI.js`文件,并声明获取分类数据的方法**

```js
// create(add)增 delete(remove)删 update(edit)改  read(find)查
import request from "../utils/request"
/**
 * 获取分类列表
 * @return {Promise<{result: Array<Category>}>}
 */
export function readCategories() {
  return request.get("/home/category/head");
}
```

* **Step.2：在`cateStore`文件中，创建获取分类数据的 `action` 方法**

```js
actions: {
  async initCategories() {
    const { data: res, status: status } = await readCategories();
    console.log(res);
    if (status === 200) {
      this.cateList = res.result;
    }
  }
}
```

* **Step.3：在`AppLayout` 组件中调用获取分类数据的方法**

```js
import { useCateStore } from "../../stores/cateStore"
const cateStore = useCateStore();
cateStore.initCategories();
```

* **Step.4：在`HeaderNav` 组件中，获取`cateStore`分类数据，并将其填充至模板**

```html
<script setup>
import { useCateStore } from "../../stores/cateStore"
import { storeToRefs } from "pinia"
const { cateList } = storeToRefs(useCateStore())
</script>
```

```html
<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li v-for="item in cateList" :key="item.id">
      <a href="#">{{item.name}}</a>
      <div class="layer">
        <ul>
          <li v-for="subitem in item.children" :key="subitem.id">
            <a href="#">
              <img
                :src="subitem.picture"
                :alt="subitem.name"
              />
              <p>{{subitem.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
```

* **Step.5：在 `api` 文件夹下创建 `constantsAPI.js` 文件，用于应用级静态数据**

```js
// 一级分类
export const topCategories = [
  "居家",
  "美食",
  "服饰",
  "母婴",
  "个护",
  "严选",
  "数码",
  "运动",
  "杂货",
];
```

```js
// src/stores/cateStore.js
state: () => ({
  // 存储分类列表
  cateList: topCategories.map((categoryName)=>({name: categoryName})),
}),
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
