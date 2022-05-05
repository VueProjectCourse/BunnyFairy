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
export const findAccountByQQOpenId = ({ unionId, source = 1 }) => {
  return request.post("/login/social", { unionId, source });
};

/**
 * 获取手机验证码 (QQ登录, 绑定已有账号手机号)
 * @param mobile
 * @return {Promise}
 */
export const getBindMobileMsgCode = (mobile) => {
  return request.get("/login/social/code", {
    params: {
      mobile,
    },
  });
};

/**
 * QQ登录, 将手机号和QQ号进行绑定
 * @param unionId 用户的唯一标识(openid)
 * @param mobile 手机号
 * @param code 手机验证码
 * @return {Promise}
 */
export const bindMobileAndQQ = ({ unionId, mobile, code }) => {
  return request.post("/login/social/bind", { unionId, mobile, code });
};

/**
 * 检测用户名是否唯一
 * @param account 用户名
 * @return {Promise}
 */
export const checkUsernameIsUnique = (account) => {
  return request.get("/register/check", {
    params: {
      account,
    },
  });
};

/**
 * 获取手机验证码 (注册)
 * @param mobile 手机号
 * @return {AxiosPromise}
 */
export const getRegisterMsgCode = (mobile) => {
  return request.get("/register/code", {
    params: {
      mobile,
    },
  });
};

/**
 * 创建新账户并绑定QQ
 * @param unionId QQ用户唯一标识
 * @param account 用户名
 * @param mobile 手机号
 * @param code 验证码
 * @param password 密码
 * @return {AxiosPromise}
 */
export const createNewAccountBindQQ = ({
  unionId,
  account,
  mobile,
  code,
  password,
}) => {
  return request.post(`/login/social/${unionId}/complement`, {
    account,
    mobile,
    code,
    password,
  });
};
