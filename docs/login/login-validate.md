# 登录-表单验证

::: tip 目标
这一小节，我们的目标是掌握 vee-validate 表单验证库的使用, 能够对登录表单进行验证

官方网站: [表单验证库 vee-validate](https://vee-validate.logaretm.com/v4/)
:::

::: warning 步骤

1. 安装 `vee-validate`
2. 创建表单字段验证函数
3. 创建账号登录表单验证对象
4. 实现账号表单验证, 处理表单提交
:::

::: info 体验

* **Step.1：安装 `vee-validate`**

```bash
npm install vee-validate@4.4.11`
```

* **Step.2：创建表单字段验证函数**

```js
export function account(value) {
  if (!value) return "请输入用户名";
  if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return "字母开头且6-20个字符";
  return true;
}
export function password(value) {
  if (!value) return "请输入密码";
  if (!/^\w{6,24}$/.test(value)) return "密码是6-24个字符";
  return true;
}
export function mobile(value) {
  if (!value) return "请输入手机号";
  if (!/^1[3-9]\d{9}$/.test(value)) return "手机号格式错误";
  return true;
}
export function code(value) {
  if (!value) return "请输入验证码";
  if (!/^\d{6}$/.test(value)) return "验证码是6个数字";
  return true;
}
export function isAgree(value) {
  if (!value) return "请勾选同意用户协议";
  return true;
}
```

* **Step.3：创建账号登录表单验证对象**

```js
// 账号登录表单验证
// 用于验证账号密码登录表单
export const useAccountValidate = () => {
  // 创建账号登录表单验证表单
  const { handleSubmit: handleAccountSubmit } = useForm({
    // 指定表单中的验证规则
    validationSchema: {
      // 用户名的验证规则
      account,
      password,
      isAgree,
    },
  });
  // 对用户名进行验证
  const { value: accountField, errorMessage: accountError } =
    useField("account");
  // 验证密码
  const { value: passwordField, errorMessage: passwordError } =
    useField("password");
  // 验证是否同意协议
  const { value: accountIsAgreeField, errorMessage: accountIsAgreeError } =
    useField("isAgree");
  return {
    accountField,
    accountError,
    passwordField,
    passwordError,
    accountIsAgreeField,
    accountIsAgreeError,
    handleAccountSubmit,
  };
};
```

* **Step.4：实现账号表单验证, 处理表单提交**

```js
 import { useToggleAccount, useAccountValidate } from "./LoginForm";
const { accountName, setAccountName } = useToggleAccount();

const {
  handleAccountSubmit,
  accountField,
  accountError,
  passwordField,
  passwordError,
  accountIsAgreeField,
  accountIsAgreeError,
} = useAccountValidate();

const onAccountSubmit = handleAccountSubmit((value) => {
  console.log(value);
});
```

```html
<!-- 账户登录 -->
<form @submit="onAccountFormSubmit">
  <input type="text" placeholder="请输入用户名" v-model="accountField" />
  <div class="error" v-if="accountError">{{ accountError }}</div>
  <input type="password" placeholder="请输入密码" v-model="passwordField" />
  <div class="error" v-if="passwordError">{{ passwordError }}</div>
  <XtxCheckbox v-model="accountIsAgreeField" />
  <div class="error" v-if="accountIsAgreeError">{{ accountIsAgreeError }}</div>
  <button type="submit" class="btn">登录</button>
</form>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
