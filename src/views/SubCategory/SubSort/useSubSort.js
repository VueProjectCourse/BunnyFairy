import { ref } from "vue";

export const subSort = () => {
  // 状态
  const sortParams = ref({
    sortField: "",
    sortMethod: "desc",
    inventory: false,
    onlyDiscount: false,
  });
  // 改变状态的方法
  const setSortParams = (emits, target) => {
    sortParams.value = { ...sortParams.value, ...target };

    emits("onSortParamsChanged", sortParams.value);
  };

  return { sortParams, setSortParams };
};
