import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import { mobile, code } from "@/utils/vee-validateSchema";
// 获取QQ用户昵称和头像
export const useQQUserInfo = () => {
  // 1. qq昵称
  const nickname = ref(null);
  // 2. qq头像
  const avatar = ref(null);
  // 3. 设置qq昵称和头像的方法
  const setNickAndAvatar = () => {
    // 获取QQ互联对象
    const QC = window.QC;
    //  检测是否登陆
    if (QC.Login.check()) {
      QC.api("get_user_info").success(({ data }) => {
        nickname.value = data.nickname;
        avatar.value = data.figureurl_1;
      });
    }
  };
  return { nickname, avatar, setNickAndAvatar };
};

// 表单验证
export const useBindPhoneValidate = () => {
  // 校验规则 绑定 useform
  const { handleSubmit: handleBindPhoneSubmit } = useForm({
    validationSchema: {
      mobile,
      code,
    },
  });
  // 校验手机号 usefiled
  const {
    value: mobileField,
    errorMessage: mobileError,
    validate: mobileValidate,
  } = useField("mobile");

  // 获取是否填写了手机号
  // 单独验证手机号
  const getMobileIsValidate = async () => {
    const { valid } = await mobileValidate();
    return { isValid: valid, mobile: mobileField.value };
  };

  // 校验验证码
  const { value: codeField, errorMessage: codeError } = useField("code");

  return {
    handleBindPhoneSubmit,
    mobileField,
    mobileError,
    codeField,
    codeError,
    getMobileIsValidate,
  };
};
