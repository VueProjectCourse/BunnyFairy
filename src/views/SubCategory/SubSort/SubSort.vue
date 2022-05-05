<script setup>
import { subSort } from "./useSubSort";
const emits = defineEmits(["onSortParamsChanged"]);
const { sortParams, setSortParams } = subSort();
</script>

<template>
  <div class="sub-sort">
    <div class="sort">
      <a
        href="javascript:"
        @click="setSortParams(emits, { sortField: '', sortMethod: 'desc' })"
        :class="{ active: sortParams.sortField === '' }"
        >默认排序</a
      >
      <a
        href="javascript:"
        @click="setSortParams(emits, { sortField: 'publishTime' })"
        :class="{ active: sortParams.sortField === 'publishTime' }"
        >最新商品</a
      >
      <a
        href="javascript:"
        @click="setSortParams(emits, { sortField: 'orderNum' })"
        :class="{ active: sortParams.sortField === 'orderNum' }"
        >最高人气</a
      >
      <a
        href="javascript:"
        @click="setSortParams(emits, { sortField: 'evaluateNum' })"
        :class="{ active: sortParams.sortField === 'evaluateNum' }"
        >评论最多</a
      >
      <a
        href="javascript:"
        @click="
          setSortParams(emits, {
            sortField: 'price',
            // 判断一下是否时desc 如果是，那么值就是asc
            // 如果值是asc的时候再问是否是desc 那么值就换成 desc
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
        @update:modelValue="setSortParams(emits)"
        >仅显示有货商品</Checkbox
      >
      <Checkbox
        v-model="sortParams.onlyDiscount"
        @update:modelValue="setSortParams(emits)"
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
