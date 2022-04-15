<script setup>
import Panel from '../Panel/Panel.vue';

import {readSpecial} from "@/api/homeAPI"
import {useLazyData} from "@/utils/lazyData"
const {target, result} = useLazyData(readSpecial);

</script>

<template>
  <Panel title="最新专题" ref="target">
    <template v-slot:right>
      <More />
    </template>
    <template v-slot:default>
      <div class="special-list">
        <div class="special-item" v-for="item in result" :key="item.id">
           <RouterLink to="/">
            <img :src="item.cover" alt="" />
            <div class="meta">
              <p class="title">
                <span class="top ellipsis">{{ item.title }}</span>
                <span class="sub ellipsis">{{ item.summary }}</span>
              </p>
              <span class="price">¥{{ item.lowestPrice }}起</span>
            </div>
          </RouterLink>
          <div class="foot">
            <span class="like"><i class="iconfont icon-hart1"></i>100</span>
            <span class="view"><i class="iconfont icon-see"></i>100</span>
            <span class="reply"><i class="iconfont icon-message"></i>100</span>
          </div>
        </div>
      </div>
    </template>
  </Panel>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.home-panel {
  background: #f5f5f5;
}
.special-list {
  height: 380px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.special-list .special-item {
  width: 404px;
  background: #fff;
  transition: all .5s;
}

.special-list .special-item:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}
.special-list .special-item a {
  display: block;
  width: 100%;
  height: 288px;
  position: relative;
}
.special-list .special-item a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.special-list .special-item a .meta {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 50%);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 288px;
}
.special-list .special-item a .meta .title {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 16px;
  width: 70%;
  height: 70px;
}
.special-list .special-item a .meta .title .top {
  color: #fff;
  font-size: 22px;
  display: block;
}
.special-list .special-item a .meta .title .sub {
  display: block;
  font-size: 19px;
  color: #999;
}
.special-list .special-item a .meta .price {
  position: absolute;
  bottom: 25px;
  right: 16px;
  line-height: 1;
  padding: 4px 8px 4px 7px;
  color: var(--price-color);
  font-size: 17px;
  background-color: #fff;
  border-radius: 2px;
}
.special-list .special-item .foot {
  height: 72px;
  line-height: 72px;
  padding: 0 20px;
  font-size: 16px;
}
.special-list .special-item .foot i {
  display: inline-block;
  width: 15px;
  height: 14px;
  margin-right: 5px;
  color: #999;
}
.special-list .special-item .foot .like,
.special-list .special-item .foot .view {
  float: left;
  margin-right: 25px;
  vertical-align: middle;
}
.special-list .special-item .foot .reply {
  float: right;
  vertical-align: middle;
}
</style>