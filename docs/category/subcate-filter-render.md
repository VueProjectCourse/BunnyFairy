# 二级分类-筛选组件-数据渲染

::: tip 目标
这一小节，我们的目标是实现二级分类筛选区域数据渲染

示例如下:
![filter](./images/115.png)
:::

::: warning 步骤

1. 创建筛选区域组件(`SubFilter`), 编写布局代码
2. 在`SubFilter`中编写样式代码
3. 在二级分类页面组件中调用筛选区域组件
4. 创建用于获取筛选信息的 API 接口
5. 在 `SubFilter` 组件中获取筛选条件数据
6. 渲染`SubFilter` 组件模板
:::

::: info 体验

* **Step.1：创建筛选区域组件(`SubFilter`), 编写布局代码**

```html
<template>
  <!-- 筛选区 -->
  <div class="sub-filter">
    <div class="item" v-for="i in 4" :key="i">
      <div class="head">品牌：</div>
      <div class="body">
        <a href="javascript:">全部</a>
        <a href="javascript:" v-for="i in 4" :key="i">小米</a>
      </div>
    </div>

     <div class="item" v-for="i in 4" :key="i">
      <div class="head">颜色：</div>
      <div class="body">
        <a href="javascript:">全部</a>
        <a href="javascript:" >黑色</a>
         <a href="javascript:" >蓝色</a>
      </div>
    </div>
  </div>
</template>
```

* **Step.2：在`SubFilter`中编写样式代码**

```css
@import "@/assets/styles/variable.css";

.sub-filter {
  background: #fff;
  padding: 25px;
}

.sub-filter .item {
  display: flex;
  line-height: 40px;
}

.sub-filter .item .head {
  width: 80px;
  color: #999;
}

.sub-filter .item .body {
  flex: 1;
}

.sub-filter .item .body a {
  margin-right: 36px;
  transition: all 0.3s;
  display: inline-block;
}

.sub-filter .item .body a.active,
.sub-filter .item .body a:hover {
  color: var(--primary-color);
}
```

* **Step.3：在二级分类页面组件中调用筛选区域组件**

```html
<template>
  <Layout>
    <div class="container">
      <Bread>
       <!-- ...省略代码 -->
      </Bread>
      <!-- 筛选区域 -->
      <SubFilter/>
    </div>
  </Layout>
</template>
```

* **Step.4：创建用于获取筛选信息的 API 接口**

```js
/**
 * 根据二级分类id获取筛选条件
 * @param id 二级分类id
 * @return {Promise}
 */
 export function readFilterById(id) {
  return request.get("/category/sub/filter", {
    params: {
      id
    },
  });
}
```

* **Step.5：在 `SubFilter` 组件中获取筛选条件数据**

```js
import { useRoute } from "vue-router"
import { ref } from "vue"
import { readFilterById } from "../../api/categoryAPI"
export const readFilter = () => {
  const route = useRoute();
  // 用于存储所有筛选条件数据
  const filters = ref(null);

  readFilterById(route.params.id).then(({ data: res, status: status }) => {
    if (status === 200) {

      // console.log(res.result);
      // 在品牌筛选条件的前面加上 `全部` 筛选选项
      res.result.brands.unshift({ id: null, name: "全部" });
        // 在其他筛选条件的前面加上 `全部` 筛选选项
      res.result.saleProperties.forEach((item)=>{
        item.properties.unshift({id: null, name: "全部"});
      })
      // 存储筛选条件
      filters.value = res.result;
    }
  });

  return { filters }
}
```

* **Step.6：渲染`SubFilter` 组件模板**

```html
<template>
  <!-- 筛选区 -->
   <!-- 筛选区 -->
  <div class="sub-filter" v-if="filters && !filtersLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          href="javascript:"
          v-for="item in filters?.brands"
          :key="item.id"
          >{{ item.name }}</a
        >
      </div>
    </div>

    <div class="item" v-for="item in filters?.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}：</div>
      <div class="body">
        <a
          href="javascript:"
          v-for="subitem in item?.properties"
          :key="subitem.id"
          >{{ subitem.name }}</a
        >
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
