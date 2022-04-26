import { ref } from "vue";

export const useToggleLogin = () => {
  const activeName = ref("account");
  const setActiveName = (name) => {
    activeName.value = name;
  };

  return { activeName, setActiveName };
};
