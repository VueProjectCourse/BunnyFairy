import { useRoute } from "vue-router"
import { useCateStore } from "@/stores/cateStore"
import { storeToRefs } from "pinia"
import { ref, watchEffect } from "vue";

export const useBread = () => {
  // 获取路由信息对象
  const route = useRoute();
  // console.log(route.params.id)
  // 获取分类信息store
  // const cateStore = useCateStore();
  const { cateList } = storeToRefs(useCateStore())
  // 当前访问分类信息
  const topCate = ref(null);
  const subCate = ref(null);

  watchEffect(()=>{
    cateList.value.forEach((item) => {
      item.children?.forEach((subitem) => {
        if (subitem.id == route.params.id) {
          topCate.value = item;
          subCate.value = subitem;
        }
      })
    })
  })

  return { topCate, subCate }
}