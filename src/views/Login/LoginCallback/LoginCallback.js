import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { findAccountByQQOpenId } from "@/api/loginAPI";
import Message from "@/components/Message/Message";
export const useDetectAcountBind = () => {
  const router = useRouter();
  const { profile } = storeToRefs(useUserStore());
  // 是否绑定
  const AcountBind = ref(null);
  // 是否载入中
  const isLoading = ref(null);
  // 请求成功时的回调
  const successFn = ({ data: res, status: status }) => {
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
  const failFn = (error) => {
    // console.log(error.response.data.message);
    Message({ type: "error", text: error.response.data.message });
    AcountBind.value = false;
    isLoading.value = false;
  };

  // 改变是否绑定状态的方法
  const setAcountBind = () => {
    // 获取openid
    const Login = window.QC.Login;

    if (Login.check()) {
      isLoading.value = true;
      Login.getMe((openid) => {
        findAccountByQQOpenId({ unionId: openid })
          .then(successFn)
          .catch(failFn);
      });
    }
  };

  return { AcountBind, isLoading, setAcountBind };
};
