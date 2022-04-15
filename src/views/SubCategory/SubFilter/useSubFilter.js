import { useRoute } from "vue-router";
import { ref } from "vue";
import { readFilterById } from "@/api/categoryAPI";
export const useFilter = () => {
  const route = useRoute();
  const filterList = ref(null);

  readFilterById(route.params.id).then(({ data: res, status: status }) => {
    if (status === 200) {
      // console.log(res.result);
      res.result.brands.unshift({ id: null, name: "全部" });
      res.result.saleProperties.forEach((item) => {
        item.properties.unshift({ id: null, name: "全部" });
      });
      filterList.value = res.result;
    }
  });

  return { filterList };
};
