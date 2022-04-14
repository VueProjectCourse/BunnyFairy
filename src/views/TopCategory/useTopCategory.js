import { useRoute } from "vue-router"
import { useCateStore } from "../../stores/cateStore"
import { storeToRefs } from "pinia"
import { readBanners } from "../../api/homeAPI"
import { computed, ref } from "vue";

export const useBread = () => {
  // 获取路由信息对象
  const route = useRoute();
  // 获取分类数据
  const { cateList } = storeToRefs(useCateStore())

  // 通过计算属性得到一级分类
  const topCate = computed(() => {
    return cateList.value.find((item) => (item.id === route.params.id))
  })

  return { topCate }
}

export const useTopCateBanner = () => {
  // 存储轮播图数据
  const carouselList = ref(null);
  // 获取轮播图数据
  readBanners(2).then(({ data: res, status: status }) => {
    if (status === 200) {
      carouselList.value = res.result;
    }
  });

  return { carouselList }
}