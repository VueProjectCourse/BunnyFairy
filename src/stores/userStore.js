import { defineStore } from "pinia";

export const useCounterStore = defineStore({
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
  getters: {},
  actions: {},
  // 开启数据缓存
  persist: {
    enabled: true,
  },
});
