<script setup>
import Panel from "../Panel/Panel.vue";
import Goods from "../Goods/Goods.vue";
import { readGoodProducts } from "@/api/homeAPI";
import { useLazyData } from "@/utils/lazyData";
const { target, result } = useLazyData(readGoodProducts);
</script>
<template>
  <div class="home-product" ref="target">
    <Panel :title="item.name" v-for="item in result" :key="item.id">
      <template v-slot:right>
        <div class="sub">
          <RouterLink
            :to="`/category/sub/${sub.id}`"
            v-for="sub in item.children"
            :key="sub.id"
            >{{ sub.name }}
          </RouterLink>
        </div>
        <More :path="`/category/${item.id}`" />
      </template>
      <template v-slot:default>
        <div class="box">
          <RouterLink class="cover" to="/">
            <img v-lazy="item.picture" alt="" />
            <strong class="label">
              <span>{{ item.name }}馆</span>
              <span>{{ item.saleInfo }}</span>
            </strong>
          </RouterLink>
          <ul class="goods-list" v-if="item.goods">
            <li v-for="goods in item.goods" :key="goods.id">
              <Goods :goods="goods" />
            </li>
          </ul>
        </div>
      </template>
    </Panel>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.home-product {
  background: #fff;
  height: 2900px;
}

.home-product .sub {
  margin-bottom: 2px;
}

.home-product .sub a {
  padding: 2px 12px;
  font-size: 16px;
  border-radius: 4px;
}

.home-product .sub a:hover {
  background: var(--primary-color);
  color: #fff;
}

.home-product .sub a:last-child {
  margin-right: 80px;
}

.home-product .box {
  display: flex;
}

.home-product .box .cover {
  width: 240px;
  height: 610px;
  margin-right: 10px;
  position: relative;
}

.home-product .box .cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-product .box .cover .label {
  width: 188px;
  height: 66px;
  display: flex;
  font-size: 18px;
  color: #fff;
  line-height: 66px;
  font-weight: normal;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}

.home-product .box .cover .label span {
  text-align: center;
}

.home-product .box .cover .label span:first-child {
  width: 76px;
  background: rgba(0, 0, 0, 0.9);
}

.home-product .box .cover .label span:last-child {
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
}

.home-product .box .goods-list {
  width: 990px;
  display: flex;
  flex-wrap: wrap;
}

.home-product .box .goods-list li {
  width: 240px;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.home-product .box .goods-list li:nth-last-child(-n + 4) {
  margin-bottom: 0;
}

.home-product .box .goods-list li:nth-child(4n) {
  margin-right: 0;
}
</style>
