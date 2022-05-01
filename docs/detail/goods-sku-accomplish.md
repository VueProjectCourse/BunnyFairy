# 规格组件-禁用效果实现

::: tip 目标
这一小节，我们的目标是实现规格选项的禁用效果

规格组件测试商品: `/goods/1369155859933827074`
接口: `https://apipc-xiaotuxian-front.itheima.net`
:::

::: warning 步骤

1. 创建规格查询对象
2. 实现规格按钮的禁选效果（初始化）
3. 实现规格按钮的禁选效果 (用户选择)
:::

::: info 体验

* **Step.1：创建规格查询对象**

```js
// 处理规格匹配
export const useSpecPathMap = () => {
  // 用于存储最终的规格查询对象
  const pathMap = reactive({});
  // skus
  const setPathMap = (skus) => {
    skus.forEach((sku) => {
      // console.log(sku);
      if (sku.inventory > 0) {
        // console.log(sku);
        // 将可组合的规格名称临时存一份到数组中
        const valueNames = sku.specs.map((spec) => spec.valueName);

        const max = valueNames.length;
        // console.log(max);
        // console.log(valueNames);
        // 获取当前商品的规格数量，后面将用于判断某个规格是否是完整的
        // 获取规格集合的子集组合
        const sets = powerSet(valueNames);
        // console.log(sets);
        // 遍历规格子集组合
        sets.forEach((set) => {
          // console.log(set);
          // 将规格名称以_进行拼接
          const key = set.join("_");
          // console.log(key);
          // 判断当前规格是否是完整的
          // console.log(set.length);
          const isCompleteSku = set.length === max;

          // 判断规格查询对象中是否已经存储了当前规格
          if (!(key in pathMap)) {
            if (isCompleteSku) {
              pathMap[key] = sku.id;
            } else {
              pathMap[key] = null;
            }
          }
        });
      }
    });
  };

  return { pathMap, setPathMap };
};
```

* **Step.2：实现规格按钮的禁选效果（初始化）**

```js
// 处理规格禁用
export const useSpecDisabled = (setUserSelected) => {
  const setSpecDisabled = (specs, pathMap) => {
    // 遍历规格数组
    specs.forEach((spec, index) => {
      // 为什么要在此处获取用户选择的规格?
      // 在每一轮规格匹配的过程中，下面的循环都会向数组中动态添加值
      const selected = setUserSelected(specs);

      spec.values.forEach((value) => {
        if (value.selected) return;

        selected[index] = value.name;

        // 错误代码
        // const key = selected.filter((item) => item.join("_"));
        // 正确代码
        const key = selected.filter((item) => item).join("_");

        value.disabled = !(key in pathMap);
      });
    });
  };

  return { setSpecDisabled };
};
```

```html
<template>
  <div class="goods-sku">
    <dl v-for="spec in specs" :key="spec.name">
      <dt>{{ spec.name }}</dt>
      <dd>
        <template v-for="value in spec.values" :key="value.name">
          <img
            v-if="value.picture"
            :src="value.picture"
            @click="
              setSpecSelect(spec, value);
              setSpecDisabled(props.specs, pathMap);
              // setSelectedToParent(props.specs, props.skus, emit, pathMap);
            "
            :class="{ selected: value.selected, disabled: value.disabled }"
            alt=""
          />
          <span
            @click="
              setSpecSelect(spec, value);
              setSpecDisabled(props.specs, pathMap);
              // setSelectedToParent(props.specs, props.skus, emit, pathMap);
            "
            :class="{ selected: value.selected, disabled: value.disabled }"
            v-else
            >{{ value.name }}</span
          >
        </template>
      </dd>
    </dl>
  </div>
</template>
```

* **Step.3：实现规格按钮的禁选效果 (用户选择)**

```js
 // 用于存储用户选择的规格

  const setUserSelected = (specs) => {
    const result = [];
    specs.forEach((spec, index) => {
      // 在当前规格中查找用户选择的规格
      const selected = spec.values.find((value) => {
        return value.selected;
      });

      // 如果找到了
      if (selected) {
        // 把该规格放在它自己的位置上
        result[index] = selected.name;
      } else {
        result[index] = undefined;
      }
    });

    return result;
  }; 
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
