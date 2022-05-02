import { ref } from "vue";
import { readNewGoods } from "@/api/homeAPI"

export const useNewGoods = () => {
  // 声明bannerList数组 用来存储请求来的数据
  const goodsList = ref(null);
  // 调用接口请求数据
  readNewGoods().then(({ data: res, status: status }) => {
    if (status === 200) {
      // 把数据赋值给bannerList
      goodsList.value = res.result;
    }
  })

  // 导出请求数据
  return {goodsList};
}