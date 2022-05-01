import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";
import { mobile, code } from "@/utils/vee-validateSchema";
import Message from "@/components/Message/Message";
import { bindMobileAndQQ } from "@/api/loginAPI";
// 获取QQ用户昵称和头像
export const useQQUserInfo = () => {
  // 存储QQ用户昵称
  const nickname = ref(null);
  // 存储QQ用户头像
  const avatar = ref(null);

  const setNickAndAvatar = () => {
    // 获取QQ互联对象
    const QC = window.QC;
    // 检测 登录状态
    if (QC.Login.check()) {
      // 向QQ互联 网服务器中心发送请求获取QQ用户信息
      QC.api("get_user_info").success((response) => {
        console.log(response.data);
        nickname.value = response.data.nickname;
        avatar.value = response.data.figureurl_1;
      });
    }
  };

  return { nickname, avatar, setNickAndAvatar };
};

// 表单验证
export const useBindPhoneValid = () => {
  // 创建表单验证对象
  const { handleSubmit } = useForm({
    validationSchema: { mobile, code },
  });

  // 手机号验证
  const {
    value: mobileField,
    errorMessage: mobileError,
    validate,
  } = useField("mobile");
  // 单独验证手机号
  const getMobileIsValidate = async () => {
    const { valid } = await validate();
    return { isValid: valid, mobile: mobileField.value };
  };
  // 验证码验证
  const { value: codeField, errorMessage: codeError } = useField("code");

  return {
    mobileField,
    mobileError,
    codeField,
    codeError,
    handleSubmit,
    getMobileIsValidate,
  };
};

// 账号登陆的功能

export const useThirdPartyLogin = () => {
  const router = useRouter();
  // 请求成功时的回调
  const successFn = ({ data: res, status: status }) => {
    const { profile } = storeToRefs(useUserStore());
    if (status === 200) {
      // 把用户信息存储到Store中
      profile.value = { ...profile.value, ...res.result };
      // // 判断登陆成功 跳转到首页
      router.push("/").then(() => {
        // 登录成功之后的提示信息
        Message({ type: "success", text: "登录成功" });
      });
    }
  };
  // 登陆失败时的回调
  const failFn = (error) => {
    Message({ type: "error", text: error.response.data.message });
  };
  const setThirdPartyLogin = ({ unionId, mobile, code }) => {
    bindMobileAndQQ({ unionId, mobile, code }).then(successFn).catch(failFn);
  };

  return { setThirdPartyLogin };
};
