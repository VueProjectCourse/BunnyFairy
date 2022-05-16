import { useUserStore } from "@/stores/userStore";
import Message from "@/components/Message/Message";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
// 是否绑定
export const AcountBind = ref(null);
// 是否载入中
export const isLoading = ref(null);
// 请求成功时的回调
export const successFn = ({ data: res, status: status }) => {
  const { profile } = storeToRefs(useUserStore());

  if (status === 200) {
    // // 判断登陆成功 跳转到首页
    // console.log(res);
    // 把用户信息存储到Store中
    profile.value = { ...profile.value, ...res.result };
    // // 判断登陆成功 跳转到首页
    router.push("/").then(() => {
      // 登录成功之后的提示信息
      Message({ type: "success", text: "登录成功" });
    });
    AcountBind.value = true;
    isLoading.value = false;
  }
};
// 登陆失败时的回调
export const failFn = (error) => {
  Message({ type: "error", text: error.response.data.message });
  AcountBind.value = false;
  isLoading.value = false;
};
