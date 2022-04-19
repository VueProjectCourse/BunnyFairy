<script setup>
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";

const props = defineProps({
  // 是否正在加载
  loading: {
    type: Boolean,
    default: false,
  },
  //是否已经加载全部数据
  finished: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["infinite"]);

// 被监听元素
const target = ref(null);
//执行监听元素的操作
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  // 如果元素进入了可视区
  if (isIntersecting) {
    console.log(props.loading, props.finished);
    if (!props.loading && !props.finished) {
      emits("infinite");
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
