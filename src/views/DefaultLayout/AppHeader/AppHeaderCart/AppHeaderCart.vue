<script setup>
import { useCartStore } from "@/stores/cartStore";
import { storeToRefs } from "pinia";
import {ref} from "vue"
import {useRoute, onBeforeRouteUpdate} from "vue-router"
const cartStore = useCartStore();
const { effectiveGoodsList, effectiveGoodsCount, effectiveGoodsPrice } =
  storeToRefs(useCartStore());
const route = useRoute();

// 当我们刚进入页面的时候
const isCartPage = ref(route.path ==="/cart");
// 当路由发生更新了
onBeforeRouteUpdate((to)=>{
  isCartPage.value = (to.path ==="/cart");
})

</script>

<template>
  <div class="cart">
    <!-- <a class="curr" href="#">
      
    </a> -->

    <RouterLink class="curr" to="/cart">
      <i class="iconfont icon-cart"></i><em>{{ effectiveGoodsCount }}</em>
    </RouterLink>

    <div class="layer" v-if="effectiveGoodsCount > 0 && !isCartPage">
      <div class="list">
        <div class="item" v-for="item in effectiveGoodsList" :key="item.id">
          <RouterLink :to="`/goods/${item.id}`">
            <img :src="item.picture" alt="" />
            <div class="center">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="attr ellipsis">{{ item.attrsText }}</p>
            </div>
            <div class="right">
              <p class="price">¥{{ item.price }}</p>
              <p class="count">x{{ item.count }}</p>
            </div>
          </RouterLink>
          <i
            class="iconfont icon-close-new"
            @click="cartStore.deleteGoodsOfCartBySkuId(item.skuId)"
          ></i>
        </div>
      </div>
      <div class="foot">
        <div class="total">
          <p>共 {{ effectiveGoodsCount }} 件商品</p>
          <p>¥{{ effectiveGoodsPrice }}</p>
        </div>
        <Button type="plain"><RouterLink to="/cart">去购物车结算</RouterLink></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.cart {
  width: 50px;
  position: relative;
  z-index: 600;
}
.cart .curr {
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: relative;
  display: block;
}
.cart .curr .icon-cart {
  font-size: 22px;
}
.cart .curr em {
  font-style: normal;
  position: absolute;
  right: 0;
  top: 0;
  padding: 1px 6px;
  line-height: 1;
  background: var(--help-color);
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  font-family: Arial, serif;
}
.cart:hover .layer {
  opacity: 1;
  transform: none;
}
.cart .layer {
  opacity: 0;
  transition: all 0.4s 0.2s;
  transform: translateY(-200px) scale(1, 0);
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50px;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 4px;
  padding-top: 10px;
}
.cart .layer::before {
  content: "";
  position: absolute;
  right: 14px;
  top: -10px;
  width: 20px;
  height: 20px;
  background: #fff;
  transform: scale(0.6, 1) rotate(45deg);
  box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
}
.cart .layer .foot {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 70px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
  align-items: center;
}
.cart .layer .foot .total {
  padding-left: 10px;
  color: #999;
}
.cart .layer .foot .total p:last-child {
  font-size: 18px;
  color: var(--price-color);
}
.cart .list {
  height: 310px;
  overflow: auto;
  padding: 0 10px;
}
.cart .list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.cart .list::-webkit-scrollbar-track {
  background: #f8f8f8;
  border-radius: 2px;
}
.cart .list::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 10px;
}
.cart .list::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
.cart .list .item {
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 0;
  position: relative;
}
.cart .list .item i {
  position: absolute;
  bottom: 38px;
  right: 0;
  opacity: 0;
  color: #666;
  transition: all 0.5s;
}
.cart .list .item:hover i {
  opacity: 1;
  cursor: pointer;
}
.cart .list .item a {
  display: flex;
  align-items: center;
}
.cart .list .item a img {
  height: 80px;
  width: 80px;
}
.cart .list .item a .center {
  padding: 0 10px;
  width: 200px;
}
.cart .list .item a .center .name {
  font-size: 16px;
}
.cart .list .item a .center .attr {
  color: #999;
  padding-top: 5px;
}
.cart .list .item a .right {
  width: 100px;
  padding-right: 20px;
  text-align: center;
}
.cart .list .item a .right .price {
  font-size: 16px;
  color: var(--price-color);
}
.cart .list .item a .right .count {
  color: #999;
  margin-top: 5px;
  font-size: 16px;
}
</style>
