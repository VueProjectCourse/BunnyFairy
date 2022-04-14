import { useRoute } from "vue-router"
import { useCateStore } from "../../stores/cateStore"
import { storeToRefs } from "pinia"
import { computed } from "vue";

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