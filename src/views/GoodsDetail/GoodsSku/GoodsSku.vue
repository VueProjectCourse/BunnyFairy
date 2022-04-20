<script setup>
defineProps({
  specs: {
    type: Array,
    default: () => [],
  },
});

const updateSpecSelected = (spec, value) => {
  // 如果用户点击的规格已经是选中的
  if (value.selected) {
    // 让其取消选中
    value.selected = false;
  } else {
    // 先将该规格中的所有规格取消选中
    spec.values.forEach((item) => (item.selected = false));
    // 将当前用户点击的规格设置为选中
    value.selected = true;
  }
};
</script>

<template>
  <div class="goods-sku">
    <dl v-for="spec in specs" :key="spec.name">
      <dt>{{ spec.name }}</dt>
      <dd>
        <template v-for="value in spec.values" :key="value.name">
          <img
            v-if="value.picture"
            :src="value.picture"
            :alt="value.name"
            @click="updateSpecSelected(spec, value)"
            :class="{ selected: value.selected }"
          />
          <span
            @click="updateSpecSelected(spec, value)"
            :class="{ selected: value.selected }"
            v-else
            >{{ value.name }}</span
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
  border-color: hello;
}
.goods-sku dl dd > span.disabled {
  opacity: 0.6;
  border-style: dashed;
  cursor: not-allowed;
}
</style>
