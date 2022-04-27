# 登录-手机号登录-登录

::: tip 目标
这一小节，我们的目标是 实现使用手机号进行登录
:::

::: warning 步骤

1. 创建用于实现手机号登录的API接口函数
2. 实现验证码登录
:::

::: info 体验

* **Step.1：创建用于实现手机号登录的API接口函数**

```js
/**
 * 手机号登录
 * @param mobile 手机号
 * @param code 验证码
 * @return {AxiosPromise}
 */
export function loginByMobileMsgCode({ mobile, code }) {
  return request("/login/code", "post", { mobile, code });
}
```

* **Step.2：实现验证码登录**

```js
import { loginByMobileMsgCode } from "@/api/user";
export default {
  setup () {
    // 处理手机号登录表单提交
    const onMobileFormSubmit = mobileFormHandleSubmit(({ mobile, code }) => {
      // 发送请求进行账号密码登录
      loginByMobileMsgCode({ mobile, code })
        // 登录成功
        .then(loginSuccessful)
        // 登录失败
        .catch(loginFailed);
    });
  }
}
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
