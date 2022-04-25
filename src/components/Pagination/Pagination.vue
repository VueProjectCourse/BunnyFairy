<script setup>
import { useVModel } from "@vueuse/core";
import { computed } from "vue";

const props = defineProps({
  // 当前页
  page: {
    type: Number,
    default: 1,
  },
  // 总数据条数
  count: {
    type: Number,
    default: 1,
  },
  // 每页显示数据条数
  pageSize: {
    type: Number,
    default: 10,
  },
});
const emit = defineEmits(["update:page"]);
// 当前页
const currentPage = useVModel(props, "page", emit);
// 总数据条数
const totalCount = computed(() => props.count);
// 每页显示数据条数
const pageSize = computed(() => props.pageSize);

// 显示页码按钮的个数
const pageButtonNum = 5;

// 页码偏移量计算
const pageOffset = Math.floor(pageButtonNum / 2); // 2

const pageInfo = computed(() => {
  let start = currentPage.value - pageOffset; // 3

  let end = start + pageButtonNum - 1;
  let totalPage = Math.ceil(totalCount.value / pageSize.value);
  if (start < 1) {
    start = 1;
    let tmp = start + pageButtonNum - 1;

    end = tmp > totalPage ? totalPage : tmp;
  }

  if (end > totalPage) {
    end = totalPage;

    let tmp = end - pageButtonNum + 1;
    start = tmp < 1 ? 1 : tmp;
  }

  let pageButtons = [];

  for (var i = start; i <= end; i++) {
    pageButtons.push(i);
  }

  return { start, end, totalPage, pageButtons };
});
</script>

<template>
  <div class="xtx-pagination">
    <a href="javascript:" @click="currentPage--" v-if="currentPage > 1"
      >上一页</a
    >
    <span v-if="pageInfo.start > 1">...</span>
    <a
      href="javascript:"
      @click="currentPage = page"
      :class="{ active: page === currentPage }"
      v-for="page in pageInfo.pageButtons"
      :key="page"
      >{{ page }}</a
    >
    <span v-if="pageInfo.start < pageInfo.totalPage">...</span>
    <a
      href="javascript:"
      @click="currentPage++"
      v-if="currentPage < pageInfo.totalPage"
      >下一页</a
    >
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.xtx-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
}
.xtx-pagination > a {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  margin-right: 10px;
}
.xtx-pagination > a:hover {
  color: var(--primary-color);
}
.xtx-pagination > a.active {
  background: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
}
.xtx-pagination > a.disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
.xtx-pagination > a.disabled:hover {
  color: #333;
}
.xtx-pagination > span {
  margin-right: 10px;
}
</style>
