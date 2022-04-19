// 导入接口方法
import { readFilterById } from "@/api/categoryAPI";
// 导入 声明响应式变量的方法
import { ref } from "vue";

// 存储筛选条件变量
export const filters = ref(null);

// 声明 骨架屏筛选状态
export const isFilterLoading = ref(false);

// 用于提交给服务器的数据
export const selectedFilters = ref({
  // 品牌id
  brandId: null,
  // 每个选项对象 {
  // 筛选类别的名字groupName
  // 筛选条件的名字 propertyName: }
  attrs: [],
});

// 获取筛选条件数据方法
export const readFilter = (id) => {
  // 调用接口方法获取数据
  isFilterLoading.value = true;
  readFilterById(id).then(({ data: res, status: status }) => {
    if (status === 200) {
      isFilterLoading.value = false;
      // 在品牌中添加一个 全部选项
      res.result.brands.unshift({ id: null, name: "全部" });
      res.result.selectedBrandId = null;
      // 在u其他筛选条件中添加 一个 全部 选项
      res.result.saleProperties.forEach((item) => {
        // console.log(item);
        item.properties.unshift({ id: "null", name: "全部" });
        item.selectedFilterName = "全部";
      });
      // 把处理
      filters.value = res.result;
    }
  });
};

// 更新筛选条件
export const updateFilter = (emits) => {
  // 给品牌id赋值
  selectedFilters.value.brandId = filters?.value.selectedBrandId;
  selectedFilters.value.attrs = [];
  filters.value.saleProperties.forEach((item) => {
    if (item.selectedFilterName && item.selectedFilterName !== "全部") {
      selectedFilters.value.attrs.push({
        groupName: item.name,
        propertyName: item.selectedFilterName,
      });
    }
  });

  // 把更新完的筛选条件传给父组件
  emits("onFilterParamsChanged", selectedFilters.value);
};
