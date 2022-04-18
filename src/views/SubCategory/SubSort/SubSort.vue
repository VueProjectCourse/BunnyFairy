<script setup>
import { sortParams, updateSortParams } from "./useSubSort";
const emits = defineEmits(["onSortParamsChanged"]);
</script>
<template>
  <div class="sub-sort">
    <div class="sort">
      <a
        href="javascript:"
        :class="{ active: sortParams.sortField === '' }"
        @click="updateSortParams(emits, { sortField: '', sortMethod: 'desc' })"
        >默认排序</a
      >
      <a
        href="javascript:"
        :class="{ active: sortParams.sortField === 'publishTime' }"
        @click="updateSortParams(emits, { sortField: 'publishTime' })"
        >最新商品</a
      >
      <a
        href="javascript:"
        :class="{ active: sortParams.sortField === 'orderNum' }"
        @click="updateSortParams(emits, { sortField: 'orderNum' })"
        >最高人气</a
      >
      <a
        href="javascript:"
        :class="{ active: sortParams.sortField === 'evaluateNum' }"
        @click="updateSortParams(emits, { sortField: 'evaluateNum' })"
        >评论最多</a
      >
      <a
        href="javascript:"
        @click="
          updateSortParams(emits, {
            sortField: 'price',
            sortMethod: sortParams.sortMethod === 'desc' ? 'asc' : 'desc',
          })
        "
      >
        价格排序
        <i
          class="arrow up"
          :class="{ active: sortParams.sortMethod === 'asc' }"
        ></i>
        <i
          class="arrow down"
          :class="{ active: sortParams.sortMethod === 'desc' }"
        ></i>
      </a>
    </div>
    <div class="check">
      <Checkbox
        v-model="sortParams.inventory"
        @update:modelValue="updateSortParams(emits, { inventory: $event })"
        >仅显示有货商品</Checkbox
      >
      <Checkbox
        v-model="sortParams.onlyDiscount"
        @update:modelValue="updateSortParams(emits, { onlyDiscount: $event })"
        >仅显示特惠商品</Checkbox
      >
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sub-sort .sort {
  display: flex;
}

.sub-sort .sort a {
  height: 30px;
  line-height: 28px;
  border: 1px solid #e4e4e4;
  padding: 0 20px;
  margin-right: 20px;
  color: #999;
  border-radius: 2px;
  position: relative;
  transition: all 0.3s;
}

.sub-sort .sort a.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}

.sub-sort .sort a .arrow {
  position: absolute;
  border: 5px solid transparent;
  right: 8px;
}

.sub-sort .sort a .arrow.up {
  top: 3px;
  border-bottom-color: #bbb;
}

.sub-sort .sort a .arrow.up.active {
  border-bottom-color: var(--primary-color);
}

.sub-sort .sort a .arrow.down {
  top: 15px;
  border-top-color: #bbb;
}

.sub-sort .sort a .arrow.down.active {
  border-top-color: var(--primary-color);
}

.sub-sort .check .xtx-checkbox {
  margin-left: 20px;
  color: #999;
}
</style>

<!-- 收集用户选择的排序条件 -->
<!-- 无论是筛选条件还是排序条件，最终都是服务于商品列表的，当用户点击筛选条件或者排序条件后，都要向服务器端发送请求获取筛选结果和排序结果，也就是说， -->
<!-- 我们要将用户选择的筛选条件和排序条件通过请求参数的方式发送给服务器端，这样服务器端才能基于我们的请求参数响应给我们所需的数据。 -->
<!-- 所以接下来我们要做的事情就是组织排序请求参数，当用户点击按钮更改排序方式时，同步排序请求参数 -->
