# 封装复选框组件

::: tip 目标
这一小节，我们的目标是 封装CheckBox复选框组件，为什么要封装复选框组件呢？因为网站中的所有复选框样式风格是因浏览器不同而不同的，且HTML
中默认的复选框不支持样式的完全自定义，因此我们要封装复选框组件
:::

::: warning 步骤

1. 在`src/components`中，编写复选框组件的布局代码
2. 在复选框组件中，编写样式代码
3. 在复选框中，编写选中状态(isChecked)和改变状态的方法(setChecked)
4. 实现复选框的双向数据绑定功能
5. 通过`@vueuse/core` 实现
6. 使用代码测试组件
:::

::: info 体验

* **Step.1：在`src/components`中，编写复选框组件的布局代码**

```html
<template>
  <div class="xtx-checkbox">
    <i class="iconfont icon-checked"></i>
    <i class="iconfont icon-unchecked"></i>
    <span></span>
  </div>
</template>
```

* **Step.2：在复选框组件中，编写样式代码**

```css
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
```

* **Step.3：在复选框中，编写选中状态(isChecked)和改变状态的方法(setChecked)**

```html
<script setup>
// import { useVModel } from "@vueuse/core";
import { ref } from "vue";

const isChecked = ref(false);
const setChecked = () => {
  isChecked.value = !isChecked.value;
};
</script>
<template>
  <div class="xtx-checkbox" @click="setChecked">
    <i class="iconfont icon-checked" v-if="isChecked"></i>
    <i class="iconfont icon-unchecked" v-else></i>
    <!-- 如果插槽存在内容 $slots.default 为真 否则为假 -->
    <span v-if="$slots.default"><slot></slot></span>
  </div>
</template>
```

* **Step.4：实现复选框的双向数据绑定功能**

```js
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
```

* **Step.5：通过`@vueuse/core` 实现**

```js
import { useVModel } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

const isChecked = useVModel(props, "modelValue", emit);

const setChecked = () => {
  isChecked.value = !isChecked.value;
  emit("update:modelValue", isChecked.value);
};
```

* **Step.6：使用代码测试组件**

```html
<!-- 外部调用测试代码 -->
<Checkbox v-model="test"></Checkbox>
<button @click="test = !test"></button>
```

:::
