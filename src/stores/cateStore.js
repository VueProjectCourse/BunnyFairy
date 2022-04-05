import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "cartStore",
  state: () => ({
    // 存储分类列表
    list: [],
  }),
});
