// create(add)增 delete(remove)删 update(edit)改  read(find)查
import request from "../utils/request"

/**
 * 获取热门品牌
 * @param {number} limit - 请求多少条数据
 * @return {Promise<{result: Array<Brand>}>}
 */
export const readHotBrands = (limit = 10) => {
  return request.get("/home/brand", {
    params: {
      limit
    },
  });
};


/**
 * 获取轮播图数据
 * @param {number} distributionSite - 广告投放位置 1 首页 2 分类页面
 * @return {Promise<{result: Array<Banner>}>} 广告图列表
 */
export function readBanners(distributionSite = 1) {
  return request.get("/home/banner", {
    params: {
      distributionSite
    }
  });
}