<script setup>
import HomePanel from '../HomePanel/HomePanel.vue';
// import PanelSkeleton from '../PanelSkeleton/PanelSkeleton.vue';

// const { goodsList } = useNewGoods();
// import { useNewGoods } from "./useHomeNew"
import {readNewGoods} from "@/api/homeAPI"
import { lazyData } from "@/utils/useLazyData"
const {target, result:goodsList } = lazyData(readNewGoods);



</script>
<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱" ref="target">
    <template v-slot:right>
      <More />
    </template>
    <template v-slot:default>
      <ul class="goods-list" v-if="goodsList">
        <li v-for="item in goodsList">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
      <Transition name="fade">
        <PanelSkeleton v-if="!goodsList"></PanelSkeleton>
      </Transition>
      
    </template>
  </HomePanel>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
}

.goods-list li {
  width: 306px;
  height: 406px;
  background: #f0f9f4;
  transition: all .5s;
}

.goods-list li:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.goods-list li img {
  width: 306px;
  height: 306px;
}

.goods-list li p {
  font-size: 22px;
  padding: 12px 30px 0 30px;
  text-align: center;
}

.goods-list li .price {
  color: var(--price-color);
}
</style>