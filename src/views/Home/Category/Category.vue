<script setup>
import { ref } from "vue";
import { useMenuList } from "./useMenuList";
// import MenuSkeleton from "../MenuSkeleton/MenuSkeleton.vue";
const { menuList } = useMenuList();
// 用于存储当前用户鼠标移入的左侧一级分类
const current = ref(null);
</script>
<template>
  <div class="home-category" @mouseleave="current = null">
    <ul class="menu" v-if="menuList">
      <li
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="current = item"
        :class="{ active: current?.id && current.id === item.id }"
      >
        <RouterLink to="/">{{ item.name }}</RouterLink>

        <template v-if="item.children">
          <RouterLink
            to="/"
            v-for="subitem in item.children"
            :key="subitem.id"
            >{{ subitem.name }}</RouterLink
          >
        </template>

        <template v-else>
          <MenuSkeleton
            animated="fade"
            width="60px"
            height="18px"
            bg="rgba(255,255,255,0.2)"
            style="margin-right: 5px"
          >
          </MenuSkeleton>
          <MenuSkeleton
            animated="fade"
            width="60px"
            height="18px"
            bg="rgba(255,255,255,0.2)"
          ></MenuSkeleton>
        </template>
      </li>
    </ul>
    <!-- 分类列表商品推荐 -->
    <div class="layer" v-if="current">
      <h4>
        分类{{ current.goods ? "商品" : "品牌" }}推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <!--商品推荐 -->
      <ul>
        <li v-for="goods in current.goods" :key="goods.id">
          <RouterLink to="/">
            <img :src="goods.picture" :alt="goods.name" />
            <div class="info">
              <p class="name ellipsis-2">{{ goods.name }}</p>
              <p class="desc ellipsis">{{ goods.desc }}</p>
              <p class="price">
                <i>¥</i>
                {{ goods.price }}
              </p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul v-if="current.brands">
        <template v-for="item in current.brands" :key="item.id">
          <li class="brand" v-if="Boolean(Number(item.id))">
            <RouterLink to="/">
              <img :src="item.picture" alt />
              <div class="info">
                <p class="place">
                  <i class="iconfont icon-dingwei"></i>
                  {{ item.place }}
                </p>
                <p class="name ellipsis">DW</p>
                <p class="desc ellipsis-2">DW品牌闪购</p>
              </div>
            </RouterLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
}

.menu li {
  padding-left: 40px;
  height: 50px;
  line-height: 50px;
}

.menu li:hover {
  background-color: var(--primary-color);
}

.menu li a {
  margin-right: 4px;
  color: #fff;
}

.menu li a:first-child {
  font-size: 16px;
}

.layer {
  width: 990px;
  height: 500px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  display: none;
  padding: 0 15px;
  /* overflow: hidden; */
}

.layer h4 {
  font-size: 20px;
  font-weight: normal;
  line-height: 80px;
}

.layer h4 small {
  font-size: 16px;
  color: #666;
}

.layer ul {
  display: flex;
  flex-wrap: wrap;
}

.layer ul li {
  width: 310px;
  height: 120px;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
}

.layer ul li:nth-child(3n) {
  margin-right: 0;
}

.layer ul li a {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 10px;
}

.layer ul li a:hover {
  background: #e3f9f4;
}

.layer ul li a img {
  width: 95px;
  height: 95px;
}

/* .layer ul li.brand {
  height: 180px;
}
.layer ul li.brand a {
  align-items: flex-start;
}
.layer ul li.brand a img {
  width: 120px;
  height: 160px;
}
.layer ul li.brand a .info p {
  margin-top: 8px;
}
.layer ul li.brand a .info .place {
  color: #999;
} */

.layer .info {
  padding-left: 10px;
  line-height: 24px;
  width: 190px;
}

.layer .info .name {
  font-size: 16px;
  color: #666;
}

.layer .info .desc {
  color: #999;
}

.layer .info .price {
  font-size: 22px;
  color: var(--price-color);
}

.layer .info .price i {
  font-size: 16px;
}

.home-category:hover .layer {
  display: block;
}

.menu li:hover,
.menu li.active {
  background-color: var(--primary-color);
}
</style>
