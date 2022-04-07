import { defineStore } from "pinia";
import { readCategories } from "../api/cateAPI"
import { topCategories } from "../api/constantsAPI"
export const useCateStore = defineStore({
  id: "cateStore",
  state: () => ({
    // 存储分类列表
    cateList: topCategories.map((categoryName) => ({ name: categoryName })),
  }),
  actions: {
    // 初始化分类数据
    async initCategories() {
      const { data: res, status: status } = await readCategories();
      // console.log(res);
      res.result.forEach((category) => (category.open = false))
      if (status === 200) {
        this.cateList = res.result;
      }
    },
    // 控制导航下拉菜单的显示
    open(id){
      const target = this.cateList.find((item)=> item.id === id);
      target.open = true;
    },
    // 控制导航下拉菜单的隐藏
    close(id){
      const target = this.cateList.find((item)=> item.id === id);
      target.open = false;
    }
  }
});
