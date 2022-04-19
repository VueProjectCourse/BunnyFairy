import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { ref, watchEffect } from "vue";
import { useCateStore } from "@/stores/cateStore";
import { readGoodsReq } from "@/api/categoryAPI";

// 动态生成breadItem
export const useBread = () => {
  // 获取路由信息的id
  const route = useRoute();

  // 获取分类信息的数组
  const { cateList } = storeToRefs(useCateStore());
  // console.log(cateList)
  // 遍历分类信息的数组 找到对象中的二级分类id 和路由信息中的id如果一样 返回该一级分类和二级分类
  // 一级分类的对象
  const topCate = ref(null);
  // 二级分类的对象
  const subCate = ref(null);

  // 立即执行侦听器
  watchEffect(() => {
    cateList.value.forEach((item) => {
      item.children?.forEach((subitem) => {
        if (subitem.id === route.params.id) {
          // 一级分类的对象
          topCate.value = item;
          // 二级分类的对象
          subCate.value = subitem;
        }
      });
    });
  });

  return { topCate, subCate };
};

// 参数状态
export const reqParams = ref({
  // categoryId来自于 route.params.id
  categoryId: null,
});

// 用于标识加载状态
export const loading = ref(false);

//用于标识是否全部数据都已加载完毕
export const finished = ref(false);

// setReqParams作用是: 把所有的筛选和排序 和 categoryId 整合到一起 发送到服务器
export const setReqParams = (target) => {
  reqParams.value = { ...reqParams.value, ...target };
  console.log(reqParams.value);
};

// 商品数据
export const filterGoodsList = ref(null);

// 调用获取商品数据的方法
export const setFilterGoodsList = () => {
  // 数据状态

  // 修改状态的方法
  readGoodsReq(reqParams.value).then(({ data: res, status: status }) => {
    if (status === 200) {
      loading.value = false;
      // 把数据赋值给bannerList
      filterGoodsList.value = res.result;
    }
  });
};
