<script setup>
import { useBindNewAccountValidate } from "./LoginCallbackBindPatch";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import useCountDown from "@/utils/useCountDown";
import { getRegisterMsgCode, createNewAccountBindQQ } from "@/api/loginAPI";
import Message from "@/components/Message/Message";
const props = defineProps({
  unionId: {
    type: String,
    default: "",
  },
});
const {
  handleSubmit,
  accountField,
  accountError,
  mobileField,
  mobileError,
  codeField,
  codeError,
  passwordField,
  passwordError,
  rePasswordField,
  rePasswordError,
  getMobileIsValidate,
} = useBindNewAccountValidate();

const { isActive, start, count } = useCountDown();
// 获取手机验证码
const getMsgCode = () => {
  // 如果倒计时正在执行, 阻止程序向下执行
  if (isActive.value) return;
  // 验证手机号
  getMobileIsValidate()
    .then(({ isValid, mobile }) => {
      // 如果手机号验证通过
      if (isValid) return getRegisterMsgCode(mobile);
    })
    .then(() => {
      Message({ type: "success", text: "验证码发送成功" });
      // 开启倒计时
      start(60);
    })
    .catch((error) =>
      Message({
        type: "error",
        text: `验证码发送失败 ${error.response.data.message}`,
      })
    );
};
const router = useRouter();
const onSubmit = handleSubmit((value) => {
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

  console.log(props.unionId, value);
  createNewAccountBindQQ({
    unionId: props.unionId,
    account: value.checkUserAccount,
    mobile: value.mobile,
    code: value.code,
    password: value.password,
  })
    .then(successFn)
    .catch(failFn);
});
</script>

<template>
  <form class="xtx-form" @submit="onSubmit">
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-user"></i>
        <input
          class="input"
          type="text"
          placeholder="请输入用户名"
          v-model="accountField"
        />
      </div>
      <div class="error" v-if="accountError">{{ accountError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input
          class="input"
          type="text"
          placeholder="请输入手机号"
          v-model="mobileField"
        />
      </div>
      <div class="error" v-if="mobileError">{{ mobileError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input
          class="input"
          type="text"
          placeholder="请输入验证码"
          v-model="codeField"
        />
        <span class="code" @click="getMsgCode">{{
          isActive ? `剩余${count}秒` : "发送验证码"
        }}</span>
      </div>
      <div class="error" v-if="codeError">{{ codeError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input
          class="input"
          type="password"
          placeholder="请输入密码"
          v-model="passwordField"
        />
      </div>
      <div class="error" v-if="passwordError">{{ passwordError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input
          class="input"
          type="password"
          placeholder="请确认密码"
          v-model="rePasswordField"
        />
      </div>
      <div class="error" v-if="rePasswordError">{{ rePasswordError }}</div>
    </div>
    <input type="submit" class="submit" value="立即绑定" />
  </form>
</template>

<style scoped>
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
</style>
