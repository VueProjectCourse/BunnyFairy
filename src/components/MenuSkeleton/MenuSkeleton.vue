<script setup>
// 接收props
defineProps({
  bg: {
    // 数据类型
    type: String,
    default: "#efefef",
  },
  width: {
    type: String,
    default: "100px",
  },
  height: {
    type: String,
    default: "100px",
  },
  animated: {
    type: String,
    default: "scroll", // 'fade'
  },
});
</script>

<template>
  <div class="xtx-skeleton" :style="{ width, height }" :class="animated">
    <!-- 1 盒子-->
    <div class="block" :style="{ backgroundColor: bg }"></div>
    <!-- 2 闪效果 xtx-skeleton 伪元素 --->
  </div>
</template>

<style scoped>
.xtx-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}

.xtx-skeleton .block {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}

@keyframes scroll {
  0% {
    left: -100%;
  }

  100% {
    left: 120%;
  }
}

@keyframes fade {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}

.scroll::after {
  content: "";
  position: absolute;
  animation: scroll 1.5s ease 0s infinite;
  top: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-45deg);
}

.fade {
  animation: fade 1s linear infinite alternate;
}
</style>
