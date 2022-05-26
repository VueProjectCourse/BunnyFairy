<script setup></script>

<template>
  <!-- 概览 -->
  <div class="home-overview">
    <!-- 用户信息 -->
    <div class="user-meta">
      <div class="avatar">
        <img
          src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/avatar_1.png"
          alt=""
        />
      </div>
      <h4>徐菲菲</h4>
    </div>
    <div class="item">
      <a href="javascript:">
        <span class="iconfont icon-hy"></span>
        <p>会员中心</p>
      </a>
      <a href="javascript:">
        <span class="iconfont icon-aq"></span>
        <p>安全设置</p>
      </a>
      <a href="javascript:">
        <span class="iconfont icon-dw"></span>
        <p>地址管理</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.home-overview {
  height: 132px;
  background: url(@/assets/images/center-bg.png) no-repeat center / cover;
  display: flex;
}
.home-overview .user-meta {
  flex: 1;
  display: flex;
  align-items: center;
}
.home-overview .user-meta .avatar {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 60px;
}
.home-overview .user-meta .avatar img {
  width: 100%;
  height: 100%;
}
.home-overview .user-meta h4 {
  padding-left: 26px;
  font-size: 18px;
  font-weight: normal;
  color: white;
}
.home-overview .item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.home-overview .item:first-child {
  border-right: 1px solid #f4f4f4;
}
.home-overview .item a {
  color: white;
  font-size: 16px;
  text-align: center;
}
.home-overview .item a .iconfont {
  font-size: 32px;
}
.home-overview .item a p {
  line-height: 32px;
}
</style>
