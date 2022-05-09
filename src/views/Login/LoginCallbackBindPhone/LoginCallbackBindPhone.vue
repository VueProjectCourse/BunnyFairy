<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { useQQUserInfo, useBindPhoneValidate } from "./LoginCallbackBindPhone";
import { getBindMobileMsgCode, bindMobileAndQQ } from "@/api/loginAPI";
import useCountDown from "@/utils/useCountDown";
import Message from "@/components/Message/Message";
const router = useRouter();
const { nickname, avatar, setNickAndAvatar } = useQQUserInfo();
const {
  handleBindPhoneSubmit,
  mobileField,
  mobileError,
  codeField,
  codeError,
  getMobileIsValidate,
} = useBindPhoneValidate();
const { count, start, isActive } = useCountDown();
const props = defineProps({
  unionId: {
    type: String,
    default: "",
  },
});
onMounted(() => {
  setNickAndAvatar();
});
// 获取验证码
const getMsgCode = () => {
  getMobileIsValidate().then(({ isValid, mobile }) => {
    // 如果手机号验证通过
    // if (isValid && !isActive.value) return getBindMobileMsgCode(mobile);
    console.log(isValid, mobile, !isActive.value);
    if (isValid && !isActive.value) {
      start(60);
      getBindMobileMsgCode(mobile)
        .then(() => {
          // 验证码发送成功提示
          Message({ type: "success", text: "验证码发送成功" });
        })
        .catch((error) => {
          Message({ type: "error", text: error.response.data.message });
        });
    }
  });
};
// 点击提交的方法
const onBindPhoneSubmit = handleBindPhoneSubmit((value) => {
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
  // 将手机号和QQ号进行绑定
  // 绑定成功即登录成功
  bindMobileAndQQ({ ...value, unionId: props.unionId })
    .then(successFn)
    .catch(failFn);
});
</script>
<template>
  <form class="xtx-form" @submit="onBindPhoneSubmit">
    <div class="user-info">
      <img :src="avatar" alt="" />
      <p>Hi，{{ nickname }} 欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~</p>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input
          class="input"
          type="text"
          placeholder="绑定的手机号"
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
          placeholder="短信验证码"
          v-model="codeField"
        />
        <span class="code" @click="getMsgCode">{{
          isActive ? `剩余${count}秒` : "发送验证码"
        }}</span>
      </div>
      <div class="error" v-if="codeError">{{ codeError }}</div>
    </div>
    <input type="submit" class="submit" value="立即绑定" />
  </form>
</template>

<style scoped>
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
</style>
