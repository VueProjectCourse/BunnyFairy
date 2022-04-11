<script setup>
import HomePanel from '../HomePanel/HomePanel.vue';
import { useHotProduct } from "./useHomeHot"
const { hotList } = useHotProduct()
</script>
<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list" v-if="hotList">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" :alt="item.title" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
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