import { ref } from "vue";
import { readHotProduct } from "@/api/homeAPI";

export const useHotProduct = () => {
  // 声明bannerList数组 用来存储请求来的数据
  const hotList = ref(null);
  // 调用接口请求数据
  readHotProduct().then(({ data: res, status: status }) => {
    if (status === 200) {
      // 把数据赋值给bannerList
      hotList.value = res.result;
    }
  });

  // 导出请求数据
  return { hotList };
};
