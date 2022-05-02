// 整理分类数据 渲染分类菜单
import { computed } from "vue";
import { useCateStore } from "@/stores/cateStore"
// 从homeAPI中导出 接口方法 readHotBrands
import { readHotBrands } from "@/api/homeAPI"

// 1. 声明一个方法 用于处理cateStore并生成菜单所需数据的方法
// 注意: useReadCategory是一个组合函数
// 组合函数是不允许出现异步函数的
export const useReadCategory = () => {
  // 1.1 获取cateStore中原始数据 cateList
  const cateStore = useCateStore();
  // 1.2 创建一个品牌对象 作为 第十个菜单项
  const brand = {
    id: 'brand',
    name: "品牌",
    children: [
      {
        id: 'brand-child',
        name: '品牌推荐'
      }
    ],
    // 存储获取到的 热门品牌数据的
    brands: []
  }
  // 调用readHotBrands方法获取 品牌数据
  // 注意如果接口方法在组合函数中 不能使用async 和await
  // 使用 原始的promise中获取数据的方法
  readHotBrands(6).then(({data: res, status: status})=>{
    if (status === 200) {
      brand.brands = res.result;
    }
  })


  // 1.3 处理 cateList 并且把新创建的品牌对象添加和catelist中的对象一样 组成10个菜单项
  const menuList = computed(() => {
    const list = cateStore.cateList.map((item) => ({ ...item, children: item.children ? item.children.slice(0, 2) : null }))
    list.push(brand);

    return list;
  })
  // 1.4 返回具体的数据
  return { menuList }
}
