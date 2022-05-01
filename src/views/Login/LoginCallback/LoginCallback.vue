<script setup>
import { ref } from "vue";
import LoginHeader from "../LoginHeader/LoginHeader.vue";
import LoginFooter from "../LoginFooter/LoginFooter.vue";
import LoginCallbackBindPhone from "../LoginCallbackBindPhone/LoginCallbackBindPhone.vue";
import LoginCallbackBindPatch from "../LoginCallbackBindPatch/LoginCallbackBindPatch.vue";
import { findAccountByQQOpenid } from "@/api/loginAPI";
const hasAccount = ref(true);
// 获取QQ联合中和登录相关的API
const Login = window.QC.Login;
// 先假设该用户没有使用 QQ 绑定了账号
const isBind = ref(false);
const loading = ref(false);
const unionId = ref(null);
if (Login.check()) {
  // 1. 获取地址栏中的 access_token 值
  // 2. 向QQ互联服务器发送请求使用 access_token 换取用户的唯一标识 openid
  // https://graph.qq.com/oauth2.0/me?access_token=B204C56879FC0C2818AF844746BD6959
  Login.getMe((openid) => {
    unionId.value = openid;
    findAccountByQQOpenid({ unionId: openid })
      // 检测到账号, 走 then 回调函数, 执行登录成功之后的逻辑
      .then((data) => {
        console.log("着啥啊", data);
        if (data.result.token) {
          window.location.href = "/";
        }
        isBind.value = true;
        loading.value = false;
      })
      // 没有检测到账号, 走 catch 回调函数
      .catch(() => {
        // 用户没有使用QQ绑定账号
        isBind.value = false;
        loading.value = false;
      });
  });
}
</script>
<template>
  <LoginHeader>联合登录</LoginHeader>
  <section class="container" v-if="loading">
    <div class="unbind">
      <div class="loading"></div>
    </div>
  </section>
  <section class="container" v-if="!loading && !isBind">
    <nav class="tab">
      <a
        href="javascript:"
        @click="hasAccount = true"
        :class="{ active: hasAccount }"
      >
        <i class="iconfont icon-bind"></i>
        <span>已有小兔鲜账号，请绑定手机</span>
      </a>
      <a
        href="javascript:"
        :class="{ active: !hasAccount }"
        @click="hasAccount = false"
      >
        <i class="iconfont icon-edit"></i>
        <span>没有小兔鲜账号，请完善资料</span>
      </a>
    </nav>
    <div class="tab-content" v-if="hasAccount">
      <LoginCallbackBindPhone :unionId="unionId" />
    </div>
    <div class="tab-content" v-if="!hasAccount">
      <LoginCallbackBindPatch />
    </div>
  </section>

  <LoginFooter />
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.container {
  padding: 25px 0;
  position: relative;
  height: 730px;
}
.container .unbind {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 25px 0;
  z-index: 99;
}
.container .unbind .loading {
  height: 100%;
  background: #fff url(@/assets/images/load.gif) no-repeat center / 100px 100px;
}

.tab {
  background: #fff;
  height: 80px;
  padding-top: 40px;
  font-size: 18px;
  text-align: center;
}
.tab a {
  color: #666;
  display: inline-block;
  width: 350px;
  line-height: 40px;
  border-bottom: 2px solid #e4e4e4;
}
.tab a i {
  font-size: 22px;
  vertical-align: middle;
}
.tab a span {
  vertical-align: middle;
  margin-left: 4px;
}
.tab a.active {
  color: var(--primary-color);
  border-color: var(--primary-color);
}
.tab-content {
  min-height: 600px;
  background: #fff;
}
</style>
