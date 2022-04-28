# 登录-账号密码登录

::: tip 目标
这一小节，我们的目标是实现账号密码登录功能
:::

::: warning 步骤

1. 使用 POSTMAN 接口测试工具临时注册账号供登录功能使用
2. 创建用于实现账号密码登录的API接口函数
3. 当用户提交账号登录表单时向服务器端发送请求实现账号登录
4. 处理登录成功和登录失败的结果
:::

::: info 体验

* **Step.1：使用 POSTMAN 接口测试工具临时注册账号供登录功能使用**

  ```text
  http://pcapi-xiaotuxian-front-devtest.itheima.net/register/code?mobile=18000000002
  ```

  ```text

  http://pcapi-xiaotuxian-front-devtest.itheima.net/register

  {
  "account": "testLogin04",
  "password": "123456",
  "code": "123456",
  "mobile": "18000000004"
  }
  ```

* **Step.2：创建用于实现账号密码登录的API接口函数**

```js

// create(add)增 delete(remove)删 update(edit)改  read(find)查
import request from "@/utils/request";
/**
 * 账号密码登录
 * @param account 用户名或手机号
 * @param password 密码
 * @return {AxiosPromise}
 */
export const loginByAccountAndPassword = ({ account, password }) => {
  return request.post("/login", { account, password });
};



```

* **Step.3：当用户提交账号登录表单时向服务器端发送请求实现账号登录**

```js
import { useLoginWay, useAccountValidate, useAccountLogin } from "./LoginForm";


const { setAccountLogin } = useAccountLogin();

// 只有所有表单规则都验证通过了 在点击提交的时候 才可以触发
const onAccountSubmit = handleAccountSubmit((values) => {
  // values 就是登陆所需的参数
  setAccountLogin(values);
});
```

* **Step.4：处理登录成功和登录失败的结果**

```js
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { loginByAccountAndPassword } from "@/api/loginAPI";
import Message from "@/components/Message/Message";

// 账号登陆的功能

export const useAccountLogin = () => {
  // vue-router 用的是provide inject
  // 注意 useRouter方法 必须在setup内执行 或者是 函数式组件
  const router = useRouter();
  // route 和 router
  // route 获取 路由里面的信息的
  // router 是路由对象 专门用来改变路由的 里面有 改变路由的方法 route里面全部是属性
  // console.log(router);

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

  // 登陆方法
  const setAccountLogin = (loginParams) => {
    loginByAccountAndPassword(loginParams).then(successFn).catch(failFn);
  };

  return { setAccountLogin };
};

```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
