import { ref } from "vue";

export const useToggleMethod = () => {
  const activeName = ref("account");
  const setActiveName = (name) => {
    activeName.value = name;
  };

  return { activeName, setActiveName };
};
