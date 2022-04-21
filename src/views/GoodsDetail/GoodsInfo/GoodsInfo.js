import { ref } from "vue";
export const useLocation = () => {
  // 用于存储用户选择的城市信息的名称集合
  const location = ref("");
  // 当用户选择完城市信息以后调用
  const setLocation = (data) => {
    // 拼接用户选择的城市信息
    location.value = data.location;
  };

  return { location, setLocation };
};
