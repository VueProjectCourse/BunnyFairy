<script setup>
defineProps([""]);
</script>
<template>
  <header class="login-header">
    <div class="container">
      <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
      <h3 class="sub"><slot></slot></h3>
      <RouterLink class="entry" to="/">
        进入网站首页
        <i class="iconfont icon-angle-right"></i>
        <i class="iconfont icon-angle-right"></i>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.login-header {
  height: 133px;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.login-header .container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.login-header .logo {
  width: 200px;
}
.login-header .logo a {
  display: block;
  height: 132px;
  width: 100%;
  text-indent: -9999px;
  background-image: url(@/assets/images/logo.png);
  background-repeat: no-repeat;
  background-position: center 18px;
  background-size: contain;
}
.login-header .sub {
  flex: 1;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 38px;
  margin-left: 20px;
  color: #666;
}
.login-header .entry {
  width: 120px;
  margin-bottom: 38px;
  font-size: 16px;
}
.login-header .entry i {
  font-size: 14px;
  color: var(--primary-color);
  letter-spacing: -5px;
}
</style>
