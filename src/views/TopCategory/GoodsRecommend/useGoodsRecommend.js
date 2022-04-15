import { ref } from "vue";

import { readCategoryById } from "@/api/categoryAPI";

// 存储一级分类具体信息
const category = ref(null);

const readCategory = (id) => {
  // 获取一级分类并存储一级分类
  readCategoryById(id).then(({ data: res, status: status }) => {
    if (status === 200) {
      category.value = res.result;
    }
  });
};

export { category, readCategory };
