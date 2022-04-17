<script setup>
import { onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import {
  filters,
  filtersLoading,
  readFilter,
  updateFilter,
} from "./useSubFilter";

onMounted(() => {
  const route = useRoute();
  readFilter(route.params.id);
});

onBeforeRouteUpdate((to) => {
  readFilter(to.params.id);
});
</script>

<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filters && !filtersLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          href="javascript:"
          v-for="item in filters?.brands"
          :key="item.id"
          :class="{ active: filters.selectedBrandId === item.id }"
          @click="
            filters.selectedBrandId = item.id;
            updateFilter();
          "
          >{{ item.name }}</a
        >
      </div>
    </div>

    <div class="item" v-for="item in filters?.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}：</div>
      <div class="body">
        <a
          href="javascript:"
          v-for="subitem in item?.properties"
          :key="subitem.id"
          :class="{ active: item.selectedFilterName === subitem.name }"
          @click="
            item.selectedFilterName = subitem.name;
            updateFilter();
          "
          >{{ subitem.name }}</a
        >
      </div>
    </div>
  </div>

  <div class="sub-filter" v-else>
    <Skeleton class="item" width="800px" height="40px" />
    <Skeleton class="item" width="800px" height="40px" />
    <Skeleton class="item" width="600px" height="40px" />
    <Skeleton class="item" width="600px" height="40px" />
    <Skeleton class="item" width="600px" height="40px" />
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

.xtx-skeleton {
  padding: 10px 0;
}
</style>
