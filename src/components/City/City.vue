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
const emits = defineEmits(["onCityChanged"]);

// 定义监听元素
const target = ref(null);

// 定义显示与隐藏的状态
const isVisible = ref(false);

// 定义 显示的方法
const setVisible = () => {
  readAreaData();
  isVisible.value = true;
};

// 定义隐藏的方法
const setUnVisible = () => {
  isVisible.value = false;

  for (const key in selectedArea) {
    // 判断某一个key是否存在于该对象中
    if (Object.hasOwnProperty.call(selectedArea, key)) {
      selectedArea[key] = "";
    }
  }
};

// 定义切换显示与隐藏的方法
const setToggleVisible = () => {
  // isVisible.value是否为true 代表是显示的  就让隐藏
  // isVisible.value = isVisible.value ? false : true;
  isVisible.value ? setUnVisible() : setVisible();
};
// 当在监听元素的外面点击
onClickOutside(target, () => {
  // 在监听元素外面点击的时候 让选择城市组件隐藏
  setUnVisible();
});

// 声明 区域信息状态
const cityData = ref(null);

const readAreaData = async () => {
  if (window.cityData) return window.cityData;

  const res = await axios.get(
    "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json"
  );

  if (res.status === 200) {
    cityData.value = res.data;
    window.cityData = res.data;
  }
};

// 声明已经选择到的区域信息
const selectedArea = reactive({
  // 省信息
  provinceCode: "",
  proviceName: "",
  // 市信息
  cityCode: "",
  cityName: "",
  // 区信息
  countryCode: "",
  countryName: "",
  // 选择到的 省市区信息字符串
  location: "",
});
// 声明改变已经选择到的区域信息的方法
const setSelectedArea = (data) => {
  // console.log(data);
  // 判断一下如果level是0 代表是省一级
  if (data.level === 0) {
    selectedArea.provinceCode = data.code;
    selectedArea.proviceName = data.name;
  }

  // 判断 市一级的
  if (data.level === 1) {
    selectedArea.cityCode = data.code;
    selectedArea.cityName = data.name;
  }

  // 判断 区县一级的
  if (data.level === 2) {
    selectedArea.countryCode = data.code;
    selectedArea.countryName = data.name;
    selectedArea.location = `${selectedArea.proviceName} ${selectedArea.cityName} ${selectedArea.countryName}`;
  }
};

// 声明计算属性
const list = computed(() => {
  // 如果没有点击 也要返回所有数据
  let list = cityData.value;
  // 如果selectedArea里面有provinceCode的话，代表我们已经选择到了市一级
  if (selectedArea.provinceCode) {
    list = list.find(
      (province) => province.code === selectedArea.provinceCode
    ).areaList;
  }

  // 如果selectedArea里面有cityCode的话，代表我们已经选择到了县区一级
  if (selectedArea.cityCode) {
    list = list.find((city) => city.code === selectedArea.cityCode).areaList;
  }

  if (selectedArea.countryCode) {
    // 把数据传递给父组件之后
    emits("onCityChanged", { ...selectedArea });
    // 重置数据
    list = cityData.value;
    // 选择完毕之后 隐藏弹框
    setUnVisible();
  }

  return list;
});
</script>
<template>
  <div class="xtx-city" ref="target">
    <div
      class="select"
      @click="setToggleVisible"
      :class="{ active: isVisible }"
    >
      <span class="placeholder" v-show="!location">请选择配送地址</span>
      <span class="value" v-show="location">{{ location }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="isVisible">
      <template v-if="cityData">
        <span
          class="ellipsis"
          v-for="item in list"
          @click="setSelectedArea(item)"
          :key="item.code"
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
  /* loading.gif 图片 未来我会把前端代码部署服务器 */
  /* loading.gif 也需要远程加载 也会很慢 图片是二次请求 */
  /* html结构是很快的 如何让图片随着html的第一次请求一起来呢 */
  /* 解决方案: 把图片字符串化  图片的base64编码 */

  /* 如果是webpack或者使用webpack来实现的vue cli 可以进行配置  */
  /* webpack里面有webpack.config.js vuecli中有vue.config.js */

  /* 
chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 20000 }))
} */

  /* 我们使用的vite  */

  background: url(@/assets/images/loading.gif) no-repeat center;
}
</style>
