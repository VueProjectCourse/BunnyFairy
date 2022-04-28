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

export const readLoginMsgCode = (mobile) => {
  return request.get("/login/code", {
    params: {
      mobile,
    },
  });
};
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
<span  
 class="code" 
 @click="handlerMsgCode(getMobileIsValidate, start, isActive)"
 > 发送验证码</span>
```

```js
export const handlerMsgCode = async (getMobileIsValidate, start, isActive) => {
  const { valid, mobileField } = await getMobileIsValidate();

  if (valid && !isActive.value) {
    // 获取手机验证码
    try {
      start(60);
      await readLoginMsgCode(mobileField.value);

      // 验证码发送成功提示
      Message({ type: "success", text: "验证码发送成功" });
    } catch (error) {
      // console.log(error.response.data.message);
      Message({ type: "error", text: error.response.data.message });
    }
  }
};

```

* **Step.3：封装公用的倒计时方法**

```js
// useCountDown.js
import { onUnmounted, ref } from "vue";
// 引入 useIntervalFn
import { useIntervalFn } from "@vueuse/core";

// 定义 countDown
export default () => {
  // 计时器数值
  const count = ref(0);
  //  定义计时器
  const { pause, resume, isActive } = useIntervalFn(
    () => {
      if (count.value <= 0) {
        // 判断 如果数字小于等于0 那么暂停定时器
        pause();
      } else {
        // 如果不是小于等于0 那么就继续自减去
        count.value--;
      }
    },
    1000,
    { immediate: false }
  );
  //  定义开始方法
  const start = (value) => {
    // 判断一下 计时器是否正在执行, 如果没有正在执行 那么就让该定时执行 并且重置数据
    if (!isActive.value) {
      count.value = value;
      resume();
    }
  };
  // 卸载的时候 停止定时器
  onUnmounted(() => {
    // 停止定时器
    pause();
  });
  // 导出
  return { start, pause, count, isActive };
};

```

* **Step.4：验证码发送成功以后, 开始倒计时**

```js
export const handlerMsgCode = async (getMobileIsValidate, start, isActive) => {
  const { valid, mobileField } = await getMobileIsValidate();
  if (valid && !isActive.value) {
    // 获取手机验证码
    try {
      start(60);
      await readLoginMsgCode(mobileField.value);
      // 验证码发送成功提示
      Message({ type: "success", text: "验证码发送成功" });
    } catch (error) {
      // console.log(error.response.data.message);
      Message({ type: "error", text: error.response.data.message });
    }
  }
};
```

```html
<!-- loginForm.vue -->
<span
  class="code"
  :class="{ disabled: isActive }"
  @click="handlerMsgCode(getMobileIsValidate, start, isActive)"
  >{{ isActive ? `剩余${count}秒` : "发送验证码" }}</span
>
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
