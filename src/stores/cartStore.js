import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "cartStore",
  state: () => ({
    // 存储购物车列表
    list: [],
  }),
  getters: {},
  actions: {},
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
