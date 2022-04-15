import { ref } from "vue"
import { readBanners } from "../../../api/homeAPI"
export const useBanners = () => {
  const bannerList = ref(null);

  readBanners().then(({ data: res, status }) => {
    if (status === 200) {
      bannerList.value = res.result;
    }
  })

  return { bannerList }
}