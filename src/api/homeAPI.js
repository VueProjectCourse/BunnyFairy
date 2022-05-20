// 分类模块
// 增(create)删(delete)改(update)查(read)

// 导入封装好的axios工具函数
import request from "@/utils/request";

/**
 * 首页-全部分类（包含推荐商品）
 * @returns {Promise<{result: Array<Category>}>}
 */
export function readCategories() {
  // 根据工具函数 导出一个方法
  return request.get("/home/category/head");
}

/**
 * 获取热门品牌
 * @param { Number } limit - 请求多少条数据
 * @return {Promise<{result: Array<Brand>}>}
 */
export const readHotBrands = (limit = 10) => {
  return request.get("/home/brand", {
    params: {
      limit,
    },
  });
};

/**
 * 获取轮播图
 * @param {*} distributionSite 轮播图页面位置
 * @returns {Promise<{result: Array<Banners>}>}
 */
export const readBanners = (distributionSite = 1) => {
  return request.get("/home/banner", {
    params: {
      distributionSite,
    },
  });
};

/**
 * 获取新鲜好物
 * @param {number} limit 限制获取的数据条数
 * @return {Promise<{result: Array<newGoods>}>}
 */
export function readNewGoods(limit = 4) {
  return request.get("/home/new", {
    params: {
      limit,
    },
  });
}

/**
 * 获取人气推荐
 * @return {Promise<{result: Array<hotGoods>}>}
 */
export function readHotProduct() {
  return request.get("/home/hot");
}

/**
 * 获取产品区块数据
 * @return {Promise<{result: Array<Product>}>}
 */
export const readGoodProducts = () => {
  return request.get("/home/goods");
};

/**
 * 获取最新专题
 * @param {number} limit 限制请求数据的数量
 * @return {Promise<{result: Array<Special>}>}
 */
export const readSpecial = (limit) => {
  return request.get("/home/special", {
    params: {
      limit,
    },
  });
};
