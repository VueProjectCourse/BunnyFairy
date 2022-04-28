# QQ登录-准备回调路由组件

::: tip 目标
这一小节，我们的目标是准备QQ登录回调页面组件、准备绑定手机号组件、准备完善信息组件

示例如下：
![56](./images/56.png)
:::

::: warning 步骤

1. 创建回调页面路由组件, 实现基础布局
2. 配置登录回调页面的路由规则
3. 创建用于实现绑定手机号的表单组件
4. 创建用于实现完善用户信息表单组件 (注册账号, 绑定QQ)
5. 添加表单公共表单样式
6. 实现绑定手机号和完善用户信息两个组件的切换效果
:::

::: info 体验

* **Step.1：创建回调页面路由组件, 实现基础布局**

```html
<template>
  <LoginHeader>联合登录</LoginHeader>
  <section class="container">
    <nav class="tab">
      <a class="active" href="javascript:">
        <i class="iconfont icon-bind"></i>
        <span>已有小兔鲜账号，请绑定手机</span>
      </a>
      <a href="javascript:">
        <i class="iconfont icon-edit"></i>
        <span>没有小兔鲜账号，请完善资料</span>
      </a>
    </nav>
    <div class="tab-content"></div>
    <div class="tab-content"></div>
  </section>
  <LoginFooter />
</template>

```

```css
@import "@/assets/styles/variable.css";
.container {
  padding: 25px 0;
  position: relative;
  height: 730px;
}

.tab {
  background: #fff;
  height: 80px;
  padding-top: 40px;
  font-size: 18px;
  text-align: center;
}
.tab a {
  color: #666;
  display: inline-block;
  width: 350px;
  line-height: 40px;
  border-bottom: 2px solid #e4e4e4;
}
.tab a i {
  font-size: 22px;
  vertical-align: middle;
}
.tab a span {
  vertical-align: middle;
  margin-left: 4px;
}
.tab a.active {
  color: var(--primary-color);
  border-color: var(--primary-color);
}
.tab-content {
  min-height: 600px;
  background: #fff;
}
```

* **Step.2：配置登录回调页面的路由规则**

```js
 {
    path: "/login/callback",
    component: () => import("@/views/login/LoginCallback/LoginCallback.vue"),
  },
```

* **Step.3：创建用于实现绑定手机号的表单组件**

```html
<template>
  <form class="xtx-form">
    <div class="user-info">
      <img
        src="http://qzapp.qlogo.cn/qzapp/101941968/57C7969540F9D3532451374AA127EE5B/50"
        alt=""
      />
      <p>Hi，Tom 欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~</p>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input class="input" type="text" placeholder="绑定的手机号" />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input class="input" type="text" placeholder="短信验证码" />
        <span class="code">发送验证码</span>
      </div>
      <div class="error"></div>
    </div>
    <input type="submit" class="submit" value="立即绑定" />
  </form>
</template>

```

```css
.user-info {
  width: 320px;
  height: 70px;
  display: flex;
  background: #f2f2f2;
  align-items: center;
  padding: 0 10px;
  margin: 0 auto 20px;
}
.user-info img {
  background: #f2f2f2;
  width: 50px;
  height: 50px;
}
.user-info p {
  padding-left: 10px;
}
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 80px;
  color: #999;
}
.code:hover {
  cursor: pointer;
}
```

* **Step.4：创建用于实现完善用户信息表单组件 (注册账号, 绑定QQ)**

```html
<template>
  <form class="xtx-form">
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-user"></i>
        <input class="input" type="text" placeholder="请输入用户名" />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input class="input" type="text" placeholder="请输入手机号" />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input class="input" type="text" placeholder="请输入验证码" />
        <span class="code">发送验证码</span>
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input class="input" type="password" placeholder="请输入密码" />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input class="input" type="password" placeholder="请确认密码" />
      </div>
      <div class="error"></div>
    </div>
    <input type="submit" class="submit" value="立即绑定" />
  </form>
</template>
```

```css
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 80px;
  color: #999;
}
.code:hover {
  cursor: pointer;
}
```

* **Step.5：添加表单公共表单样式**

```css

.xtx-form {
  padding: 50px 0;
}
.xtx-form-item {
  display: flex;
  align-items: center;
  width: 700px;
  margin: 0 auto;
  padding-bottom: 25px;
}
.xtx-form-item .label {
  width: 180px;
  padding-right: 10px;
  text-align: right;
  color: #999;
}
.xtx-form-item .label ~ .field {
  margin-left: 0;
}
.xtx-form-item .field {
  width: 320px;
  height: 50px;
  position: relative;
  margin-left: 190px;
}
.xtx-form-item .field .icon {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #999;
}
.xtx-form-item .field .icon ~ .input {
  padding-left: 40px;
}
.xtx-form-item .field .input {
  border: 1px solid #e4e4e4;
  width: 320px;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
}
.xtx-form-item .field .input.err {
  border-color: #CF4444;
}
.xtx-form-item .field .input:focus,
.xtx-form-item .field .input:active {
  border-color: #27BA9B;
}
.xtx-form-item .field .checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid #e4e4e4;
  margin-top: 15px;
}
.xtx-form-item .field .checkbox:checked {
  border-color: transparent;
  color: #27BA9B;
}
.xtx-form-item .field .checkbox:checked::after {
  content: "✅";
}
.xtx-form-item .error {
  width: 180px;
  padding-left: 10px;
  color: #CF4444;
}
.xtx-form .submit {
  width: 320px;
  height: 50px;
  border-radius: 4px;
  background: #27BA9B;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  display: block;
  margin: 0 auto;
  border: none;
}

```

* **Step.6：实现绑定手机号和完善用户信息两个组件的切换效果**

```js
const hasAccount = ref(true)
```

```html
<a @click="hasAccount = true" :class="{ active: hasAccount }">
  <i class="iconfont icon-bind"></i>
  <span>已有小兔鲜账号，请绑定手机</span>
</a>
<a @click="hasAccount = false" :class="{ active: !hasAccount }">
  <i class="iconfont icon-edit"></i>
  <span>没有小兔鲜账号，请完善资料</span>
</a>
<div class="tab-content" v-if="hasAccount">
  <LoginCallbackBindPhone />
</div>
<div class="tab-content" v-if="!hasAccount">
  <LoginCallbackBindPatch />
</div>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
