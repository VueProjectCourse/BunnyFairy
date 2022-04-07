<script setup>
import { useMenuList } from "./useMenuList"
const {menuList} = useMenuList();

</script>
<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in menuList " :key="item.id">
        <RouterLink to="/">{{item.name}}</RouterLink>
        <RouterLink to="/" v-for="subitem in item.children" :key="subitem.id">{{subitem.name}}</RouterLink>
      </li>
    </ul>
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
  background-color: var(--theme-color);
}
.menu li a {
  margin-right: 4px;
  color: #fff;
}
.menu li a:first-child {
  font-size: 16px;
}
</style>