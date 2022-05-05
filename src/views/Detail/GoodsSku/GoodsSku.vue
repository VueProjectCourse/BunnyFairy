<script setup>
import { onMounted } from "vue";
import {
  useSpecSelect,
  useSpecPathMap,
  useSpecDisable,
  useUserSelect,
  useDataToParent,
} from "./GoodsSku";
const props = defineProps({
  specs: {
    type: Array,
    default: () => [],
  },
  skus: {
    type: Array,
    default: () => [],
  },
  skuId: {
    type: String,
  },
});

const emit = defineEmits(["on-spec-changed"]);

const { setSpecSelect, setSpecDefaultSelect } = useSpecSelect();
const { specPathMap, setSpecPathMap } = useSpecPathMap();
const { setUserSelect } = useUserSelect();
const { setSpecDisable } = useSpecDisable();
const { setDataToParent } = useDataToParent(setUserSelect);

onMounted(() => {
  setSpecPathMap(props.skus);
  setSpecDisable(props.specs, specPathMap, setUserSelect);
  setSpecDefaultSelect(props.skuId, props.skus, props.specs);
});
</script>
<template>
  <div class="goods-sku">
    <dl v-for="spec in specs" :key="spec.name">
      <dt>{{ spec.name }}</dt>
      <dd>
        <template v-for="value in spec.values" :key="value.name">
          <img
            v-if="value.picture"
            :class="{ selected: value.selected, disabled: value.disabled }"
            :src="value.picture"
            :title="value.name"
            :alt="value.name"
            @click="
              setSpecSelect(spec, value);
              setSpecDisable(props.specs, specPathMap, setUserSelect);
              setDataToParent(props.specs, props.skus, emit, specPathMap);
            "
          />

          <span
            v-else
            :class="{ selected: value.selected, disabled: value.disabled }"
            @click="
              setSpecSelect(spec, value);
              setSpecDisable(props.specs, specPathMap, setUserSelect);
              setDataToParent(props.specs, props.skus, emit, specPathMap);
            "
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
  border-color: var(--primary-color);
}
.goods-sku dl dd > span.disabled {
  opacity: 0.6;
  border-style: dashed;
  cursor: not-allowed;
}
</style>
