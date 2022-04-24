import { ref } from "vue";
import { readRelevantGoods } from "@/api/detailAPI";

export const useGoodsRelevant = (id) => {
  // 声明bannerList数组 用来存储请求来的数据
  const relevant = ref([]);

  const setReleVant = () => {
    // 调用接口请求数据
    readRelevantGoods(id).then(({ data: res, status: status }) => {
      if (status === 200) {
        // relevant.value = res.result;
        const size = 4;
        // 总共有多少页
        const totalPage = Math.ceil(res.result.length / 4);

        for (var i = 0; i < totalPage; i++) {
          relevant.value.push(res.result.slice(i * size, i * size + size));
        }

        // console.log(relevant.value);
      }
    });
  };

  return { relevant, setReleVant };
};
