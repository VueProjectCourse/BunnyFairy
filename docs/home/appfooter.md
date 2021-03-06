# 底部布局

::: tip 目标
这一小节，我们的目标是完成应用公共底部组件布局，示例如下：

![footer](./images/27.png)
:::

::: warning 步骤

1. 在`AppFooter` 文件加入布局代码
2. 在`AppFooter` 文件加入样式代码
:::

::: info 体验

* **Step.1：在`AppFooter` 文件加入布局代码**

  ```html
  <template>
    <footer class="app-footer">
      <!-- 联系我们 -->
      <div class="contact">
        <div class="container">
          <dl>
            <dt>客户服务</dt>
            <dd>
              <i class="iconfont icon-kefu"></i> 在线客服
            </dd>
            <dd>
              <i class="iconfont icon-question"></i> 问题反馈
            </dd>
          </dl>
          <dl>
            <dt>关注我们</dt>
            <dd>
              <i class="iconfont icon-weixin"></i> 公众号
            </dd>
            <dd>
              <i class="iconfont icon-weibo"></i> 微博
            </dd>
          </dl>
          <dl>
            <dt>下载APP</dt>
            <dd class="qrcode">
              <img src="@/assets/images/qrcode.jpg" alt />
            </dd>
            <dd class="download">
              <span>扫描二维码</span>
              <span>立马下载APP</span>
              <a href="javascript:">下载页面</a>
            </dd>
          </dl>
          <dl>
            <dt>服务热线</dt>
            <dd class="hotline">
              400-0000-000
              <small>周一至周日 8:00-18:00</small>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 其它 -->
      <div class="extra">
        <div class="container">
          <div class="slogan">
            <a href="javascript:">
              <i class="iconfont icon-footer01"></i>
              <span>价格亲民</span>
            </a>
            <a href="javascript:">
              <i class="iconfont icon-footer02"></i>
              <span>物流快捷</span>
            </a>
            <a href="javascript:">
              <i class="iconfont icon-footer03"></i>
              <span>品质新鲜</span>
            </a>
          </div>
          <!-- 版权信息 -->
          <div class="copyright">
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
        </div>
      </div>
    </footer>
  </template>
  ```

* **Step.2：在`AppFooter` 文件加入样式代码**

  ```html
  <style scoped>
  @import "@/assets/styles/variable.css";
  .app-footer {
    overflow: hidden;
    background-color: #f5f5f5;
    padding-top: 20px;
  }
  .app-footer .contact {
    background-color: #fff;
  }
  .app-footer .contact .container {
    padding: 60px 0 40px 25px;
    display: flex;
  }
  .app-footer .contact dl {
    height: 190px;
    text-align: center;
    padding: 0 72px;
    border-right: 1px solid #f2f2f2;
    color: #999;
  }
  .app-footer .contact dl:first-child {
    padding-left: 0;
  }
  .app-footer .contact dl:last-child {
    border-right: none;
    padding-right: 0;
  }
  .app-footer .contact dt {
    line-height: 1;
    font-size: 18px;
  }
  .app-footer .contact dd {
    margin: 36px 12px 0 0;
    float: left;
    width: 92px;
    height: 92px;
    padding-top: 10px;
    border: 1px solid #ededed;
  }
  .app-footer .contact dd .iconfont {
    font-size: 36px;
    display: block;
    color: #666;
  }
  .app-footer .contact dd:hover .iconfont {
    color: var( --primary-color);
  }
  .app-footer .contact dd:last-child {
    margin-right: 0;
  }
  .app-footer .contact .qrcode {
    width: 92px;
    height: 92px;
    padding: 7px;
    border: 1px solid #ededed;
  }
  .app-footer .contact .download {
    padding-top: 5px;
    font-size: 14px;
    width: auto;
    height: auto;
    border: none;
  }
  .app-footer .contact .download span {
    display: block;
  }
  .app-footer .contact .download a {
    display: block;
    line-height: 1;
    padding: 10px 25px;
    margin-top: 5px;
    color: #fff;
    border-radius: 2px;
    background-color: var(--primary-color);
  }
  .app-footer .contact .hotline {
    padding-top: 20px;
    font-size: 22px;
    color: #666;
    width: auto;
    height: auto;
    border: none;
  }
  .app-footer .contact .hotline small {
    display: block;
    font-size: 15px;
    color: #999;
  }
  .app-footer .extra {
    background-color: #333;
  }
  .app-footer .slogan {
    /* height: 178px; */
    line-height: 58px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;
  }
  .app-footer .slogan a {
    height: 58px;
    line-height: 58px;
    color: #fff;
    font-size: 28px;
  }
  .app-footer .slogan a i {
    font-size: 50px;
    vertical-align: middle;
    margin-right: 10px;
    font-weight: 100;
  }
  .app-footer .slogan a span {
    vertical-align: middle;
    text-shadow: 0 0 1px #333;
  }
  .app-footer .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;
  }
  .app-footer .copyright p {
    line-height: 1;
    margin-bottom: 20px;
  }
  .app-footer .copyright a {
    color: #999;
    line-height: 1;
    padding: 0 10px;
    border-right: 1px solid #999;
  }
  .app-footer .copyright a:last-child {
    border-right: none;
  }
  </style>
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
