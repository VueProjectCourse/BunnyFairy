# 城市选择组件-交互逻辑

::: tip 目标
这一小节，我们的目标是 实现城市组件的交互逻辑: 渲染城市数据信息, 收集用户选择的城市信息

:::

::: warning 步骤

1. 声明 `selectedCityData` 用于存储用户选择的城市信息
2. 声明 `selectCityData` 方法, 用于供用户选择城市数据的方法
3. 声明计算属性, 当用户选择城市数据以后, 返回新的组件中要显示的城市数据, 用户选择完城市数据以后, 重置组件显示数据, 将用户选择的城市信息传递到父组件
4. 在组件中渲染城市数据并为数据添加点击事件, 实现城市数据的选择
5. 在调用 `City` 组件时传递 `location` 属性, 值为用户已经选择城市信息名称
6. 在城市信息组件中接收并渲染用户选择的城市信息名称集
:::

::: info 体验

* **Step.1：声明 `selectedCityData` 用于存储用户选择的城市信息**

```js
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
```

* **Step.2：声明 `selectCityData` 方法, 用于供用户选择城市数据的方法**

```js
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
```

* **Step.3：声明计算属性, 当用户选择城市数据以后, 返回新的组件中要显示的城市数据, 用户选择完城市数据以后, 重置组件显示数据, 将用户选择的城市信息传递到父组件**

```js
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

// 隐藏下拉菜单
const hide = () => {
  visible.value = false;
  // 重置用户选择的城市数据
  for (const attr in selectedCityData) {
      selectedCityData[attr] = "";
  }
};
```

* **Step.4：在组件中渲染城市数据并为数据添加点击事件, 实现城市数据的选择**

```html
<span v-for="item in list" :key="item.code" @click="selectCityData(item)">{{ item.name }}</span>
```

* **Step.5：在调用 `City` 组件时传递 `location` 属性, 值为用户已经选择城市信息名称**

```html
<City :location="location" @onCityChanged="onCityChanged" />
```

```js
// 用于存储用户选择的城市信息的名称集合
 const location = ref("");
 // 当用户选择完城市信息以后调用
 const onCityChanged = (data) => {
     // 拼接用户选择的城市信息
   location.value = data.location;
 };
```

* **Step.6：在城市信息组件中接收并渲染用户选择的城市信息名称集**

```html
<!-- City.vue -->
<span class="placeholder" v-if="!location">请选择配送地址</span>
<span class="value" v-else>{{ location }}</span>
```

```js
defineProps({
  location: {
    type: String,
    default: "",
  },
});
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
