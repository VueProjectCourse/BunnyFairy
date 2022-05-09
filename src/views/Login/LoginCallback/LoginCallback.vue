<script setup>
import { ref } from "vue";
import LoginHeader from "../LoginHeader/LoginHeader.vue";
import LoginFooter from "../LoginFooter/LoginFooter.vue";
import LoginCallbackBindPhone from "../LoginCallbackBindPhone/LoginCallbackBindPhone.vue";
import LoginCallbackBindPatch from "../LoginCallbackBindPatch/LoginCallbackBindPatch.vue";
import { useDetectAcountBind } from "./LoginCallback";

const { AcountBind, isLoading, setAcountBind } = useDetectAcountBind();
// tab切换状态
const hasAccount = ref(true);
setAcountBind();

// LoginCallback.vue
const unionId = ref(null);
// 获取登录用户的 appid, 就是用户的唯一标识
window.QC.Login.getMe((openId) => {
  // 存储用户唯一标识
  unionId.value = openId;
});
</script>

<template>
  <LoginHeader>联合登录</LoginHeader>
  <!-- 加载提示 -->
  <section class="container" v-if="isLoading">
    <div class="unbind">
      <div class="loading"></div>
    </div>
  </section>
  <section class="container" v-if="!AcountBind && !isLoading">
    <nav class="tab">
      <a
        :class="{ active: hasAccount }"
        href="javascript:"
        @click="hasAccount = true"
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
      <LoginCallbackBindPatch :unionId="unionId" />
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
