# 二级分类-筛选组件-收集筛选数据

::: tip 目标
这一小节，我们的目标是 实现收集用户选择的筛选条件
:::

::: warning 步骤

1. 声明用户选择的品牌筛选临时存储位置
2. 声明用户选择的其他筛选临时存储位置
3. 点击筛选选项，存储选择项数据
4. 创建存储用户选择的筛选条件对象
5. 创建用于更新选择的筛选条件的方法
6. 点击筛选选项，更新筛选条件
7. 为用户选择的筛选条件添加选中效果

:::

::: info 体验

* **Step.1：声明用户选择的品牌筛选临时存储位置**

```js
export const readFilter = (paramId) => {
  filtersLoading.value = true;
  readFilterById(paramId).then(({ data: res, status: status }) => {
    if (status === 200) {
      res.result.brands.unshift({ id: null, name: "全部" });
      // 声明用户选择的品牌筛选临时存储位置
      res.result.selectedBrandId = null;
      res.result.saleProperties.forEach((item) => {
        item.properties.unshift({ id: null, name: "全部" });
      });
      filters.value = res.result;
    }
  });
  return { filters };
};
```

* **Step.2：声明用户选择的其他筛选临时存储位置**

```js
res.result.saleProperties.forEach((item) => {
  
  item.properties.unshift({ id: null, name: "全部" });
  // 声明用户选择的其他筛选临时存储位置
  item.selectedFilterName = "全部";
});
```

* **Step.3：点击筛选选项，存储选择项数据**

```html
<a @click="filters.selectedBrandId = item.id">{{ brand.name }}</a>
<a @click="item.selectedFilterName = subitem.name">{{ property.name }}</a>
```

* **Step.4：创建存储用户选择的筛选条件对象**

```js
export const selectedFilters = ref({
  brandId: null,
  attrs: [],
});
```

* **Step.5：创建用于更新选择的筛选条件的方法**

```js
export const updateFilter = () => {
  // 汇总用户选择的品牌id
  selectedFilters.value.brandId = filters.value.selectedBrandId;
  selectedFilters.value.attrs = [];
  filters.value.saleProperties.forEach((item) => {
    if (item.selectedFilterName && item.selectedFilterName !== "全部") {
      selectedFilters.value.attrs.push({
        // 筛选类别的名字
        groupName: item.name,
        // 筛选条件的名字
        propertyName: item.selectedFilterName,
      });
    }
  });
};
```

* **Step.6：点击筛选选项，更新筛选条件**

```html
<a
  href="javascript:"
  v-for="item in filters?.brands"
  :key="item.id"
  @click="
    filters.selectedBrandId = item.id;
    updateFilter();
  "
  >{{ item.name }}
</a>



<a
  href="javascript:"
  v-for="subitem in item?.properties"
  :key="subitem.id"
  @click="
    item.selectedFilterName = subitem.name;
    updateFilter();
  "
  >{{ subitem.name }}
</a>
```

* **Step.7：为用户选择的筛选条件添加选中效果**

```html
<a
  href="javascript:"
  v-for="item in filters?.brands"
  :key="item.id"
  :class="{ active: filters.selectedBrandId === item.id }"
  @click="
    filters.selectedBrandId = item.id;
    updateFilter();
  "
  >{{ item.name }}</a
>


 <a
  href="javascript:"
  v-for="subitem in item?.properties"
  :key="subitem.id"
  :class="{ active: item.selectedFilterName === subitem.name }"
  @click="
    item.selectedFilterName = subitem.name;
    updateFilter();
  "
  >{{ subitem.name }}</a
>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
