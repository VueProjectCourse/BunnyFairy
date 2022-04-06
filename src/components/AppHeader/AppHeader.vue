<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
          <a href="#">美食</a>
        </li>
        <li>
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
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i>
          <em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import "@/assets/styles/base.css";
.app-header {
  background: #fff;
}

.app-header .container {
  display: flex;
  align-items: center;
}

.app-header .logo {
  width: 200px;
}

.app-header .logo a {
  display: block;
  height: 132px;
  width: 100%;
  text-indent: -9999px;
  background: url(@/assets/images/logo.png) no-repeat center 18px / contain;
}

.app-header .app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;
}

.app-header .app-header-nav > li {
  margin-right: 40px;
  width: 38px;
  text-align: center;
}

.app-header .app-header-nav > li > a {
  font-size: 16px;
  line-height: 32px;
  height: 32px;
  display: inline-block;
}

.app-header .app-header-nav > li > a:hover {
  color: var(--theme-color);
  border-bottom: 1px solid var(--theme-color);
}

.app-header .app-header-nav > li > a:hover > .layer {
  height: 132px;
  opacity: 1;
}
.app-header .search {
  width: 170px;
  height: 32px;
  position: relative;
  border-bottom: 1px solid #e7e7e7;
  line-height: 32px;
}

.app-header .search .icon-search {
  font-size: 18px;
  margin-left: 5px;
}
.app-header .search input {
  width: 140px;
  padding-left: 5px;
  color: #666;
}

.app-header .cart {
  width: 50px;
}

.app-header .cart .curr {
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: relative;
  display: block;
}

.app-header .cart .icon-cart {
  font-size: 22px;
}

.app-header .cart .curr em {
  font-style: normal;
  position: absolute;
  right: 0;
  top: 0;
  padding: 1px 6px;
  line-height: 1;
  background: var(--help-color);
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  font-family: Arail, serif;
}
</style>
