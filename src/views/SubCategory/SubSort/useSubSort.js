import { ref } from "vue";

export const sortParams = ref({
  sortField: "",
  sortMethod: "desc",
  inventory: false,
  onlyDiscount: false,
});

export const setSortParams = (emits, target) => {
  console.log(target);
  // 更新筛选条件
  sortParams.value = { ...sortParams.value, ...target };
  // 将筛选条件传递到父组件
  emits("onSortParamsChanged", sortParams.value);
};
