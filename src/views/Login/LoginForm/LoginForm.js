import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import { account, password, isAgree } from "@/utils/vee-validate-schema";
export const useToggleAccount = () => {
  const accountName = ref("account");
  const setAccountName = (name) => {
    accountName.value = name;
  };

  return { accountName, setAccountName };
};

// 账号登录表单验证
// 用于验证账号密码登录表单
export const useAccountValidate = () => {
  // 创建账号登录表单验证表单
  const { handleSubmit: handleAccountSubmit } = useForm({
    // 指定表单中的验证规则
    validationSchema: {
      // 用户名的验证规则
      account,
      password,
      isAgree,
    },
  });
  // 对用户名进行验证
  const { value: accountField, errorMessage: accountError } =
    useField("account");
  // 验证密码
  const { value: passwordField, errorMessage: passwordError } =
    useField("password");
  // 验证是否同意协议
  const { value: accountIsAgreeField, errorMessage: accountIsAgreeError } =
    useField("isAgree");
  return {
    accountField,
    accountError,
    passwordField,
    passwordError,
    accountIsAgreeField,
    accountIsAgreeError,
    handleAccountSubmit,
  };
};
