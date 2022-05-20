import request from "@/utils/request";

/**
 * 生成订单
 * @return {Promise}
 */
export const createOrder = () => {
  return request.get("/member/order/pre");
};
