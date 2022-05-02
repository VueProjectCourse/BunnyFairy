// import { ref } from "vue";
import { useVModel } from "@vueuse/core";

// 实现商品数量更改
export const useNumberBox = (props, emit) => {
  // const number = ref(props.modelValue);
  // number 需要改变的状态数据
  // useVModel(props属性, 监听数据， 事件总线)
  const number = useVModel(props, "modelValue", emit);

  const setNumber = (step = 1) => {
    const nextValue = number.value + step;
    if (nextValue < 1) {
      number.value = 1;
    } else if (nextValue > props.max) {
      number.value = props.max;
    } else {
      number.value = nextValue;
    }

    // emit("update:modelValue", number);
  };

  return { number, setNumber };
};
