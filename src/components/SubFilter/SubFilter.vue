<script setup>
import { useFilter } from "./useSubFilter"
const { filterList } = useFilter();
</script>

<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filterList">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a href="javascript:" v-for="item in filterList?.brands" :key="item.id">{{item.name}}</a>
      </div>
    </div>

    <div class="item" v-for="item in filterList?.saleProperties" :key="item.id">
      <div class="head">{{item.name}}：</div>
      <div class="body">
        <a href="javascript:" v-for="subitem in item?.properties" :key="subitem.id">{{subitem.name}}</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "@/assets/styles/variable.css";

.sub-filter {
  background: #fff;
  padding: 25px;
}

.sub-filter .item {
  display: flex;
  line-height: 40px;
}

.sub-filter .item .head {
  width: 80px;
  color: #999;
}

.sub-filter .item .body {
  flex: 1;
}

.sub-filter .item .body a {
  margin-right: 36px;
  transition: all 0.3s;
  display: inline-block;
}

.sub-filter .item .body a.active,
.sub-filter .item .body a:hover {
  color: var(--primary-color);
}
</style>