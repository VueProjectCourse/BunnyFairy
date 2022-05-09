import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    // 存储商品列表
    list: [],
  }),
  getters: {
    // 购物车中的商品列表
    effectiveGoodsList(state) {
      // 返回商品库存大于0且有效的商品列表
      return state.list.filter((item) => item.stock > 0 && item.isEffective);
    },
    // 购物车中的商品数量
    effectiveGoodsCount() {
      // 返回商品库存大于0且有效的商品列表
      return this.effectiveGoodsList.reduce(
        (count, item) => count + item.count,
        0
      );
    },
    // 购物车中的商品总价
    effectiveGoodsPrice() {
      // 返回商品库存大于0且有效的商品列表
      return this.effectiveGoodsList.reduce(
        (price, item) => price + Number(item.nowPrice) * item.count,
        0
      );
    },
    // 无效商品的商品列表
    invalidGoodsList(state) {
      return state.list.filter((item) => item.stock === 0 && !item.isEffective);
    },
    // 用户选择的商品列表
    userSelectedGoodsList(state) {
      return state.list.filter((item) => item.selected);
    },
    // 用户选择的商品数量
    userSelectedGoodsCount() {
      return this.userSelectedGoodsList.reduce(
        (count, item) => count + item.count,
        0
      );
    },
    // 用户选择的商品总价
    userSelectedGoodsPrice() {
      return this.userSelectedGoodsList.reduce(
        (price, item) => price + Number(item.nowPrice) * item.count,
        0
      );
    },
  },
  actions: {
    // 把商品添加到购物车
    addGoodsToCart(goods) {
      const userStore = useUserStore();
      console.log(userStore.profile.token);
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办

        // 找购物车中有没有该商品

        const index = this.list.findIndex((item) => item.skuId === goods.skuId);

        if (index > -1) {
          // 如果有该商品 只需要添加数量 不需要添加商品信息
          goods.count += this.list[index].count;
          // 先要把购物车中的商品删除掉
          this.list.splice(index, 1);
          // 把刚刚添加到的该商品添加到数组的最前面
          this.list.unshift(goods);
        } else {
          // 如果购物车中，没有该商品 直接把该商品添加到购物车就可以了
          // 把马上要选购的商品添加到购物车
          this.list.unshift(goods);
        }
      }
    },
    // 把商品从购物车中删除
    deleteGoodsOfCartBySkuId(skuId) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        const index = this.list.findIndex((item) => item.skuId === skuId);

        this.list.splice(index, 1);
      }
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
