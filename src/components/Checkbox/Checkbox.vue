<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:modelValue"]);

const isChecked = ref(false);
const setIsChecked = () => {
  isChecked.value = !isChecked.value;
  emits("update:modelValue", isChecked.value);
};

// 进来之后立即之后
watchEffect(() => {
  isChecked.value = props.modelValue;
});
</script>

<template>
  <div class="xtx-checkbox" @click="setIsChecked">
    <i class="iconfont icon-checked" v-if="isChecked"></i>
    <i class="iconfont icon-unchecked" v-else></i>
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
