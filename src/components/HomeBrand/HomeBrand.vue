<script setup>
import HomePanel from "../HomePanel/HomePanel.vue";
import { readHotBrands } from "../../api/homeAPI"
import { useLazyData } from "../HomeNew/useHomeNew"
import { useToggleEffect } from "./useHomeBrand"
// import MenuSkeleton from "../MenuSkeleton/MenuSkeleton.vue";
const { target, result } = useLazyData(readHotBrands)
const { currentIndex, toggle } = useToggleEffect();
</script>

<template>
  <HomePanel title="热门品牌" subTitle="国际经典 品质保证" ref="target">
    <template #right>
      <a href="javascript:" @click="toggle(-1)" :class="{ disabled: currentIndex === 0 }"
        class="iconfont icon-angle-left prev"></a>
      <a href="javascript:" @click="toggle(1)" :class="{ disabled: currentIndex === 1 }"
        class="iconfont icon-angle-right next"></a>
    </template>
    <template #default>
      <div class="box">
        <Transition>
          <ul v-if="result" class="list" :style="{ transform: `translateX(${-currentIndex * 1240}px)` }">
            <li v-for="item in result" :key="item.id">
              <RouterLink to="/">
                <img :src="item.picture" :alt="item.name" />
              </RouterLink>
            </li>
          </ul>
          <div v-else class="skeleton">
            <MenuSkeleton class="item" v-for="i in 5" :key="i" animated="scroll" bg="#e4e4e4" width="240px" height="305px"></MenuSkeleton>
          </div>
        </Transition>
      </div>
    </template>
  </HomePanel>
</template>


<style scoped>
@import "@/assets/styles/variable.css";

.home-panel {
  background: #f5f5f5;
}

.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background-color: var(--primary-color);
}

.iconfont::before {
  font-size: 12px;
  position: relative;
  top: -2px;
}

.iconfont.disabled {
  background: #ccc;
  cursor: not-allowed;
}

.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
}

.box .list {
  width: 200%;
  display: flex;
  transition: all 1s;
}

.box .list li {
  margin-right: 10px;
  width: 240px;
}

.box .list li:nth-child(5n) {
  margin-right: 0;
}

.box .list li img {
  width: 240px;
  height: 305px;
}

.skeleton {
  width: 100%;
  display: flex;
}

.skeleton .item {
  margin-right: 10px;
}

.skeleton .item:nth-child(5n) {
  margin-right: 0;
}
</style>