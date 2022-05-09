<script setup>
//从cateStore中解构出useCateStore方法
import { useCateStore } from "@/stores/cateStore";
// 从pinia中解构出storeToRefs方法 因为该方法可以让store中的state保持响应性
import { storeToRefs } from "pinia";
// 把存储分类数据的数组解构出来 准备给 模板使用
const { cateList } = storeToRefs(useCateStore());
const cateStore = useCateStore();
</script>

<template>
  <ul class="app-header-nav">
    <!-- 首页的超链接 不需要添加 二级分类 -->
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <!-- 第一层for循环渲染 一级分类 -->
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
          <!-- 第二层for循环 渲染 二级分类 -->
          <li
            v-for="subitem in item.children"
            :key="subitem.id"
            @click="cateStore.close(item.id)"
          >
            <!-- <a href="#"> -->
            <RouterLink :to="`/category/sub/${subitem.id}`">
              <img :src="subitem.picture" :alt="subitem.name" />
              <p>{{ subitem.name }}</p>
              <!-- </a> -->
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
    <!-- <li>
      <a href="#">餐厨</a>
    </li>
    <li>
      <a href="#">艺术</a>
    </li>
    <li>
      <a href="#">电器</a>
    </li>
    <li>
      <a href="#">居家</a>
    </li>
    <li>
      <a href="#">洗护</a>
    </li>
    <li>
      <a href="#">孕婴</a>
    </li>
    <li>
      <a href="#">服装</a>
    </li>
    <li>
      <a href="#">杂货</a>
    </li> -->
  </ul>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
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

.app-header-nav > li > a:hover {
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}

/* 使用css实现的 二级分类的显示和隐藏 */
/* mouseenter mouseleave */
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

/* 当layer添加open类名的时候 添加下面的样式 */
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
  color: var(--primary-color);
}
</style>
