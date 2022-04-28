# QQ登录-获取openid

::: tip 目标
这一小节，我们的目标是QQ登录授权成功后在回跳页面组件中获取QQ用户的唯一标识 openid
:::

::: warning 步骤

1. 为什么要获取 openid
2. 如何获取 openid
:::

::: info 体验

* **Kn.1：为什么要获取 openid**

  当用户使用QQ登录授权成功以后, 会跳转到 LoginCallback 回调页面, 在该页面中我们要做的事情是通过QQ互联提供的API获取用户的唯一的标识, 然后使用该标识去我们自己应用的数据库中查找用户, 如果能够查找到, 说明该用户已经注册过并已经绑定了QQ账号, 此时不需要展示 LoginCallback 组件中的内容直接跳转到首页即可. 如果没有查找到有两种可能, 一是已注册未绑定, 二是未注册, 此时就展示 LoginCallback 组件中的内容. 供用户自己选择, 要么将手机号和QQ号进行绑定, 要么完善信息注册新账号.

* **Kn.2：如何获取 openid**

  根据QQ互联提供的API获取用户的openid

  ```js
  const Login = window.QC.Login;

  if (Login.check()) {
    // 1. 获取地址栏中的 access_token 值
    // 2. 向QQ互联服务器发送请求使用 access_token 换取用户的唯一标识 openid
    // <https://graph.qq.com/oauth2.0/me?access_token=B204C56879FC0C2818AF844746BD6959>
    Login.getMe((openid) => {
      console.log("--------------------------");
      console.log(openid);
    });
  }
  ```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
