# 结算-收货地址-切换

::: tip Object
这一小节，我们的目标是实现切换收货地址功能

示例如下:
![68](./images/68.png)
:::

::: warning Path

1. 创建切换收货地址组件, 实现基础布局
2. 在收货地址组件中调用切换收货地址组件、点击切换收货地址按钮渲染切换收货地址组件
3. 实现切换收货地址功能, 将用户选择的收货地址的ID通过自定义事件传递到父组件
4. 在切换收货地址列表中为当前选中的收货地址添加高亮效果
:::

::: info Experience

* **Step.1：创建切换收货地址组件, 实现基础布局**

```html
<!-- AddressSwitch.vue -->
<script setup>
 const props = defineProps({
    list: {
      type: Array,
      default: () => [],
    },
 })
 const visible = ref(false);

</script>
<template>
  <XtxDialog title="更换收货地址" v-model:visible="visible">
    <template v-slot:default>
      <div class="address-switch">
        <div class="text item" v-for="item in list" :key="item.id">
          <ul>
            <li>
              <span>收<i />货<i />人：</span>{{ item.receiver }}
            </li>
            <li><span>联系方式：</span>{{ item.contact }}</li>
            <li>
              <span>收货地址：</span>{{ item.fullLocation + item.address }}
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <XtxButton
        @click="visible = false"
        type="primary"
        style="margin-right: 20px"
        >取消</XtxButton
      >
    </template>
  </XtxDialog>
</template>
```

```css
.address-switch {
  height: 478px;
  overflow-y: auto;
}
.xtx-dialog .text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;
}
.xtx-dialog .text.item {
  border: 1px solid #f5f5f5;
  margin-bottom: 10px;
  cursor: pointer;
}
.xtx-dialog .text.item.active,
.xtx-dialog .text.item:hover {
  border-color: #27BA9B;
  background: #e6faf6;
}
.xtx-dialog .text.item > ul {
  padding: 10px;
  font-size: 14px;
  line-height: 30px;
}

```

* **Step.2：在收货地址组件中调用切换收货地址组件、点击切换收货地址按钮渲染切换收货地址组件**

```html
<!-- AddressCheckout.vue -->
<script setup>
    // 用于存储切换收货地址组件实例对象
    const addressSwitchInstance = ref();
    // 获取收货地址列表
    const { addresses } = getAddresses();
    // 切换收货地址
    const switchAddress = () => {
      addressSwitchInstance.value.visible = true;
    };
</script>
```

```html
<!-- AddressCheckout.vue -->
<template>
 <XtxButton class="btn" @click="switchAddress">切换地址</XtxButton>
 <AddressSwitch ref="addressSwitchInstance" :list="addresses" />
</template>
```

* **Step.3：实现切换收货地址功能, 将用户选择的收货地址的ID通过自定义事件传递到父组件**

```html
<!-- AddressSwitch.vue -->
<div @click="onAddressSwitchHandler(item.id)" v-for="item in list">...</div>
```

```js
const onAddressSwitchHandler = (id) => {
  // 通过自定义事件将用户选择的收货地址ID传递到父组件
  // 父组件会根据收货地址ID查找收货地址并优先渲染用户选择的收货地址
  emit("onAddressChanged", id);
  // 关闭对话框
  visible.value = false;
};
```

* **Step.4：在切换收货地址列表中为当前选中的收货地址添加高亮效果**

```js
<AddressSwitch :activeAddressId="finalAddress?.id" />
```

```js
const props = defineProps({
  activeAddressId: {
     type: String,
     default: "",
   },
})
```

```html
<div :class="{ active: item.id === activeAddressId }" v-for="item in list">...</div>
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
