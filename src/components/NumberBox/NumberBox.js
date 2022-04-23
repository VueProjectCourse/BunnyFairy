import { useVModel } from "@vueuse/core";
export const useNumberBox = (props, emit) => {
  const number = useVModel(props, "modelValue", emit);
  const setNumber = (step = 1) => {
    const nextNumber = number.value + step;
    if (nextNumber < 1) {
      number.value = 1;
    } else if (nextNumber > props.max) {
      number.value = props.max;
    } else {
      number.value = nextNumber;
    }
  };

  return { number, setNumber };
};
