<template>
  <footer class="login-footer">
    <div class="container">
      <p>
        <a href="javascript:">关于我们</a>
        <a href="javascript:">帮助中心</a>
        <a href="javascript:">售后服务</a>
        <a href="javascript:">配送与验收</a>
        <a href="javascript:">商务合作</a>
        <a href="javascript:">搜索推荐</a>
        <a href="javascript:">友情链接</a>
      </p>
      <p>CopyRight © 小兔鲜儿</p>
    </div>
  </footer>
</template>

<style scoped>
.login-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 152px;
  padding: 30px 0 50px;
  background: #fff;
}
.login-footer p {
  text-align: center;
  color: #999;
  padding-top: 20px;
}
.login-footer p a {
  line-height: 1;
  padding: 0 10px;
  color: #999;
  display: inline-block;
}
.login-footer p a ~ a {
  border-left: 1px solid #ccc;
}
</style>
