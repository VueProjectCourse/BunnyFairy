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

/**
 * 获取收货地址列表
 * @return {AxiosPromise}
 */
export const getAddressList = () => {
  return request.get("/member/address");
};

/**
 * 修改收货地址
 * @param id 收货地址id
 * @param address 新的收货地址
 * @return {AxiosPromise}
 */
export const updateAddressById = (id, address) => {
  return request.put(`/member/address/${id}`, address);
};

/**
 * 提交订单
 * @param order 订单对象
 * @return {Promise}
 */
export function submitOrder(order) {
  return request.post("/member/order", order);
}

/**
 * 根据订单id获取订单详情
 * @param id 订单ID
 * @return {Promise}
 */
export const getOrderInfoById = (id) => {
  return request.get(`/member/order/${id}`);
};
