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

export const loginByMobileMsgCode = ({ mobile, code }) => {
  return request.post("/login/code", { mobile, code });
};
```

* **Step.2：实现验证码登录**

```js
export const useMobileLogin = () => {
  const router = useRouter();
  // 请求成功时的回调
  const successFn = ({ data: res, status: status }) => {
    const { profile } = storeToRefs(useUserStore());
    if (status === 200) {
      // 把用户信息存储到Store中
      profile.value = { ...profile.value, ...res.result };
      // // 判断登陆成功 跳转到首页
      router.push("/").then(() => {
        // 登录成功之后的提示信息
        Message({ type: "success", text: "登录成功" });
      });
    }
  };
  // 登陆失败时的回调
  const failFn = (error) => {
    // console.log(error.response.data.message);
    Message({ type: "error", text: error.response.data.message });
  };
  const setMobileLogin = ({ mobile, code }) => {
    loginByMobileMsgCode({ mobile, code }).then(successFn).catch(failFn);
  };

  return { setMobileLogin };
};

```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
