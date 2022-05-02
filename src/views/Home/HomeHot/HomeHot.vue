<script setup>
import HomePanel from '../HomePanel/HomePanel.vue';
// import PanelSkeleton from '../PanelSkeleton/PanelSkeleton.vue';
// import { useHotProduct } from "./useHomeHot"
// const { hotList } = useHotProduct();
// 引入接口函数
import { readHotProduct } from "@/api/homeAPI"
import { lazyData } from "@/utils/useLazyData"

const { result: hotList, target } = lazyData(readHotProduct)

</script>

<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过" ref="target">
    <ul class="goods-list" v-if="hotList">
      <li v-for="item in hotList">
        <RouterLink to="/">
          <img :src="item.picture" :alt="item.title" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>

    <Transition name="fade">
      <PanelSkeleton v-if="!hotList"></PanelSkeleton>
    </Transition>
  </HomePanel>
</template>
<style scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
}

.goods-list li {
  width: 306px;
  height: 406px;
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
  padding-top: 12px;
  text-align: center;
}

.goods-list li .desc {
  color: #999;
  font-size: 18px;
}
</style>