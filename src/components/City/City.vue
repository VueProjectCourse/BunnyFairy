<script setup>
import { ref, reactive, computed } from "vue";
import { onClickOutside } from "@vueuse/core";
import axios from "axios";
defineProps({
  location: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["onCityChanged"]);
// 控制下拉菜单是否显示
const isVisible = ref(false);
// 用于获取下拉框元素
const target = ref(null);
// 用于存储城市数据
const cityData = ref(null);
// 用于存储用户选择的城市数据
const selectedCityData = reactive({
  provinceCode: "",
  cityCode: "",
  countyCode: "",
  provinceName: "",
  cityName: "",
  countyName: "",
  location: "",
});

// 用于供用户选择城市数据的方法
const selectCityData = (data) => {
  // 存储省级数据
  if (data.level === 0) {
    selectedCityData.provinceCode = data.code;
    selectedCityData.provinceName = data.name;
    // 存储市级数据
  } else if (data.level === 1) {
    selectedCityData.cityCode = data.code;
    selectedCityData.cityName = data.name;
  } else {
    // 存储县区级数据
    selectedCityData.countyCode = data.code;
    selectedCityData.countyName = data.name;
    selectedCityData.location = `${selectedCityData.provinceName} ${selectedCityData.cityName} ${selectedCityData.countyName}`;
  }
};

// 用于在组件中显示的城市数据
const list = computed(() => {
  // 默认返回省级数据
  let list = cityData.value;
  // 如果用户选择了省级数据
  if (selectedCityData.provinceCode) {
    // 将数据更新为市级数据
    list = list.find(
      (province) => province.code === selectedCityData.provinceCode
    ).areaList;
  }
  // 如果用户选择了市级数据
  if (selectedCityData.cityCode) {
    // 将数据替换为县区级数据
    list = list.find(
      (city) => city.code === selectedCityData.cityCode
    ).areaList;
  }
  // 如果用户选择了县区级数据
  if (selectedCityData.countyCode) {
    // 将用户选择的数据传递到组件外部
    emit("onCityChanged", { ...selectedCityData });
    // 重置组件需要城市数据
    list = cityData.value;
    // 隐藏弹框
    hide();
  }
  return list;
});
// 显示下拉菜单
const show = () => {
  console.log("显示");
  getCityData().then((data) => {
    // 存储城市数据
    cityData.value = data;
  });
  isVisible.value = true;
};

// 在 window 对象中缓存城市数据
window.cityData = null;

// 获取城市数据
async function getCityData() {
  // 如果window对象中已经缓存了城市数据, 从 window 对象中获取城市数据
  if (window.cityData) return window.cityData;
  // window 对象中没有城市数据, 向服务器端发送请求获取城市数据
  let response = await axios.get(
    "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json"
  );
  // 将城市数据缓存到 window 对象中, 并作为当前方法的返回值
  return (window.cityData = response.data);
}

// 隐藏下拉菜单
const hide = () => {
  console.log("隐藏");
  isVisible.value = false;
  // 重置用户选择的城市数据
  for (const attr in selectedCityData) {
    selectedCityData[attr] = "";
  }
};

// 切换下拉菜单的显示和隐藏
const toggle = () => {
  console.log(isVisible.value);
  isVisible.value ? hide() : show();
};

// 在下拉框元素外面点击时
onClickOutside(target, () => {
  hide();
});
</script>

<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="toggle" :class="{ active: isVisible }">
      <span class="placeholder" v-if="!location">请选择配送地址</span>
      <span class="value" v-else>{{ location }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="isVisible">
      <template v-if="cityData">
        <span
          v-for="item in list"
          :key="item.code"
          @click="selectCityData(item)"
          >{{ item.name }}</span
        >
      </template>
      <template v-else>
        <div class="loading"></div>
      </template>
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
