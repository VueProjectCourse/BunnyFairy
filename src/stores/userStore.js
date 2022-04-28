import { defineStore } from "pinia";

export const useUserStore = defineStore({
  // store的唯一id
  id: "userStore",
  state: () => ({
    // 用户信息
    profile: {
      // 用户id
      id: "",
      // 用户头像
      avatar: "",
      // 用户昵称
      nickname: "",
      // 用户账号
      account: "",
      // 用户手机号
      mobile: "",
      // 用户登录凭证
      token: "",
    },
  }),
  // 开启数据缓存 默认存在sessionStorage
  persist: {
    enabled: true,
  },
});
