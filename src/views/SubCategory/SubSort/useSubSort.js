import { ref } from "vue";

export const sortParams = ref({
  sortField: "",
  sortMethod: "desc",
  inventory: false,
  onlyDiscount: false,
});

export const updateSortParams = (emits, target) => {
  // 更新筛选条件
  console.log(emits, target);
  sortParams.value = { ...sortParams.value, ...target };
  // 将筛选条件传递到父组件
  emits("onSortParamsChanged", sortParams.value);
};
