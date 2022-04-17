import { ref } from "vue";
import { readFilterById } from "@/api/categoryAPI";

export const filters = ref(null);
// 用于存储筛选数据的加载状态
export const filtersLoading = ref(false);
export const selectedFilters = ref({
  brandId: null,
  attrs: [],
});
export const readFilter = (paramId) => {
  filtersLoading.value = true;
  readFilterById(paramId).then(({ data: res, status: status }) => {
    if (status === 200) {
      // console.log(res.result);
      filtersLoading.value = false;
      res.result.brands.unshift({ id: null, name: "全部" });

      res.result.selectedBrandId = null;

      res.result.saleProperties.forEach((item) => {
        item.properties.unshift({ id: null, name: "全部" });
        item.selectedFilterName = "全部";
      });
      filters.value = res.result;
    }
  });
  return { filters };
};

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

  console.log(selectedFilters.value);
};
