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
import { userAccountLogin } from '@/api/user'
import useLoginAfter from '../logic/useLoginAfter'

export default {
  name: 'LoginForm',
  setup () {
      // 由于应用中有多种方式登录, 登录成功和登录失败之后要做的事情都是一样的
      // 所以我们将登录成功和登录失败的回调函数抽取成公共方法
      // 获取登录成功回调函数和登录失败回调函数
    const { loginSuccessful, loginFailed } = useLoginAfter();
      // 账号登录表单提交
    const onAccountFormSubmit = accountFormHandleSubmit(
      ({ account, password }) => {
        // 发送请求进行账号密码登录
        loginByAccountAndPassword({ account, password })
          // 登录成功
          .then(loginSuccessful)
          //  登录失败
          .catch(loginFailed);
      }
    );
  }
}
```

* **Step.4：处理登录成功和登录失败的结果**

```js
import { useStore } from "vuex";
import Message from "@/components/library/Message";
import { useRouter } from "vue-router";

export default function useLoginAfter() {
  // 获取 store 对象
  const store = useStore();
  // 获取 router 对象
  const router = useRouter();
  // 登录成功之后做的事情
  const loginSuccessful = ({ result }) => {
    // 存储用户信息
    store.commit("user/setUser", {
      // 用户id
      id: result.id,
      // 用户头像
      avatar: result.avatar,
      // 用户昵称
      nickname: result.nickname,
      // 用户账号
      account: result.account,
      // 用户手机号
      mobile: result.mobile,
      // 用户登录凭证
      token: result.token,
    });
    // 跳转到首页
    router.push("/").then(() => {
      // 登录成功之后的提示信息
      Message({ type: "success", text: "登录成功" });
    });
  };
  // 登录失败之后做的事情
  const loginFailed = (error) => {
    // 登录失败之后的提示信息
    Message({ type: "error", text: error.response.data.message });
  };

  return { loginSuccessful, loginFailed };
}


```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
