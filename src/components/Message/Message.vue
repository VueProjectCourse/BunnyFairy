<script setup>
import { onMounted, ref } from "vue";

// 接收外面调用的时候 什么情况下的消息 成功 失败 警告  提示信息的样式不一样  根据内容不一样 消息具体内容也不一样
defineProps({
  // 消息提示类型 warn、error、success
  type: {
    type: String,
    default: "error",
  },
  // 消息提示内容
  text: {
    type: String,
    default: "",
  },
});
const style = {
  // 警告类型的提示
  warn: {
    icon: "icon-warning",
    color: "#E6A23C",
    backgroundColor: "rgb(253, 246, 236)",
    borderColor: "rgb(250, 236, 216)",
  },
  // 错误类型的提示
  error: {
    icon: "icon-shanchu",
    color: "#F56C6C",
    backgroundColor: "rgb(254, 240, 240)",
    borderColor: "rgb(253, 226, 226)",
  },
  // 成功类型的提示
  success: {
    icon: "icon-queren2",
    color: "#67C23A",
    backgroundColor: "rgb(240, 249, 235)",
    borderColor: "rgb(225, 243, 216)",
  },
};

// 给 Message组件添加动画，是没有效果的 只有发生组件的更新 才会有效果

const isShow = ref(false);

onMounted(() => {
  isShow.value = true;
});
</script>
<template>
  <Transition name="down">
    <div class="xtx-message" :style="style[type]" v-if="isShow">
      <i class="iconfont" :class="style[type].icon"></i>
      <span class="text">{{ text }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.xtx-message {
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
}
.xtx-message i {
  margin-right: 4px;
  vertical-align: middle;
}
.xtx-message .text {
  vertical-align: middle;
}

.down-enter-from {
  transform: translate3d(0, -75px, 0);
  opacity: 0;
}
.down-enter-active {
  transition: all 0.5s;
}
.down-leave-to {
  transform: translate3d(0, -75px, 0);
  opacity: 0;
}
.down-leave-active {
  transition: all 0.5s;
}
</style>
