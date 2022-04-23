import { reactive, ref } from "vue";
import powerSet from "@/utils/power-set";

// 处理规格选中
export const useSpecSelected = () => {
  // 选中状态
  const specSelet = ref(false);
  // 设置选中状态的方法
  const setSpecSelect = (spec, value) => {
    // if (subitem.disabled) return;

    if (value.selected) {
      value.selected = false;
    } else {
      // 先将该规格中的所有规格取消选中
      spec.values.forEach((ele) => (ele.selected = false));
      // 将当前用户点击的规格设置为选中
      value.selected = true;
    }
  };

  const setSpecDefaultSelect = (skuId, skus, specs) => {
    // 如果skuId 不存在，说明不需要设置默认选中效果
    if (!skuId) return;
    // 根据 skuId 在规格集合中查找默认选中的规格对象
    // 然后遍历其中的specs 返回规格名称数组
    const target = skus
      .find((sku) => sku.id === skuId)
      .specs.map((spec) => spec.valueName);

    // 循环所有的规格选项
    specs.forEach((spec) => {
      spec.values.forEach((value) => {
        if (target.includes(value.name)) {
          value.selected = true;
        }
      });
    });
  };

  return { specSelet, setSpecSelect, setSpecDefaultSelect };
};

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

// 获取用户选中的规格
export const useUserSelected = () => {
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
  // 将数据回传到父组件;
  const setSelectedToParent = (specs, skus, emit, pathMap) => {
    const selected = setUserSelected(specs).filter((item) => item);
    if (selected.length === specs.length) {
      // 将规格名称以下划线进行组合, 组合后将它作为 pathMap 对象的属性, 以获取规格组合的 skuId
      const skuId = pathMap[selected.join("_")];
      // 通过 skuId 在规格集合中查找具体的规格对象信息
      const target = skus.find((sku) => sku.id === skuId);
      // 触发自定义事件将规格信息传递到父组件
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

  return { setUserSelected, setSelectedToParent };
};
