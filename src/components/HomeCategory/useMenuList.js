import { computed} from "vue";
// import { readCategories } from "../../api/cateAPI"
import { useCateStore } from "../../stores/cateStore";

export const useMenuList = () => {
  const cateStore = useCateStore();
  const brand = {
    id: "brand",
    name: "品牌",
    children: [{ id: "child-brand", name: "推荐品牌" }],
    brands: []
  };

  const menuList =computed(()=>{

    const list = cateStore.cateList.map((item) => ({
      ...item,
      children: item.children ? item.children.slice(0, 2) : null,
    }));

    
    
    // 向分类列表中添加品牌
    list.push(brand);

    console.log(list);
    // 返回处理好的分类列表数据
    return list;
  });

  return {menuList};

}
