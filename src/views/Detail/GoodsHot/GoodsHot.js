import { ref } from "vue";
import { readHotGoods } from "@/api/detailAPI";

export const useHotGoods = () => {
  // 声明bannerList数组 用来存储请求来的数据
  const hotList = ref(null);

  const setHostList = (id, type) => {
    // 调用接口请求数据
    readHotGoods(id, type).then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        hotList.value = res.result;
      }
    });
  };

  return { hotList, setHostList };
};
