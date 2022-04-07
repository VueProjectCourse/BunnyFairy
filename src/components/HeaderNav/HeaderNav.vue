<script setup>
import { useCateStore } from "../../stores/cateStore"
import { storeToRefs } from "pinia"
const { cateList } = storeToRefs(useCateStore())
const cateStore = useCateStore();
</script>
<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li
      v-for="item in cateList"
      :key="item.id"
      @mouseenter="cateStore.open(item.id)"
      @mouseleave="cateStore.close(item.id)"
    >
      <!-- <a href="#">{{item.name}}</a> -->
      <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
      <div class="layer" :class="{ open: item.open }">
        <ul>
          <li v-for="subitem in item.children" :key="subitem.id" @click="cateStore.close(item.id)">
            <RouterLink :to="`/category/sub/${subitem.id}`">
              <img :src="subitem.picture" :alt="subitem.name" />
              <p>{{ subitem.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;
}
.app-header-nav > li {
  margin-right: 40px;
  width: 38px;
  text-align: center;
}
.app-header-nav > li > a {
  font-size: 16px;
  line-height: 32px;
  height: 32px;
  display: inline-block;
}
.app-header-nav > li:hover > a {
  color: var(--theme-color);
  border-bottom: 1px solid var(--theme-color);
}
/* .app-header-nav > li:hover > .layer {
  height: 132px;
  opacity: 1;
} */

.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
}

.layer.open {
  height: 132px;
  opacity: 1;
}

.layer ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0 70px;
  align-items: center;
  height: 132px;
}
.layer ul li {
  width: 110px;
  text-align: center;
}
.layer ul li img {
  width: 60px;
  height: 60px;
}
.layer ul li p {
  padding-top: 10px;
}
.layer ul li:hover p {
  color: var(--theme-color);
}
</style>