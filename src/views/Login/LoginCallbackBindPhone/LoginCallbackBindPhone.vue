<script setup>
import Message from "@/components/Message/Message";
import useCountDown from "@/utils/useCountDown";
import { getBindMobileMsgCode } from "../../../api/loginAPI";
import {
  useQQUserInfo,
  useBindPhoneValid,
  useThirdPartyLogin,
} from "./LoginCallbackBindPhone";
const props = defineProps({
  unionId: {
    type: String,
    default: "",
  },
});
const { count, isActive, start } = useCountDown();
const { nickname, avatar, setNickAndAvatar } = useQQUserInfo();
const { setThirdPartyLogin } = useThirdPartyLogin();
setNickAndAvatar();
// 获取和表单验证相关的内容
const {
  codeField,
  codeError,
  mobileField,
  mobileError,
  handleSubmit,
  getMobileIsValidate,
} = useBindPhoneValid();
// 表单提交
const onSubmitHandler = handleSubmit((value) => {
  console.log(value);
  setThirdPartyLogin({ ...value, unionId: props.unionId });
});
const getMsgCode = () => {
  getMobileIsValidate().then(({ isValid, mobile }) => {
    // 如果手机号验证通过
    if (isValid) {
      // 如果手机号验证通过
      if (isValid && !isActive.value) {
        console.log(1111);
        return getBindMobileMsgCode(mobile)
          .then(() => {
            Message({ type: "success", text: "验证码发送成功" });
            // 开启倒计时
            start(60);
          })
          .catch((error) => {
            Message({
              type: "error",
              text: `验证码发送失败 ${error.response.data.message}`,
            });
          });
      }
    }
  });
};
</script>
<template>
  <form class="xtx-form" @submit="onSubmitHandler">
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
