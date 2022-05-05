import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    // 存储商品列表
    list: [],
  }),
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
