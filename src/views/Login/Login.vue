<script setup>
import LoginHeader from "./LoginHeader/LoginHeader.vue";
import LoginFooter from "./LoginFooter/LoginFooter.vue";
import { useTogglePattern } from "./Login";
import LoginForm from "./LoginForm/LoginForm.vue";

const { loginPattern, setLoginPattern } = useTogglePattern();
</script>

<template>
  <div class="login">
    <!-- 通过 标签调用了 组件 -->
    <!-- 能不能通过js来调用组件 -->
    <!-- <Message type="success" text="登录成功" /> -->
    <!-- <button @click="showMessage">点击按钮</button> -->
    <LoginHeader>欢迎登录</LoginHeader>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a
            href="javascript:"
            @click="setLoginPattern('account')"
            :class="{ active: loginPattern == 'account' }"
            >账户登录</a
          >
          <a
            href="javascript:"
            @click="setLoginPattern('qrcode')"
            :class="{ active: loginPattern == 'qrcode' }"
            >扫码登录</a
          >
        </nav>
        <!-- 即将放置账号登录表单组件, 此处使用div先占个位 -->
        <LoginForm v-show="loginPattern === 'account'" />
        <!-- 二维码登录 -->
        <div class="qrcode-box" v-show="loginPattern === 'qrcode'">
          <img src="@/assets/images/qrcode.jpg" alt="" />
          <p>打开 <a href="javascript:">小兔鲜App</a> 扫码登录</p>
        </div>
      </div>
    </section>
    <LoginFooter />
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.login {
  position: relative;
  height: 100%;
  padding-bottom: 152px;
}

.login-section {
  position: relative;
  background: url(@/assets/images/login-bg.png) no-repeat center / cover;
  height: 488px;
}

.login-section .wrapper {
  width: 380px;
  background: #fff;
  min-height: 400px;
  position: absolute;
  left: 50%;
  top: 54px;
  transform: translate3d(100px, 0, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.login-section .wrapper .qrcode-box {
  text-align: center;
  padding-top: 40px;
}

.login-section .wrapper .qrcode-box p {
  margin-top: 20px;
}

.login-section .wrapper .qrcode-box p a {
  color: var(--primary-color);
  font-size: 16px;
}

.login-section .wrapper nav {
  height: 55px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  padding: 0 40px;
  text-align: right;
  align-items: center;
}

.login-section .wrapper nav a {
  flex: 1;
  line-height: 1;
  display: inline-block;
  font-size: 18px;
  position: relative;
}

.login-section .wrapper nav a:first-child {
  border-right: 1px solid #f5f5f5;
  text-align: left;
}

.login-section .wrapper nav a.active {
  color: var(--primary-color);
  font-weight: bold;
}
</style>
