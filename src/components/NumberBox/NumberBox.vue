<script setup>
import { useNumberBox } from "./NumberBox";
const props = defineProps({
  max: {
    type: Number,
  },
  modelValue: {
    type: Number,
  },
  label: {
    type: String,
    default: "数字",
  },
});
const { number, setNumber } = useNumberBox(props, emit);
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="xtx-number-box">
    <div class="label">{{ label }}</div>
    <div class="number-box">
      <a href="javascript:" @click="setNumber(-1)">-</a>
      <input type="text" readonly :value="number" />
      <a href="javascript:" @click="setNumber(1)">+</a>
    </div>
  </div>
</template>

<style scoped>
.xtx-number-box {
  display: flex;
  align-items: center;
}
.xtx-number-box .label {
  width: 60px;
  color: #999;
  padding-left: 10px;
}
.xtx-number-box .number-box {
  width: 120px;
  height: 30px;
  border: 1px solid #e4e4e4;
  display: flex;
}
.xtx-number-box .number-box > a {
  width: 29px;
  line-height: 28px;
  text-align: center;
  background: #f8f8f8;
  font-size: 16px;
  color: #666;
}
.xtx-number-box .number-box > a:first-of-type {
  border-right: 1px solid #e4e4e4;
}
.xtx-number-box .number-box > a:last-of-type {
  border-left: 1px solid #e4e4e4;
}
.xtx-number-box .number-box > input {
  width: 60px;
  padding: 0 5px;
  text-align: center;
  color: #666;
}
</style>
