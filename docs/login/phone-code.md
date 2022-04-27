# 登录-手机号登录-验证码

::: tip 目标
这一小节，我们的目标是 实现获取手机短信验证码, 实现验证码发送后的倒计时效果
:::

::: warning 步骤

1. 创建用于获取手机验证码的API接口函数
2. 点击`获取验证码`按钮, 获取手机验证码
3. 封装公用的倒计时方法
4. 验证码发送成功以后, 开始倒计时
:::

::: info 体验

* **Step.1：创建用于获取手机验证码的API接口函数**

```js
/**
 * 获取验证码 (手机号登录)
 * @param mobile
 * @return {Promise}
 */
export function getLoginMsgCode(mobile) {
  return request("/login/code", "get", { mobile });
}
```

* **Step.2：点击`获取验证码`按钮, 获取手机验证码**

在发送获取手机验证码的请求之前, 需要先验证用户是否输入了手机号, 所以先声明一个验证用户是否输入了手机号的方法.

```js
// LoginForm.vue
// 手机号登录表单验证
function useMobileFormValidate() {
    // 验证手机号
  const { validate: mobileValidate } = useField("mobile");
  // 获取手机号是否验证通过
  const getMobileIsValidate = async () => {
    // 验证手机号, 获取验证结果
    let { valid } = await mobileValidate();
    // 返回验证结果
    return { isValid: valid, mobile: mobileField.value };
  };
  return { getMobileIsValidate }
}
```

为 `获取验证码` 按钮添加点击事件, 事件被触发时验证用户是否输入了手机号, 如果输入了就发送请求获取验证码

```html
<span class="code" @click="getMsgCode">发送验证码</span>
```

```js
import { getLoginMsgCode } from "@/api/user";

export default {
  name: "LoginForm",
  setup() {
      // 获取单独验证手机号是否通过的方法
      const { getMobileIsValidate } = useMobileFormValidate();
      // 获取验证码
    const getMsgCode = async () => {
      // 对手机号进行验证
      let { isValid, mobile } = await getMobileIsValidate();
      // 如果用户输入了手机号
      if (isValid) {
        try {
          // 发送请求获取手机验证码
          await getLoginMsgCode(mobile);
          // 验证码发送成功提示
          Message({ type: "success", text: "验证码发送成功" });
        } catch (error) {
          // 验证码发送失败提示
          Message({ type: "error", text: error.response.data.message });
        }
      }
    };
  }
}
```

* **Step.3：封装公用的倒计时方法**

```js
// useCountDown.js
import { onUnmounted, ref } from "vue";
import { useIntervalFn } from "@vueuse/core";

export default function useCountDown() {
  // 计时器数值
  const count = ref(0);
  // 创建计时器对象
  const { pause, isActive, resume } = useIntervalFn(
    () => {
      // 如果数值等于0
      if (count.value <= 0) {
        // 停止倒计时
        pause();
      } else {
        // 否则就是数值在原有值的基础上减一
        count.value--;
      }
    },
    1000,
    { immediate: false }
  );
  // 执行开始操作, 开始倒计时
  const start = (value) => {
    // 如果倒计时没有正在运行
    if (!isActive.value) {
      // 重新设置倒计时数值
      count.value = value;
      // 开始执行倒计时
      resume();
    }
  };
  // 组件卸载后清除定时器
  onUnmounted(pause);
  // 返回计时器数值
  return { count, start, isActive };
}
```

* **Step.4：验证码发送成功以后, 开始倒计时**

```js
export default {
    setup () {
        const { count, start, isActive } = useCountDown();
        // 获取验证码
    const getMsgCode = async () => {
      if (isValid && !isActive.value) {
        // 验证码发送成功后开启倒计时
          start(60);
      }
    };
    return { count,isActive  }
    }
}
```

```html
<!-- loginForm.vue -->

<span :class="{ disabled: isActive }">
    {{ isActive ? `剩余${count}秒` : "发送验证码" }}
</span>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
