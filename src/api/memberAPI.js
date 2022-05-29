import request from "../utils/request";

// api/memberAPI.js
/**
 * 获取我的收藏
 * @param collectType 收藏类型，1为商品，2为专题，3为品牌
 * @param page 页码
 * @param pageSize 每页显示数据条数
 * @return {Promise}
 */
export const getCollection = ({ collectType = 1, page = 1, pageSize = 10 }) => {
  return request.get("/member/collect", {
    params: { collectType, page, pageSize },
  });
}