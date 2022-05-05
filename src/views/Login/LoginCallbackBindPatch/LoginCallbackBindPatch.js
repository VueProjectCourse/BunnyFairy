import { useField, useForm } from "vee-validate";
import {
  checkUserAccount,
  code,
  mobile,
  password,
  rePassword,
} from "@/utils/vee-validateSchema";
export const useBindNewAccountValidate = () => {
  // 创建表单验证对象
  const { handleSubmit } = useForm({
    validationSchema: { checkUserAccount, mobile, code, password, rePassword },
  });
  // 创建用于验证用户名的表单项验证对象
  const { value: accountField, errorMessage: accountError } =
    useField("checkUserAccount");
  // 创建用户验证手机号的表单项验证对象
  const {
    value: mobileField,
    errorMessage: mobileError,
    validate,
  } = useField("mobile");
  // 单独验证手机号
  const getMobileIsValidate = async () => {
    // 验证用户输入的手机号格式是否正确
    let { valid } = await validate();
    // 将验证结果和手机号返回出去
    return { isValid: valid, mobile: mobileField.value };
  };
  // 创建用于验证手机验证码格式的表单项验证对象
  const { value: codeField, errorMessage: codeError } = useField("code");
  // 创建用于验证密码的表单项验证对象
  const { value: passwordField, errorMessage: passwordError } =
    useField("password");
  // 创建用于验证两次密码是否输入一直的表单验证项对象
  const { value: rePasswordField, errorMessage: rePasswordError } =
    useField("rePassword");
  return {
    handleSubmit,
    accountField,
    accountError,
    mobileField,
    mobileError,
    codeField,
    codeError,
    passwordField,
    passwordError,
    rePasswordField,
    rePasswordError,
    getMobileIsValidate,
  };
};
