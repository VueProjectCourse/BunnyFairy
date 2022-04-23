import { computed, reactive, ref } from "vue";
import axios from "axios";
// 控制区域选择下拉菜单是否显示
export const useVisible = (type, selectedArea) => {
  const visible = ref(false);

  const setVisible = (type) => {
    if (type === "show") {
      visible.value = true;
    } else if (type === "hide") {
      visible.value = false;
      if (selectedArea) {
        for (const key in selectedArea) {
          if (Object.hasOwnProperty.call(selectedArea, key)) {
            selectedArea[key] = "";
          }
        }
      }
    } else if (type === "toggle") {
      visible.value = visible.value ? false : true;
    }
  };

  return { visible, setVisible };
};

// 地理区域数据
export const useArea = () => {
  const areaData = ref(null);

  const setAreaData = () => {
    if (window.areaData) return (areaData.value = window.areaData);

    axios
      .get(
        "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json"
      )
      .then((res) => {
        if (res.status === 200) {
          window.areaData = areaData.value = res.data;
        }
      });
  };

  return { areaData, setAreaData };
};

// 用户选择区域数据
export const useSelectArea = () => {
  const selectedArea = reactive({
    provinceCode: "",
    provinceName: "",
    cityCode: "",
    cityName: "",
    countyCode: "",
    countyName: "",
    location: "",
  });

  const setSelectedArea = (data) => {
    // 存储省级数据
    if (data.level === 0) {
      selectedArea.provinceCode = data.code;
      selectedArea.provinceName = data.name;
      // 存储市级数据
    } else if (data.level === 1) {
      selectedArea.cityCode = data.code;
      selectedArea.cityName = data.name;
    } else {
      // 存储县区级数据
      selectedArea.countyCode = data.code;
      selectedArea.countyName = data.name;
      selectedArea.location = `${selectedArea.provinceName} ${selectedArea.cityName} ${selectedArea.countyName}`;
    }
  };

  return { selectedArea, setSelectedArea };
};

// 供用户选择的区域数据
export const useOptionsArea = (areaData, selectedArea, emit, setVisible) => {
  const optionsList = computed(() => {
    let tempList = null;
    if (areaData) {
      tempList = areaData.value;

      // 如果用户选择了省级数据
      if (selectedArea.provinceCode) {
        // 将数据更新为市级数据
        tempList = tempList.find(
          (province) => province.code === selectedArea.provinceCode
        ).areaList;
      }

      // 如果用户选择了市级数据
      if (selectedArea.cityCode) {
        // 将数据替换为县区级数据
        tempList = tempList.find(
          (city) => city.code === selectedArea.cityCode
        ).areaList;
      }

      if (selectedArea.countyCode) {
        // 将用户选择的数据传递到组件外部
        emit("onCityChanged", { ...selectedArea });
        // 重置组件需要城市数据
        tempList = areaData.value;
        // 隐藏弹框
        setVisible("hide", selectedArea);
      }
    }
    return tempList;
  });

  return { optionsList };
};
