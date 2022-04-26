import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import { account } from "@/utils/vee-validate-schema";
export const useToggleAccount = () => {
  const accountName = ref("account");
  const setAccountName = (name) => {
    accountName.value = name;
  };

  return { accountName, setAccountName };
};

export const useAccountValidate = () => {
  const { value: accountField, errorMessage: accountError } =
    useField("account");
  const { handleSubmit: accountHandleSubmit } = useForm({
    validationSchema: {
      account,
    },
  });

  return { accountField, accountError, accountHandleSubmit };
};
