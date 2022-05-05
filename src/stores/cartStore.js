import { defineStore } from "pinia";
import { useUserStore } from "../stores/userStore";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    // 存储商品列表
    list: [],
  }),
  getters: {
    // 可购买商品列表（有效商品 + 商品库存数量大于0）
    effectiveGoodsList(state) {
      return state.list.filter((item) => item.isEffective && item.stock > 0);
    },
    // 可购买商品数量
    effectiveGoodsCount() {
      return this.effectiveGoodsList.reduce(
        (count, item) => count + item.count,
        0
      );
    },
    // 可购买商品总价
    effectiveGoodsPrice() {
      return this.effectiveGoodsList.reduce(
        (price, item) => price + Number(item.nowPrice) * item.count,
        0
      );
    },
  },
  actions: {
    // 添加商品到购物车
    addGoodsToCart(goods) {
      const userStore = useUserStore();
      // 判断用户是否登录
      if (userStore.profile.token) {
        // 登录了
        console.log("登录了");
      } else {
        // 未登录
        // 将商品加入购物车(本地购物车)
        // 在购物车列表中查找当前要添加的商品
        const index = this.list.findIndex((item) => item.skuId === goods.skuId);
        // 如果购物车中已经存在该商品
        if (index > -1) {
          // 商品数量累加
          this.list[index].count += goods.count;
          // 将商品从购物车中删除
          // 再将它重新添加到购物车顶端
          // splice方法的返回值是包含被删除元素的数组
          this.list.unshift(this.list.splice(index, 1)[0]);
          console.log(this.list);
        } else {
          // 将商品直接添加到购物车中
          this.list.unshift(goods);
        }
      }
    },
    // 根据skuId 删除商品
    deleteGoodsOfCartBySkuId(skuId) {
      const userStore = useUserStore();
      console.log(skuId);
      // 获取要被删除商品的索引
      //  判断用户是否登录
      // 判断用户是否登录
      if (userStore.profile.token) {
        // 登录了
        console.log("登录了");
      } else {
        // 获取要被删除的商品的索引
        const index = this.list.findIndex((item) => item.skuId === skuId);

        this.list = [
          ...this.list.slice(0, index),
          ...this.list.slice(index + 1),
        ];
      }
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
