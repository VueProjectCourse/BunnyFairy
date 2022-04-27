// create(add)增 delete(remove)删 update(edit)改  read(find)查
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
