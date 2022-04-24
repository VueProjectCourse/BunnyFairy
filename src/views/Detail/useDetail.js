// 商品详情
import { ref } from "vue";
import { readGoodsDetailById } from "../../api/detailAPI";
// 商品详情状态
export const goodsDetail = ref(null);
// 声明设置商品详情状态方法
export const setGoodsDetail = (id) => {
  readGoodsDetailById(id).then(({ data: res, status: status }) => {
    if (status === 200) {
      // 把数据赋值给bannerList
      goodsDetail.value = res.result;
    }
  });
};
