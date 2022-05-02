<script setup>
import { ref } from "vue";

defineProps({
  images: {
    type: Array,
  },
});

const preImage = ref(null);
</script>

<template>
  <div class="goods-comment-image">
    <div class="list">
      <a
        href="javascript:"
        v-for="(img, index) in images"
        :key="index"
        @click="preImage = img"
      >
        <img :src="img" alt="" />
      </a>
    </div>
    <div class="preview" v-show="preImage">
      <img :src="preImage" alt="" />
      <i class="iconfont icon-close-new" @click="preImage = null"></i>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.goods-comment-image .list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.goods-comment-image .list a {
  width: 120px;
  height: 120px;
  border: 1px solid #e4e4e4;
  margin-right: 20px;
  margin-bottom: 10px;
}
.goods-comment-image .list a img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.goods-comment-image .list a.active {
  border-color: var(--primary-color);
}
.goods-comment-image .preview {
  width: 480px;
  height: 480px;
  border: 1px solid #e4e4e4;
  background: #f8f8f8;
  margin-bottom: 20px;
  position: relative;
}
.goods-comment-image .preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.goods-comment-image .preview i {
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  line-height: 30px;
}
</style>
