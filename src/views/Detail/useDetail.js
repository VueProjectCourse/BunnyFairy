import { ref } from "vue";
import { readGoodsDetailById } from "../../api/goodsAPI";

export const goodsDetail = ref(null);
export const setGoodsDetail = (id) => {
  readGoodsDetailById(id).then(({ data: res, status: status }) => {
    if (status === 200) {
      goodsDetail.value = res.result;
    }
  });
};
