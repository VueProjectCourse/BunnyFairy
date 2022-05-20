import request from "../utils/request";
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

/**
 * 获取服务器端购物车列表数据
 * @return {AxiosPromise}
 */
export const getCartList = () => {
  return request.get("/member/cart");
};

/**
 * 将商品加入购物车
 * @param skuId {string} - 商品 skuId
 * @param count {number} - 商品数量
 * @return {AxiosPromise}
 */
export const addGoods = ({ skuId, count }) => {
  return request.post("/member/cart", { skuId, count });
};

/**
 * 删除购物车中的商品 支持批量删除 支持单个删除
 * @param ids {Array<string>} 商品 skuId 数组
 * @return {AxiosPromise}
 */
export const deleteGoodsOfCartBySkuIds = (ids) => {
  console.log(ids);
  return request.delete("/member/cart", { data: { ids } });
};

/**
 * 更新购物车中的商品信息 (支持是否选中和商品数量)
 * @param skuId {string} - 商品 skuId
 * @param selected {boolean} - 是否选中状态
 * @param count {number} - 商品数量
 * @return {AxiosPromise}
 */
export const updateGoodsOfCartBySkuIds = ({ skuId, selected, count }) => {
  return request.put(`/member/cart/${skuId}`, { selected, count });
};

/**
 * 全选、取消全选
 * @param selected 选中状态
 * @param ids skuId 数组
 * @return {AxiosPromise}
 */
export const selectOrUnselectCartGoods = ({ selected, ids }) => {
  return request.put("/member/cart/selected", { selected, ids });
};
