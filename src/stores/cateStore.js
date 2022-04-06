import { defineStore } from "pinia";
import { readCategories } from "../api/cateAPI"
import { topCategories } from "../api/constantsAPI"
export const useCateStore = defineStore({
  id: "cateStore",
  state: () => ({
    // 存储分类列表
    cateList: topCategories.map((categoryName)=>({name: categoryName})),
  }),
  actions: {
    async initCategories() {
      const { data: res, status: status } = await readCategories();
      console.log(res);
      if (status === 200) {
        this.cateList = res.result;
      }
    }
  }
});
