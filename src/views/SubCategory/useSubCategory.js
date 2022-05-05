import { useRoute } from "vue-router";
import { useCateStore } from "@/stores/cateStore";
import { storeToRefs } from "pinia";
import { ref, watchEffect } from "vue";
import { readGoodsReq } from "@/api/categoryAPI";

// 声明 正在加载UI状态
export const loading = ref(false);
// 声明 无更多数据UI状态
export const finished = ref(false);
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
  page: 1,
});

export const loadMore = () => {
  // 当我们刚进入页面的时候，我们就有一个参数 page
  // 当监听的元素到可视区的时候，让参数page+1
  // console.log(11111);
  reqParams.value = {
    ...reqParams.value,
    page: reqParams.value.page + 1,
  };
};

// setReqParams作用是: 把所有的筛选和排序 和 categoryId 整合到一起 发送到服务器
export const setReqParams = (target) => {
  reqParams.value = { ...reqParams.value, ...target };
};

// 商品数据
export const filterGoodsList = ref(null);

// 调用获取商品数据的方法
export const useGoods = () => {
  // 当调用useGoods的时候 要发请求
  loading.value = true;

  // 修改状态的方法
  readGoodsReq(reqParams.value).then(({ data: res, status: status }) => {
    if (status === 200) {
      // 当数据获取到之后， 要让loading隐藏
      loading.value = false;

      // 当page是第一页的时候, 直接把结果进行赋值
      if (reqParams.value.page == 1) {
        filterGoodsList.value = res.result;
      } else {
        // 如果不是第一页，那么把旧数据和新数据进行整合
        filterGoodsList.value = {
          ...res.result,
          items: [...filterGoodsList.value.items, ...res.result.items],
        };
      }
    }

    // 如果当前页码如果和总页数一样，说明是最后一页 让finished为true 这一页啥数据都没有 让finished为true
    if (res.result.page == res.result.pages || res.result.pages == 0) {
      finished.value = true;
    }
  });
};
