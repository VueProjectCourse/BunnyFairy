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

/**
 * 在小兔仙应用中检索绑定该QQ号的账号
 * @param unionId QQ用户唯一标识
 * @param source 注册来源
 * @return {AxiosPromise}
 */
export const findAccountByQQOpenid = ({ unionId, source = 1 }) => {
  return request.post("/login/social", { unionId, source });
};
