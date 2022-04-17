<script setup>
// import { useVModel } from "@vueuse/core";
import { ref, watch } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

const isChecked = ref(false);
const setChecked = () => {
  isChecked.value = !isChecked.value;
  emit("update:modelValue", isChecked.value);
};
watch(
  () => props.modelValue,
  () => {
    isChecked.value = props.modelValue;
  }
);
</script>
<template>
  <div class="xtx-checkbox" @click="setChecked">
    <i class="iconfont icon-checked" v-if="isChecked"></i>
    <i class="iconfont icon-unchecked" v-else></i>
    <!-- 如果插槽存在内容 $slots.default 为真 否则为假 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
}

.xtx-checkbox .icon-checked {
  color: var(--primary-color);
}

.xtx-checkbox .icon-checked ~ span {
  color: var(--primary-color);
}

.xtx-checkbox i {
  position: relative;
  top: 1px;
}

.xtx-checkbox span {
  margin-left: 2px;
}
</style>
