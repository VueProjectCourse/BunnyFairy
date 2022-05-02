import { ref } from "vue";
import { readBanners } from "@/api/homeAPI"

export const useBanner = () => {
  // 声明bannerList数组 用来存储请求来的数据
  const bannerList = ref(null);
  // 调用接口请求数据
  readBanners().then(({ data: res, status: status }) => {
    if (status === 200) {
      // 把数据赋值给bannerList
      bannerList.value = res.result;
    }
  })
  // 导出请求数据
  return { bannerList };
}