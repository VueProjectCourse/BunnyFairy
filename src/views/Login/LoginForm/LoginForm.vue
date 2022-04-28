<script setup>
import useCountDown from "@/utils/useCountDown";
import { onMounted } from "vue";
import {
  useLoginWay,
  useAccountValidate,
  useAccountLogin,
  useMobileValidate,
  handlerMsgCode,
  useMobileLogin,
} from "./LoginForm";

const { loginWay, setLoginWay } = useLoginWay();
//#region 账号登陆功能
const {
  accountField,
  accountError,
  passwordField,
  passwordError,
  accountIsAgreeField,
  accountIsAgreeError,
  handleAccountSubmit,
} = useAccountValidate();
const { setAccountLogin } = useAccountLogin();

// 只有所有表单规则都验证通过了 在点击提交的时候 才可以触发
const onAccountSubmit = handleAccountSubmit((values) => {
  // values 就是登陆所需的参数
  setAccountLogin(values);
});
//#endregion

//#region 手机登陆
const {
  mobileField,
  mobileError,
  codeField,
  codeError,
  mobileIsAgreeField,
  mobileIsAgreeError,
  handleMobileSubmit,
  getMobileIsValidate,
} = useMobileValidate();
const { setMobileLogin } = useMobileLogin();
const onMobileSubmit = handleMobileSubmit((values) => {
  // console.log(values);
  setMobileLogin(values);
});
const { count, start, isActive } = useCountDown();

//#endregion

// onMounted(() => {
//   window.QC.Login({
//     btnId: "qqLoginBtn",
//   });
// });
</script>
<template>
  <div class="account-box">
    <div class="toggle">
      <button v-show="loginWay === 'msg'" @click="setLoginWay('account')">
        <i class="iconfont icon-user"></i>
        使用账号登录
      </button>
      <button v-show="loginWay === 'account'" @click="setLoginWay('msg')">
        <i class="iconfont icon-msg"></i> 使用短信登录
      </button>
    </div>
    <div class="form">
      <!-- 账户登录 -->
      <template v-if="loginWay === 'account'">
        <form @submit="onAccountSubmit">
          <div class="form-item">
            <div class="input">
              <i class="iconfont icon-user"></i>
              <input
                type="text"
                placeholder="请输入用户名"
                v-model="accountField"
              />
            </div>
            <div class="error" v-if="accountError">
              <i class="iconfont icon-warning"></i>{{ accountError }}
            </div>
          </div>
          <div class="form-item">
            <div class="input">
              <i class="iconfont icon-lock"></i>
              <input
                type="password"
                placeholder="请输入密码"
                v-model="passwordField"
              />
            </div>
            <div class="error" v-if="passwordError">
              <i class="iconfont icon-warning"></i>{{ passwordError }}
            </div>
          </div>
          <div class="form-item">
            <div class="agree">
              <Checkbox v-model="accountIsAgreeField" />
              <span>我已同意</span>
              <a href="javascript:">《隐私条款》</a>
              <span>和</span>
              <a href="javascript:">《服务条款》</a>
            </div>
            <div class="error" v-if="accountIsAgreeError">
              <i class="iconfont icon-warning"></i>{{ accountIsAgreeError }}
            </div>
          </div>
          <button type="submit" class="btn">登录</button>
        </form>
      </template>
      <!-- 短信登录 -->
      <template v-if="loginWay === 'msg'">
        <form @submit="onMobileSubmit">
          <div class="form-item">
            <div class="input">
              <i class="iconfont icon-user"></i>
              <input
                type="text"
                placeholder="请输入手机号"
                v-model="mobileField"
              />
            </div>
            <div class="error" v-if="mobileError">
              <i class="iconfont icon-warning"></i>{{ mobileError }}
            </div>
          </div>
          <div class="form-item">
            <div class="input">
              <i class="iconfont icon-code"></i>
              <input
                type="password"
                placeholder="请输入验证码"
                v-model="codeField"
              />
              <span
                class="code"
                :class="{ disabled: isActive }"
                @click="handlerMsgCode(getMobileIsValidate, start, isActive)"
                >{{ isActive ? `剩余${count}秒` : "发送验证码" }}</span
              >
            </div>
            <div class="error" v-if="codeError">
              <i class="iconfont icon-warning"></i>{{ codeError }}
            </div>
          </div>
          <div class="form-item">
            <div class="agree">
              <Checkbox v-model="mobileIsAgreeField" />
              <span>我已同意</span>
              <a href="javascript:">《隐私条款》</a>
              <span>和</span>
              <a href="javascript:">《服务条款》</a>
            </div>
            <div class="error" v-if="mobileIsAgreeError">
              <i class="iconfont icon-warning"></i>{{ mobileIsAgreeError }}
            </div>
          </div>
          <button type="submit" class="btn">登录</button>
        </form>
      </template>
    </div>
    <div class="action">
      <!-- <img
        src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        alt=""
      /> -->
      <a
        href="https://graph.qq.com/oauth2.0/authorize?client_id=100556005&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback"
      >
        <img
          src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        />
      </a>
      <!-- <span id="qqLoginBtn"></span> -->
      <div class="url">
        <a href="javascript:">忘记密码</a>
        <a href="javascript:">免费注册</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.account-box .toggle {
  padding: 15px 40px;
  text-align: right;
}
.account-box .toggle button {
  color: var(--primary-color);
  background: none;
  border: none;
  cursor: pointer;
}
.account-box .toggle button i {
  font-size: 14px;
}
.account-box .form {
  padding: 0 40px;
}
.account-box .form-item {
  margin-bottom: 28px;
}
.account-box .form-item .input {
  position: relative;
  height: 36px;
}
.account-box .form-item .input > i {
  width: 34px;
  height: 34px;
  background: #cfcdcd;
  color: #fff;
  position: absolute;
  left: 1px;
  top: 1px;
  text-align: center;
  line-height: 34px;
  font-size: 18px;
}
.account-box .form-item .input input {
  padding-left: 44px;
  border: 1px solid #cfcdcd;
  height: 36px;
  line-height: 36px;
  width: 100%;
}
.account-box .form-item .input input.error {
  border-color: var(--price-color);
}
.account-box .form-item .input input.active,
.account-box .form-item .input input:focus {
  border-color: var(--primary-color);
}
.account-box .form-item .input .code {
  position: absolute;
  right: 1px;
  top: 1px;
  text-align: center;
  line-height: 34px;
  font-size: 14px;
  background: #f5f5f5;
  color: #666;
  width: 90px;
  height: 34px;
  cursor: pointer;
}
.account-box .form-item .input .code.disabled {
  cursor: wait;
}
.account-box .form-item > .error {
  position: absolute;
  font-size: 12px;
  line-height: 28px;
  /* color: var(--primary-color); */
  color: red;
}
.account-box .form-item > .error i {
  font-size: 14px;
  margin-right: 2px;
}
.account-box .form .agree a {
  color: #069;
}
.account-box .form .btn {
  display: block;
  width: 100%;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  background: var(--primary-color);
  border: none;
}
.account-box .form .btn.disabled {
  background: #cfcdcd;
}
.account-box .action {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.account-box .action .url a {
  color: #999;
  margin-left: 10px;
}
</style>
