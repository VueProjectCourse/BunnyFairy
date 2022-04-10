import { computed } from "vue";
import { readHotBrands } from "../../api/homeAPI"
import { useCateStore } from "../../stores/cateStore";

export const useMenuList = () => {

  const cateStore = useCateStore();

  const brand = {
    id: "brand",
    name: "品牌",
    children: [{ id: "child-brand", name: "推荐品牌" }],
    brands: []
  }

  readHotBrands().then(({ data: res, status: status }) => {
    if (status === 200) {
      brand.brands = res.result;
    }
  });

  const menuList = computed(() => {
    const list = cateStore.cateList.map((item) => ({
      ...item,
      children: item.children ? item.children.slice(0, 2) : null,
    }));
    console.log(brand);
    // 向分类列表中添加品牌
    list.push(brand);
    console.log(list);
    // 返回处理好的分类列表数据
    return list;
  });

  return { menuList };

}
