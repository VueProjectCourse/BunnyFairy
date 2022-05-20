import request from "@/utils/request";

/**
 * 生成订单
 * @return {Promise}
 */
export const createOrder = () => {
  return request.get("/member/order/pre");
};

/**
 * 添加收货地址
 * @param address 收货地址信息对象
 * @return {Promise}
 */
export const addAddress = (address) => {
  return request.post("/member/address", address);
};
