# 实现左侧分类品牌推荐

::: tip 目标
这一小节，我们的目标是实现品牌推荐数据的获取和渲染
:::

::: warning 步骤

1. 在 `HomeCategory` 组件中添加品牌推荐的基础布局
2. 在 `api`文件夹下创建`homeAPI`文件及`readHotBrands`方法
3. 在`useMenuList`文件中,导入`readHotBrands`方法
4. 在`brand`对象中，添加一个属性`brands`数组用于接收接口数据
5. 在`useMenuList`方法中调用`readHotBrands`方法获取数据
6. 在品牌推荐的模板中渲染数据
7. 实现左侧分类的鼠标移入选中样式
:::

::: info 体验

* **Step.1：在 `HomeCategory` 组件中添加品牌推荐的基础布局**

```html
<!-- 注意: 此布局放置在 .layer 中, 放置在商品推荐 ul 的后面 -->
<ul>
  <li class="brand" v-for="i in 6" :key="i">
    <RouterLink to="/">
      <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/brand_goods_1.jpg" alt="">
      <div class="info">
        <p class="place"><i class="iconfont icon-dingwei"></i>北京</p>
        <p class="name ellipsis">DW</p>
        <p class="desc ellipsis-2">DW品牌闪购</p>
      </div>
    </RouterLink>
  </li>
</ul>
```

```css
.layer ul li.brand {
  height: 180px;
}
.layer ul li.brand a {
  align-items: flex-start;
}
.layer ul li.brand a img {
  width: 120px;
  height: 160px;
}
.layer ul li.brand a .info p {
  margin-top: 8px;
}
.layer ul li.brand a .info .place {
  color: #999;
}
```

* **Step.2：在 `api`文件夹下创建`homeAPI`文件及`readHotBrands`方法**

```js
// create(add)增 delete(remove)删 update(edit)改  read(find)查
import request from "../utils/request"

/**
 * 获取热门品牌
 * @param {number} limit - 请求多少条数据
 * @return {Promise<{result: Array<Brand>}>}
 */
export const readHotBrands = (limit = 10) => {
  return request.get("/home/brand", {
    params: {
      limit
    },
  });
};
```

* **Step.3：在`useMenuList`文件中,导入`readHotBrands`方法**

```js
import { computed } from "vue";
import { readHotBrands } from "../../api/homeAPI"
import { useCateStore } from "../../stores/cateStore";
```

* **Step.4：在`brand`对象中，添加一个属性`brands`数组用于接收接口数据**

```js
const brand = {
   id: "brand",
   name: "品牌",
   children: [{ id: "child-brand", name: "推荐品牌" }],
   brands: []
}
```

* **Step.5：在`useMenuList`方法中调用`readHotBrands`方法获取数据**

```js
readHotBrands().then(({ data: res, status: status }) => {
    if (status === 200) {
      brand.brands = res.result;
    }
});
```

* **Step.6：在品牌推荐的模板中渲染数据**

```html
<h4>
  分类{{ current.goods ? '商品' : "品牌" }}推荐
  <small>根据您的购买或浏览记录推荐</small>
</h4>
```

```html
 <ul v-if="current.brands">
  <template v-for="item in current.brands" :key="item.id">
    <li class="brand" v-if="Boolean(Number(item.id))" >
      <RouterLink to="/">
        <img :src="item.picture" alt />
        <div class="info">
          <p class="place">
            <i class="iconfont icon-dingwei"></i>
            {{ item.place }}
          </p>
          <p class="name ellipsis">DW</p>
          <p class="desc ellipsis-2">DW品牌闪购</p>
        </div>
      </RouterLink>
    </li>
  </template>
</ul>
```

* **Step.7：实现左侧分类的鼠标移入选中样式**

```css
.menu li:hover,
.menu li.active {
  background-color: var(--theme-color);
}

```

```html
<div class="home-category" @mouseleave="current = null">
  <ul class="menu">
      <!-- 如果鼠标移入的分类就是当前分类就为当前li添加 active 类名 -->
    <li :class="{ active: current?.id && current.id === item.id }"></li>
  <ul>
</div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
