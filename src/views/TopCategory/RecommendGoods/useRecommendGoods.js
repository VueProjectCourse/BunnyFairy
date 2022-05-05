import { readCategoryById } from "@/api/categoryAPI";
import { ref } from "vue";

const category = ref(null);

const useCategory = (id) => {
  readCategoryById(id).then(({ data: res, status: status }) => {
    if (status === 200) {
      // 把数据赋值给bannerList
      category.value = res.result;
    }
  });
};

export { category, useCategory };
