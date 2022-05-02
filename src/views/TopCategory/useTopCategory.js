import { useRoute } from "vue-router";
import { useCateStore } from "@/stores/cateStore";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { readBanners } from "@/api/homeAPI";
// 动态生成breadItem
export const useBread = () => {
  // 获取路由信息的id
  const route = useRoute();

  // 获取分类信息的数组
  const { cateList } = storeToRefs(useCateStore());
  // console.log(cateList)
  // 遍历分类信息的数组 找到对象中的id 和路由信息中的id如果一样 返回该对象
  const topCate = computed(() => {
    return cateList.value.find((item) => item.id === route.params.id);
  });

  return { topCate };
};

export const useTopCateCarousel = () => {
  const carouselList = ref(null);

  readBanners(2).then(({ data: res, status: status }) => {
    if (status === 200) {
      // 把数据赋值给bannerList
      carouselList.value = res.result;
    }
  });

  return { carouselList };
};
