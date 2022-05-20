import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useCartStore } from "../../../stores/cartStore";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

import {
  loginByAccountAndPassword,
  readLoginMsgCode,
  loginByMobileMsgCode,
} from "@/api/loginAPI";
import Message from "@/components/Message/Message";

// 引入 表单校验规则
import {
  account,
  password,
  mobile,
  code,
  isAgree,
} from "@/utils/vee-validateSchema";
import { useField, useForm } from "vee-validate";

// 账户登录和短信登录切换
export const useLoginWay = () => {
  // 登录方式 默认的是 账号登录
  const loginWay = ref("account");
  const setLoginWay = (way) => {
    loginWay.value = way;
  };
  return { loginWay, setLoginWay };
};

// 声明 账号登陆的 表单校验
export const useAccountValidate = () => {
  // Create a form context with the validation schema
  // 通过检测规则 创建表单验证的上下文
  const { handleSubmit: handleAccountSubmit } = useForm({
    validationSchema: {
      account,
      password,
      isAgree,
    },
  });

  const { value: accountField, errorMessage: accountError } =
    useField("account");

  const { value: passwordField, errorMessage: passwordError } =
    useField("password");

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

// 账号登陆的功能
export const useAccountLogin = () => {
  // vue-router 用的是provide inject
  // 注意 useRouter方法 必须在setup内执行 或者是 函数式组件
  const router = useRouter();
  const route = useRoute();
  const cartStore = useCartStore();
  // route 和 router
  // route 获取 路由里面的信息的
  // router 是路由对象 专门用来改变路由的 里面有 改变路由的方法 route里面全部是属性
  // console.log(router);

  // 请求成功时的回调
  const successFn = async ({ data: res, status: status }) => {
    const { profile } = storeToRefs(useUserStore());
    if (status === 200) {
      // 把用户信息存储到Store中
      profile.value = { ...profile.value, ...res.result };
      await cartStore.mergeCart();
      await cartStore.updateCartList();
      const redirectURL = route.query.redirectURL;
      // console.log(route.query);
      // // 判断登陆成功 跳转到首页
      router.push(redirectURL || "/").then(() => {
        // 登录成功之后的提示信息
        Message({ type: "success", text: "登录成功" });
      });
    }
  };
  // 登陆失败时的回调
  const failFn = (error) => {
    // console.log(error.response.data.message);
    Message({ type: "error", text: error.response.data.message });
  };

  // 登陆方法
  const setAccountLogin = (loginParams) => {
    loginByAccountAndPassword(loginParams).then(successFn).catch(failFn);
  };

  return { setAccountLogin };
};

// 声明 手机登陆 的 表单校验
export const useMobileValidate = () => {
  // 通过检测规则 创建表单验证的上下文
  const { handleSubmit: handleMobileSubmit } = useForm({
    validationSchema: {
      mobile,
      code,
      isAgree,
    },
  });

  const {
    value: mobileField,
    errorMessage: mobileError,
    validate: mobileValidate,
  } = useField("mobile");

  // 获取是否填写了手机号
  const getMobileIsValidate = async () => {
    // 填写了 返回 结果
    const { valid } = await mobileValidate();

    // console.log(valid, mobileField);
    return { valid, mobileField };
  };

  const { value: codeField, errorMessage: codeError } = useField("code");

  const { value: mobileIsAgreeField, errorMessage: mobileIsAgreeError } =
    useField("isAgree");

  return {
    mobileField,
    mobileError,
    codeField,
    codeError,
    mobileIsAgreeField,
    mobileIsAgreeError,
    handleMobileSubmit,
    getMobileIsValidate,
  };
};

export const handlerMsgCode = async (getMobileIsValidate, start, isActive) => {
  const { valid, mobileField } = await getMobileIsValidate();

  if (valid && !isActive.value) {
    // 获取手机验证码
    try {
      start(60);
      await readLoginMsgCode(mobileField.value);

      // 验证码发送成功提示
      Message({ type: "success", text: "验证码发送成功" });
    } catch (error) {
      // console.log(error.response.data.message);
      Message({ type: "error", text: error.response.data.message });
    }
  }
};

// 手机短信登陆
export const useMobileLogin = () => {
  // vue-router 用的是provide inject
  // 注意 useRouter方法 必须在setup内执行 或者是 函数式组件
  const router = useRouter();
  // route 和 router
  // route 获取 路由里面的信息的
  // router 是路由对象 专门用来改变路由的 里面有 改变路由的方法 route里面全部是属性
  // console.log(router);

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
    // console.log(error.response.data.message);
    Message({ type: "error", text: error.response.data.message });
  };

  // 登陆方法
  const setMobileLogin = (loginParams) => {
    loginByMobileMsgCode(loginParams).then(successFn).catch(failFn);
  };

  return { setMobileLogin };
};
