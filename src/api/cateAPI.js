// 分类模块

// 导入封装好的axios工具函数
import request from "../utils/request";
// 增(create)删(delete)改(update)查(read)
/**
 * 首页-全部分类（包含推荐商品）
 * @returns {Promise<{result: Array<Category>}>}
 */
export function readCategories() {
  // 根据工具函数 导出一个方法
  return request.get("/home/category/head");
}
