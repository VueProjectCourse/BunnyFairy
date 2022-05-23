<script setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  visible: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:visible"]);
// 双向数据绑定的写法
const isRendering = useVModel(props, "visible", emit);

// 让对话框显示的方法
// 渲染弹框
// const render = () => {
//   isRendering.value = true;
// };
// 让对话框隐藏的方法
const destroy = () => {
  isRendering.value = false;
};

defineExpose({
  destroy,
});

// 注册一个局部的自定义指令，需要以小写v开头
// v-fade
// directive("fade")
const vFade = {
  mounted(el) {
    // 获取input，并调用其focus()方法
    requestAnimationFrame(() => {
      el.classList.add("fade");
    });
  },
};
</script>

<template>
  <div class="xtx-dialog" v-if="isRendering" v-fade>
    <div class="wrapper" v-fade>
      <div class="header">
        <h3>{{ title }}</h3>
        <a
          href="JavaScript:"
          class="iconfont icon-close-new"
          @click="destroy"
        ></a>
      </div>
      <div class="body">
        <slot name="default"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.xtx-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8887;
  background: rgba(0, 0, 0, 0);
}
.xtx-dialog.fade {
  transition: all 0.4s;
  background: rgba(0, 0, 0, 0.5);
}
.xtx-dialog .wrapper {
  width: 600px;
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  opacity: 0;
}
.xtx-dialog .wrapper.fade {
  transition: all 0.4s;
  transform: translate(-50%, -50%);
  opacity: 1;
}
.xtx-dialog .wrapper .body {
  padding: 20px 40px;
  font-size: 16px;
}
.xtx-dialog .wrapper .body .icon-warning {
  color: var(--price-color);
  margin-right: 3px;
  font-size: 16px;
}
.xtx-dialog .wrapper .footer {
  text-align: center;
  padding: 10px 0 30px 0;
}
.xtx-dialog .wrapper .header {
  position: relative;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #f5f5f5;
}
.xtx-dialog .wrapper .header h3 {
  font-weight: normal;
  font-size: 18px;
}
.xtx-dialog .wrapper .header a {
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 24px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #999;
}
.xtx-dialog .wrapper .header a:hover {
  color: #666;
}
</style>
