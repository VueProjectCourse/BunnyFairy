import { defineStore } from "pinia";
import { updateLocalCart, setMergeCart } from "../api/cartAPI";
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
    // 全选、全不选按钮的状态
    selectAllButtonStatus() {
      // 有效商品的数量和选中商品的数量相等意味着所有有效商品已选中
      // 并且有效商品数量必须大于 0
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
    // 删除用户选择的商品、清空无效商品
    deleteGoodsOfCartByUserSelectedOrInvalid(flag) {
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
    // 更新购物车商品
    async updateCartList() {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        // 遍历购物车中的商品，发送请求获取该商品的最新信息
        const arrayPromise = this.list.map(({ skuId }) =>
          // 将方法调用后返回的 promise 对象存储在一个数组中
          updateLocalCart(skuId)
        );

        // 批量获取多个请求的响应数据，所有响应书就被存储在一个数组中
        Promise.all(arrayPromise).then((data) => {
          data.forEach((item, index) => {
            item.data.result.skuId = this.list[index].skuId;

            this.list[index] = {
              ...this.list[index],
              ...item.data.result,
            };
          });
        });
      }
    },
    updateGoodsOfCartBySkuId(partOfGoods) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        // 根据 skuId在购物车列表中查找哦想要更新的商品
        const index = this.list.findIndex(
          (item) => item.skuId === partOfGoods.skuId
        );
        // 更新商品
        this.list[index] = {
          ...this.list[index],
          ...partOfGoods,
        };
      }
    },
    selectIsAll(isSelected) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        // console.log(isSelected);
        this.list.forEach((item) => {
          const index = this.list.findIndex(
            (subitem) => subitem.skuId === item.skuId
          );
          // 更新商品
          this.list[index] = {
            ...this.list[index],
            selected: isSelected,
          };
        });
      }
    },
    changeGoodsCountOfCartBySkuId(skuId, count) {
      this.updateGoodsOfCartBySkuId({ skuId, count });
    },
    // 商品规格信息发生变化, 更新商品信息
    updateGoodsOfCartBySkuChanged({ oldSkuId, userSelectedNewSku }) {
      const userStore = useUserStore();
      // 判断用户是否登陆
      if (userStore.profile.token) {
        // 如果登陆
      } else {
        // 如果没有登陆怎么办
        // 先根据旧的 skuId 查找商品, 根据旧商品生成新商品, 删除旧商品, 插入新商品
        const oldGoods = this.list.find((item) => item.skuId === oldSkuId);

        const newGoods = {
          ...oldGoods,
          skuId: userSelectedNewSku.skuId,
          stock: userSelectedNewSku.inventory,
          oldPrice: userSelectedNewSku.oldPrice,
          nowPrice: userSelectedNewSku.price,
          attrsText: userSelectedNewSku.specsText,
        };

        console.log(newGoods);

        this.deleteGoodsOfCartBySkuId(oldGoods);
        this.addGoodsToCart(newGoods);
      }
    },
    // 合并购物车
    async mergeCart() {
      console.log(11111);
      // 如果本地购物车中没有数据，不用进行合并
      if (this.list.length === 0) return;
      // 准备合并购物车接口所需数据
      const carts = this.list.map((item) => ({
        skuId: item.skuId,
        selected: item.selected,
        count: item.count,
      }));

      try {
        // 合并购物车
        await setMergeCart(carts);
        // 清空本地购物车
        this.list = [];
      } catch (error) {
        // 购物车合并失败, 抛出异常
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
