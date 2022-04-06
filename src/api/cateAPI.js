// create(add)增 delete(remove)删 update(edit)改  read(find)查
import request from "../utils/request"
/**
 * 获取分类列表
 * @return {Promise<{result: Array<Category>}>}
 */
export function readCategories() {
  return request.get("/home/category/head");
}