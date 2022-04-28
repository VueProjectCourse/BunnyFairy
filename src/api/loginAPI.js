import request from "@/utils/request";
/**
 * 账号密码登录
 * @param account 用户名或手机号
 * @param password 密码
 * @return {AxiosPromise}
 */
export const loginByAccountAndPassword = ({ account, password }) => {
  return request.post("/login", { account, password });
};

/**
 * 获取验证码 (手机号登录)
 * @param mobile
 * @return {Promise}
 */
export const readLoginMsgCode = (mobile) => {
  return request.get("/login/code", {
    params: {
      mobile,
    },
  });
};

/**
 * 手机号登录
 * @param mobile 手机号
 * @param code 验证码
 * @return {AxiosPromise}
 */

export const loginByMobileMsgCode = ({ mobile, code }) => {
  return request.post("/login/code", { mobile, code });
};
