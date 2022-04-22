<script setup>
import { useSpecSelected } from "./GoodsSku";
defineProps({
  specs: {
    type: Array,
    default: () => [],
  },
});

const { setSpecSelect } = useSpecSelected();
</script>

<template>
  <div class="goods-sku">
    <dl v-for="item in specs" :key="item.name">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="subitem in item.values" :key="subitem.name">
          <img
            v-if="subitem.picture"
            :src="subitem.picture"
            :alt="subitem.name"
            :class="{ selected: subitem.selected }"
            @click="setSpecSelect(item, subitem)"
          />
          <span
            @click="setSpecSelect(item, subitem)"
            :class="{ selected: subitem.selected }"
            v-else
            >{{ subitem.name }}</span
          >
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
}
.goods-sku dl {
  display: flex;
  padding-bottom: 5px;
  align-items: center;
}
.goods-sku dl dt {
  width: 50px;
  color: #999;
}
.goods-sku dl dd {
  flex: 1;
  color: #666;
}
.goods-sku dl dd > img {
  width: 50px;
  height: 50px;
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}
.goods-sku dl dd > img.selected {
  border-color: var(--primary-color);
}
.goods-sku dl dd > img.disabled {
  opacity: 0.6;
  border-style: dashed;
  cursor: not-allowed;
}
.goods-sku dl dd > span {
  display: inline-block;
  height: 30px;
  line-height: 28px;
  padding: 0 20px;
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}
.goods-sku dl dd > span.selected {
  border-color: var(--primary-color);
}
.goods-sku dl dd > span.disabled {
  opacity: 0.6;
  border-style: dashed;
  cursor: not-allowed;
}
</style>
