import { ref } from "vue";

export const useToggleAccount = () => {
  const accountName = ref("account");
  const setAccountName = (name) => {
    accountName.value = name;
  };

  return { accountName, setAccountName };
};
