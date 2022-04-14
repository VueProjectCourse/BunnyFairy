// create(add)增 delete(remove)删 update(edit)改  read(find)查
import request from "../utils/request"

/**
 * 根据一级分类ID获取一级分类下的具体信息
 * @param id 一级分类ID
 * @return {Promise}
 */
export const readCategoryById = (id) => {
  return request.get("/category", {
    params: {
      id
    },
  });
};