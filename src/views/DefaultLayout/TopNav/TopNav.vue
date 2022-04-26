<script setup>
defineProps([""]);
</script>
<template>
  <nav class="app-top-nav">
    <div class="container">
      <ul>
        <li>
          <a href="javascript:"><i class="iconfont icon-user"></i>周杰伦</a>
        </li>
        <li>
          <a href="javascript:">退出登录</a>
        </li>
        <li>
          <!-- <a href="javascript:">请先登录</a> -->
          <router-link to="/login">请先登录</router-link>
        </li>
        <li>
          <a href="javascript:">免费注册</a>
        </li>
        <li>
          <a href="javascript:">我的订单</a>
        </li>
        <li>
          <a href="javascript:">会员中心</a>
        </li>
        <li>
          <a href="javascript:">帮助中心</a>
        </li>
        <li>
          <a href="javascript:">关于我们</a>
        </li>
        <li>
          <a href="javascript:"> <i class="iconfont icon-phone"></i>手机版 </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.app-top-nav {
  background-color: #333;
}

.app-top-nav ul {
  display: flex;
  height: 53px;
  justify-content: flex-end;
  align-items: center;
}

.app-top-nav ul a {
  padding: 0 15px;
  color: #cdcdcd;
  line-height: 1;
  display: inline-block;
}

.app-top-nav ul a:hover {
  color: var(--primary-color);
}

.app-top-nav li ~ li a {
  border-left: 2px solid #666;
}

.app-top-nav ul i {
  font-size: 14px;
  margin-right: 2px;
}
</style>
