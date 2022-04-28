import { ref } from "vue";
export const useTogglePattern = () => {
  // 登录方式 默认的是 账号登录
  const loginPattern = ref("account");
  const setLoginPattern = (pattern) => {
    loginPattern.value = pattern;
  };
  return { loginPattern, setLoginPattern };
};
