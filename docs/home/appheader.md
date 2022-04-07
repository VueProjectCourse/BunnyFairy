# 头部布局

::: tip 目标
这一小节，我们的目标是完成 完成应用公共头部组件布局。

效果如下：

![头部](./images/26.png)
:::

::: warning 步骤

1. 在`AppHeader`组件中，添加布局代码
2. 在`AppHeader`组件中，添加样式代码
3. 拷贝应用所需图片到`assets/images`文件夹
:::

::: info 体验

* **Step.1：在`AppHeader`组件中，添加布局代码**

  在 `components` 文件夹中 `AppHeader.vue` 文件并加入如下布局

  ```html
  <template>
    <header class="app-header">
      <div class="container">
        <h1 class="logo"><RouterLink to="/"></RouterLink></h1>
        <ul class="app-header-nav">
          <li class="home">
            <RouterLink to="/">首页</RouterLink>
          </li>
          <li><a href="#">美食</a></li>
          <li><a href="#">餐厨</a></li>
          <li><a href="#">艺术</a></li>
          <li><a href="#">电器</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">洗护</a></li>
          <li><a href="#">孕婴</a></li>
          <li><a href="#">服装</a></li>
          <li><a href="#">杂货</a></li>
        </ul>
        <div class="search">
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="搜一搜" />
        </div>
        <div class="cart">
          <a class="curr" href="#">
            <i class="iconfont icon-cart"></i><em>2</em>
          </a>
        </div>
      </div>
    </header>
  </template>
  ```

* **Step.2：在`AppHeader`组件中，添加样式代码**

  在 `components` 文件夹中 `AppHeader.vue` 文件并加入如下样式代码

  ```css
  @import "@/assets/styles/variable.css";
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

  .app-header .app-header-nav > li:hover > .layer {
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
  ```

* **Step.3：拷贝应用所需图片到`assets/images`文件夹**

  将`头部和底部所需图片`文件夹中的图片拷贝到 `src/assets/images` 文件夹中
:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
