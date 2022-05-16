import request from "@/utils/request";

/**
 * 更新购物车中的商品信息 (库存, 是否有效, 现价)
 * @param skuId
 * @param id
 * @return {Promise}
 */
export const updateLocalCart = (skuId) => {
  return request.get(`/goods/stock/${skuId}`);
};

/**
 * 根据skuId获取规格信息 (供用户选择的规格选项数据、所有可组合的规格组合)
 * @param skuId
 * @return {Promise}
 */
export const getSkuInfoBySkuId = (skuId) => {
  return request.get(`/goods/sku/${skuId}`);
};

/**
 * 将本地购物车和服务器端购物车进行合并
 * @param {Array<{skuId: string, selected: boolean, count: number}>} cart
 * @return {Promise}
 */
export const setMergeCart = (cart) => {
  return request.post("/member/cart/merge", cart);
};
