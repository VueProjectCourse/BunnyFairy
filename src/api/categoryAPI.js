// create(add)增 delete(remove)删 update(edit)改  read(find)查
import request from "../utils/request";

/**
 * 根据一级分类ID获取一级分类下的具体信息
 * @param {*} id 一级分类ID
 * @returns 一级分类
 */
export const readCategoryById = (id) => {
  return request.get("/category", {
    params: {
      id,
    },
  });
};

/**
 * 根据二级分类id获取筛选条件
 * @param id 二级分类id
 * @return {Promise}
 */
export const readFilterById = (id) => {
  return request.get("/category/sub/filter", {
    params: {
      id: id,
    },
  });
};

/**
 * 获取商品列表
 * @param params 分类id、筛选条件、排序条件、分页信息
 * @return {Promise}
 */
export function readGoodsReq(params) {
  return request.post("/category/goods", params);
}
