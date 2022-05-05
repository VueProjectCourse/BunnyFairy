import { reactive } from "vue";
import powerSet from "@/utils/power-set";
// 规格选中
export const useSpecSelect = () => {
  const setSpecSelect = (spac, value) => {
    // 如果用户点击的规格已经是选中的
    if (value.selected) {
      // 让其取消选中
      value.selected = false;
    } else {
      // 先将该规格中的所有规格取消选中
      spac.values.forEach((item) => (item.selected = false));
      // 将当前用户点击的规格设置为选中
      value.selected = true;
    }
  };

  // 刚进入页面时 默认选中
  const setSpecDefaultSelect = (skuId, skus, specs) => {
    // 如果没有传递skuiid 代表不需要默认选中
    if (!skuId) return;

    // 如果传递了 那么通过skuid去skus中找到那个商品的规格
    const target = skus
      .find((sku) => sku.id === skuId)
      .specs.map((spec) => spec.valueName);

    // 拿着这个规格去specs里面看看是否包括整个规格
    specs.forEach((spec) => {
      // console.log(spec);
      spec.values.forEach((value) => {
        // console.log(value);
        // console.log(target.includes(value.name));
        if (target.includes(value.name)) {
          value.selected = true;
        }
      });
    });
    // 如果包括就选中
  };

  return { setSpecSelect, setSpecDefaultSelect };
};

// 规格查询对象
export const useSpecPathMap = () => {
  // 规格查询对象
  const specPathMap = reactive({});
  // 改变规格查询对象的方法
  const setSpecPathMap = (skus) => {
    // 遍历 skus中的元素
    skus.forEach((sku) => {
      // 删除 库存为0的规格
      if (sku.inventory > 0) {
        // console.log(sku);
        // 把库存不为0的数据的规格名称 放到一个数组中
        const valueNames = sku.specs.map((spec) => spec.valueName);
        // 获取数组的length
        const max = valueNames.length;
        // 获取笛卡尔积排列组合(非常复杂 幂集算法)
        const sets = powerSet(valueNames);

        // console.log(sets);
        // 遍历 sets 作用: 把所有不重复的规格组合添加到specPathMap
        sets.forEach((set) => {
          // 获取 有货物的规格
          const key = set.join("_");
          // 判断规格是否完整
          const isCompleteSku = max === set.length;

          if (!(key in specPathMap)) {
            // 这样的规格在不在 规格查询对象
            if (isCompleteSku) {
              // 如果不在 并且有货物 那么就设置进去
              specPathMap[key] = sku.id;
            } else {
              specPathMap[key] = null;
            }
          }
        });
      }
    });
  };

  return { specPathMap, setSpecPathMap };
};

// 默认禁止选中
export const useSpecDisable = () => {
  // 设置禁止选中的方法
  const setSpecDisable = (specs, specPathMap, setUserSelect) => {
    // // 遍历specs
    // specs.forEach((spec) => {
    //   // 再次遍历
    //   spec.values.forEach((value) => {
    //     if (value.disabled) {
    //       return;
    //     } else {
    //       value.disabled = !(value.name in specPathMap);
    //     }
    //   });
    // });

    // 有了用户选择之后的规格禁用

    specs.forEach((spac, index) => {
      const selected = setUserSelect(specs);
      // console.log(spac);
      spac.values.forEach((value) => {
        // 如果某一个规格已经是true了,说明可以被选中
        if (value.selected) return;
        selected[index] = value.name;

        // console.log(selected);
        const key = selected.filter((item) => item).join("_");

        value.disabled = !(key in specPathMap);
      });
    });
  };

  return { setSpecDisable };
};

// 处理用户选择
export const useUserSelect = () => {
  const setUserSelect = (specs) => {
    // 声明一个 存储用户选择规格的数组
    const result = [];
    // 遍历 找到 哪一个规格含有 selected属性
    specs.forEach((spec, index) => {
      // 如果selected为true 那么就把该规格的name属性添加到数组中
      // 如果为false 那么就设置为undefined
      // console.log(spec, index);
      const selected = spec.values.find((value) => value.selected);

      if (selected) {
        result[index] = selected.name;
      } else {
        result[index] = undefined;
      }
    });
    return result;
  };

  return { setUserSelect };
};

// 回传数据
export const useDataToParent = (setUserSelect) => {
  const setDataToParent = (specs, skus, emit, specPathMap) => {
    // console.log(specs, skus, emit, specPathMap, setUserSelect);

    // 获取到用户选择的规格名称数组
    const selected = setUserSelect(specs).filter((item) => item);

    if (selected.length === specs.length) {
      // 把skuid发送到父组件
      const skuId = specPathMap[selected.join("_")];
      // 该sku
      const target = skus.find((sku) => sku.id === skuId);
      // 发送数据
      emit("on-spec-changed", {
        skuId,
        price: target.price,
        oldPrice: target.oldPrice,
        inventory: target.inventory,
        specsText: target.specs
          .map((spec) => `${spec.name}: ${spec.valueName}`)
          .join(" "),
      });
    }
  };

  return { setDataToParent };
};
