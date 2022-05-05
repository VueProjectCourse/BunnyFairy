<script setup>
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
const props = defineProps({
  // 控制正在加载效果的显示
  loading: {
    type: Boolean,
    default: false,
  },
  // 控制没有更多效果的显示
  finished: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["infinite"]);

// 监听 某一个元素是否进入可视区的方法
// target 监听哪个元素
// isIntersecting 是否进入可视区
const target = ref(null);
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    // 如果元素进入了可视区 是要让父组件去请求数据的 但是如果已经在请求数据了 没有数据了就没必要请求

    if (!props.loading && !props.finished) {
      emit("infinite");
    }
  }
});
</script>

<template>
  <div class="xtx-infinite-loading" ref="target">
    <div class="loading" v-if="loading">
      <span class="img"></span>
      <span class="text">正在加载...</span>
    </div>
    <div class="none" v-if="finished">
      <span class="img"></span>
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>

<style scoped>
.xtx-infinite-loading .loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.xtx-infinite-loading .loading .img {
  width: 50px;
  height: 50px;
  background: url(@/assets/images/load.gif) center no-repeat;
  background-size: contain;
}
.xtx-infinite-loading .loading .text {
  color: #999;
  font-size: 16px;
}
.xtx-infinite-loading .none {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.xtx-infinite-loading .none .img {
  width: 200px;
  height: 134px;
  background: url(@/assets/images/none.png) center no-repeat;
  background-size: contain;
}
.xtx-infinite-loading .none .text {
  color: #999;
  font-size: 16px;
}
</style>
