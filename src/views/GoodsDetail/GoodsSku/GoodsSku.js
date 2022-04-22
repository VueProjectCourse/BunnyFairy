import { ref } from "vue";

// 处理规格选中
export const useSpecSelected = () => {
  // 选中状态
  const specSelet = ref(false);
  // 设置选中状态的方法
  const setSpecSelect = (item, subitem) => {
    if (item.selected) {
      subitem.selected = false;
    } else {
      // 先将该规格中的所有规格取消选中
      item.values.forEach((ele) => {
        ele.selected = false;
      });
      // 将当前用户点击的规格设置为选中
      subitem.selected = true;
    }
  };

  return { specSelet, setSpecSelect };
};
