import { useRoute } from "vue-router";
import { useCateStore } from "@/stores/cateStore";
import { storeToRefs } from "pinia";
import { ref, watchEffect } from "vue";
import { readGoodsReq } from "../../api/categoryAPI";

export const useBread = () => {
  // 获取路由信息对象
  const route = useRoute();
  // 获取分类信息store
  const { cateList } = storeToRefs(useCateStore());
  // 当前访问分类信息
  const topCate = ref(null);
  const subCate = ref(null);

  watchEffect(() => {
    cateList.value.forEach((item) => {
      item.children?.forEach((subitem) => {
        if (subitem.id == route.params.id) {
          topCate.value = item;
          subCate.value = subitem;
        }
      });
    });
  });

  return { topCate, subCate };
};

export const reqParams = ref({
  categoryId: null,
});

export const useGoods = (params) => {
  // 用于存储商品数据
  const result = ref(null);
  readGoodsReq(params).then(({ data: res, status: status }) => {
    if (status === 200) {
      result.value = res.result;
    }
  });

  return { result };
};

export const useFilterSortParamsChanged = (target) => {
  reqParams.value = { ...reqParams.value, ...target };
};
