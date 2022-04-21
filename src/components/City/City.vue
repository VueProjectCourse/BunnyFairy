<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useVisible, useArea, useSelectArea, useOptionsArea } from "./City";
defineProps({
  location: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["onCityChanged"]);
const { areaData, setAreaData } = useArea();
const { selectedArea, setSelectedArea } = useSelectArea();
const { visible, setVisible } = useVisible(selectedArea);
const { optionsList } = useOptionsArea(
  areaData,
  selectedArea,
  emit,
  setVisible
);
setAreaData();
// 用于获取下拉框元素
const target = ref(null);
onClickOutside(target, () => {
  setVisible("hide", selectedArea);
});
</script>

<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="setVisible('toggle')">
      <span class="placeholder" v-if="!location">请选择配送地址</span>
      <span class="value" v-else>{{ location }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-show="visible">
      <span
        class="ellipsis"
        @click="setSelectedArea(item)"
        v-for="item in optionsList"
        :key="item.code"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
}
.xtx-city .select {
  border: 1px solid #e4e4e4;
  height: 30px;
  padding: 0 5px;
  line-height: 28px;
  cursor: pointer;
}
.xtx-city .select.active {
  background: #fff;
}
.xtx-city .select .placeholder {
  color: #999;
}
.xtx-city .select .value {
  color: #666;
  font-size: 12px;
}
.xtx-city .select i {
  font-size: 12px;
  margin-left: 5px;
}
.xtx-city .option {
  width: 542px;
  border: 1px solid #e4e4e4;
  position: absolute;
  left: 0;
  top: 29px;
  background: #fff;
  min-height: 30px;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.xtx-city .option > span {
  width: 130px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 0 3px;
}
.xtx-city .option > span:hover {
  background: #f5f5f5;
}

.xtx-city .option .loading {
  height: 290px;
  width: 100%;
  background: url(@/assets/images/loading.gif) no-repeat center;
}
</style>
