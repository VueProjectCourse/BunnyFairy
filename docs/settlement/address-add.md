# 结算-收货地址-添加

::: tip Object
这一小节，我们的目标是 实现添加收货地址功能
:::

::: warning Path

1. 创建添加收货地址组件, 编写布局代码
2. 在添加收货地址组件中，编写样式代码
3. 点击添加收货地址按钮渲染添加收获地址组件
4. 处理城市选择组件, 存储用户选择的城市编码
5. 收集用户在表单中输入的其他内容
6. 创建用于实现加收货地址的API接口函数
7. 点击添加按钮向服务器端发送请求实现添加收货地址功能
8. 执行清理操作, 清空用户在表单中输入的内容
:::

::: info Experience

* **Step.1：创建添加收货地址组件, 编写布局代码**

```html
<template>
  <Dialog v-model:visible="visible" title="添加收货地址">
    <template v-slot:default>
      <div class="address-edit">
        <div class="xtx-form">
          <div class="xtx-form-item">
            <div class="label">收货人：</div>
            <div class="field">
              <input class="input" placeholder="请输入收货人" />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">手机号：</div>
            <div class="field">
              <input class="input" placeholder="请输入手机号" />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">地区：</div>
            <div class="field">
              <City placeholder="请选择所在地区" />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">详细地址：</div>
            <div class="field">
              <input class="input" placeholder="请输入详细地址" />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">邮政编码：</div>
            <div class="field">
              <input class="input" placeholder="请输入邮政编码" />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">地址标签：</div>
            <div class="field">
              <input class="input" placeholder="请输入地址标签，逗号分隔" />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">是否设置为默认地址：</div>
            <div class="field">
              <input type="checkbox" class="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <XtxButton @click="visible=false" type="gray" style="margin-right: 20px">
        取消
      </XtxButton>
      <XtxButton @click="onSureClickHandler" type="primary">确认</XtxButton>
    </template>
  </Dialog>
</template>
```

* **Step.2：在添加收货地址组件中，编写样式代码**

```css
<style scoped lang="less">
.xtx-dialog :deep(.wrapper) {
  width: 780px;
}
.xtx-dialog :deep(.wrapper) .body {
  font-size: 14px;
}
.xtx-dialog .xtx-city {
  width: 320px;
}
.xtx-dialog .xtx-city :deep(.select) {
  height: 50px;
  line-height: 48px;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
}
.xtx-dialog .xtx-city :deep(.select) .placeholder {
  color: #ccc;
}
.xtx-dialog .xtx-city :deep(.select) i {
  color: #ccc;
  font-size: 18px;
}
.xtx-dialog .xtx-city :deep(.select) .value {
  font-size: 14px;
}
.xtx-dialog .xtx-city :deep(.option) {
  top: 49px;
}
.xtx-form {
  padding: 0;
}
.xtx-form .xtx-form-item {
  width: auto;
}
.xtx-form .xtx-form-item:last-child {
  padding-bottom: 0;
}
.xtx-form input {
  outline: none;
}
.xtx-form input::placeholder {
  color: #ccc;
}
</style>

```

* **Step.3：点击添加收货地址按钮渲染添加收获地址组件**

```js
// CheckoutAdress.vue
// 用于存储编辑收货地址组件实例对象
const addressEditInstance = ref(null);
// 添加收货地址
const addAddress = () => {
  // 打开对话框
  addressEditInstance.value.visible = true;
};
```

* **Step.4：处理城市选择组件, 存储用户选择的城市编码**

```html
<!-- AddressEdit -->
<City @onCityChanged="onCityChanged" :location="location" placeholder="请选择所在地区"/>
```

```js
// AddressEdit
 // 用于存储用户选择的城市文字信息
const location = ref();
// 用于存储用户最终填写的收货地址
const address = ref({
  provinceCode: "",
  cityCode: "",
  countyCode: "",
});
// 城市信息发生改变时

const onCityChanged = (city) => {
// 存储城市文字信息
location.value = city.location;
// 存储城市代码
address.value.provinceCode = city.provinceCode;
address.value.cityCode = city.cityCode;
address.value.countyCode = city.countryCode;
console.log(city);
console.log(address.value);
};
```

* **Step.5：收集用户在表单中输入的其他内容**

```js
// AddressEdit
// 用于存储用户最终填写的收货地址
const address = ref({
  receiver: "",
  contact: "",
  address: "",
  postalCode: "",
  addressTags: "",
  isDefault: false,
});

```

* **Step.6：创建用于实现加收货地址的API接口函数**

```js
/**
 * 添加收货地址
 * @param address 收货地址信息对象
 * @return {Promise}
 */
export const addAddress = (address) => {
  return request.post("/member/address", address);
};
```

* **Step.7：点击添加按钮向服务器端发送请求实现添加收货地址功能**

```js
 // 用于执行用户点击确定按钮之后的逻辑代码
    const onSureClickHandler = async () => {
      // 将会被作为添加收货地址的请求参数
      const target = {
        ...address.value,
        isDefault: address.value.isDefault ? 0 : 1,
      };
      try {
        // 发送请求, 实现添加收货地址
        await addAddress(target);
        // 关闭对话框
        visible.value = false
        // 用户提示
        Message({ type: "success", text: "收货地址添加成功" });
      } catch (error) {
        // 收货地址添加失败
        Message({
          type: "error",
          text: `收货地址添加失败 ${error.response.data.message}`,
        });
      }
    };
```

* **Step.8：执行清理操作, 清空用户在表单中输入的内容**

```js
// 添加收货地址
const addAddress = () => {
  // 收货地址参数的初始状态
  addressEditInstance.value.address = {
    receiver: "",
    contact: "",
    provinceCode: "",
    cityCode: "",
    countryCode: "",
    address: "",
    postalCode: "",
    addressTags: "",
    isDefault: false,
  };
  // 清空城市信息
  addressEditInstance.value.location = "";
};
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
