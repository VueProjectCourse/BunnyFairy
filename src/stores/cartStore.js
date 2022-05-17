import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
import { updateLocalCart, setMergeCart, getCartList } from "../api/cartAPI";
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
    // 全选、全不选按钮的状态
    selectAllButtonStatus() {
      return (
        this.effectiveGoodsList.length > 0 &&
        this.userSelectedGoodsList.length === this.effectiveGoodsList.length
      );
    },
  },
  actions: {
    // 把商品添加到购物车
    addGoodsToCart(goods) {
      const userStore = useUserStore();
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
    // 更新商品列表
    async updateCartList() {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
        // 获取服务器端购物车列表数据
        let data = await getCartList();
        // 将服务器端购物车列表数据存储到 vuex 中
        this.list = data.data.result;
      } else {
        // 如果没有登陆怎么办

        // 声明一个数组 用来装 异步请求

        // 把每个请求都遍历发起
        const arrayPromise = this.list.map((goods) =>
          updateLocalCart(goods.skuId)
        );

        // 使用promise.all
        Promise.all(arrayPromise).then((data) => {
          // console.log(data)
          data.forEach((item, index) => {
            // console.log(item);
            item.data.result.skuId = this.list[index].skuId;

            this.list[index] = {
              ...this.list[index],
              ...item.data.result,
            };
          });
        });
      }
    },
    // 更改商品信息(是否选择)
    updateGoodsOfCartBySkuId(partOfGoods) {
      // console.log(partOfGoods)
      // 1. 通过skuId查找到该商品在list中的索引
      const index = this.list.findIndex(
        (item) => item.skuId === partOfGoods.skuId
      );
      // console.log(index);
      // 2， 更改list中的那个商品的selected的值
      // 在vue中这样的写法更好
      // this.list[index].selected = partOfGoods.selected;

      // 更新商品
      // 在react中 只能用下面的方法
      // 编程范式-->数据不可变范式
      //
      this.list[index] = {
        ...this.list[index],
        ...partOfGoods,
      };
    },
    selectIsAll(partOfGoods) {
      // console.log(partOfGoods)
      this.list.forEach((item) => {
        // console.log(item.selected)
        item.selected = partOfGoods.selected;
      });
    },
    //
    deleteGoodsOfCartByUserSelectedOrInvalid(flag) {
      // userSelectedGoodsList
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        this[flag].forEach((item) => {
          this.deleteGoodsOfCartBySkuId(item.skuId);
        });
      }
    },
    changeGoodsCountOfCartBySkuId(skuId, count) {
      this.updateGoodsOfCartBySkuId({ skuId, count });
    },
    updateGoodsOfCartBySkuChanged(partOfGoods) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        console.log(partOfGoods);
        const oldGoods = this.list.find(
          (item) => item.skuId === partOfGoods.oldSkuId
        );

        const newGoods = {
          ...oldGoods,
          skuId: partOfGoods.userSelectedNewSku.value.skuId,
          stock: partOfGoods.userSelectedNewSku.value.inventory,
          oldPrice: partOfGoods.userSelectedNewSku.value.oldPrice,
          nowPrice: partOfGoods.userSelectedNewSku.value.price,
          attrsText: partOfGoods.userSelectedNewSku.value.specsText,
        };

        this.deleteGoodsOfCartBySkuId(partOfGoods.oldSkuId);
        this.addGoodsToCart(newGoods);
      }
    },
    // 合并购物车数据
    async mergeCart() {
      // 判断一下 购物车中有没有数据 如果没有数据 就不需要合并

      // 准备合并购物车所需数据
      const carts = this.list.map((item) => ({
        skuId: item.skuId,
        selected: item.selected,
        count: item.count,
      }));

      try {
        await setMergeCart(carts);

        this.list = [];
      } catch (error) {
        throw new Error(error);
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
