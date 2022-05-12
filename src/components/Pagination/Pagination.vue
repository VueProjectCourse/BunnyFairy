<script setup>
import { useVModel } from "@vueuse/core";
import { computed } from "vue";

const props = defineProps({
  page: {
    type: Number,
    default: 10,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  count: {
    type: Number,
    default: 100,
  },
});
const emit = defineEmits(["update:page"]);
// 分析:
// 1. 声明 当前页 (父组件设置当前页 点击当前页把值传递给父组件)
const currentPage = useVModel(props, "page", emit);
// 2. 声明 每页显示多少条数据
// 当代码写在setup内的时候 setup是一个入口函数，只执行一次，因此我们使用
// computed监听
const pageSize = computed(() => props.pageSize);
// 3. 数据总条数
const total = computed(() => props.count);

// 4. 页码按钮的个数(异常情况除外)
const buttonNumber = 5;
// 5. 偏移量(当前页左边的数字是几 右边的数字是几)
const offset = Math.floor(buttonNumber / 2); // 2
// 6. 分页所需数据
const pageInfo = computed(() => {
  // 6.1 计算 页码按钮的开始数字 3
  // 4 5 6 7 8
  // 10 - 2
  let start = currentPage.value - offset;

  // 6.2 计算 页码按钮的结束数字 7
  // 4 + 5 -1 8
  // 8 9 10 11 12
  let end = start + buttonNumber - 1;

  // 6.3 计算 数据的总页数
  let totalPage = Math.ceil(total.value / pageSize.value); // 10
  // 6.4 处理开始数字边界异常
  if (start < 1) {
    start = 1;

    let tmp = start + buttonNumber - 1;

    end = tmp > totalPage ? totalPage : tmp;
  }

  // 6.5 处理结束数字的边界异常
  // 10 > 10
  if (end >= totalPage) {
    end = totalPage;

    let tmp = end - buttonNumber + 1;

    start = tmp < 1 ? 1 : tmp;
  }

  // 6.6 声明 存储 页码按钮数字的 数组
  let pages = [];

  // 6.7 通过for循环 把开始到结束的数字添加到 上面的数组中
  for (var i = start; i <= end; i++) {
    pages.push(i);
  }
  // 6.8 返回一个对象{start, end, 数据的总页数, 存储 页码按钮数字的 数组}
  return { start, end, totalPage, pages };
});
</script>

<template>
  {{ pageInfo }}
  <div class="xtx-pagination">
    <a href="javascript:" v-if="currentPage > 1" @click="currentPage--"
      >上一页</a
    >
    <span v-if="currentPage > 1">... </span>
    <a
      href="javascript:"
      v-for="page in pageInfo.pages"
      :class="{ active: page === currentPage }"
      @click="currentPage = page"
      >{{ page }}</a
    >
    <span v-if="currentPage < pageInfo.totalPage">...</span>
    <a
      href="javascript:"
      v-if="currentPage < pageInfo.totalPage"
      @click="currentPage++"
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
