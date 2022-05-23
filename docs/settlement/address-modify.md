# 结算-收货地址-修改

::: tip Object
这一小节，我们的目标是实现收货地址修改功能

示例如下:
![70](./images/70.png)
:::

::: warning Path

1. 当用户点击修改收货地址按钮时将当前收货地址信息传递到收货地址编辑组件中并渲染收货地址编辑组件
2. 创建用于修改收货地的API接口函数
3. 在收货地址编辑组件中调用接口实现修改收货地址
4. 在组件模板中区分当前是添加操作还是修改操作
:::

::: info Experience

* **Step.1：当用户点击修改收货地址按钮时将当前收货地址信息传递到收货地址编辑组件中并渲染收货地址编辑组件**

```html
<!-- AddressCheckout.vue -->
<a @click="modifyAddress()">修改地址</a>
```

```js
// 修改收货地址
const modifyAddress = () => {
  // 获取当前要修改的收货地址信息
  const { fullLocation, isDefault, ...rest } = finalAddress.value;
  // 将要修改的收货地址信息显示在弹层中
  addressEditInstance.value.location = fullLocation;
  addressEditInstance.value.address = { ...rest };
  addressEditInstance.value.address.isDefault = isDefault === 0;
  // 显示弹层
  addressEditInstance.value.visible = true;
};
```

* **Step.2：创建用于修改收货地的API接口函数**

```js
/**
 * 修改收货地址
 * @param id 收货地址id
 * @param address 新的收货地址
 * @return {AxiosPromise}
 */
export const updateAddressById(id, address) {
  return request.put(`/member/address/${id}`,  address);
}
```

* **Step.3：在收货地址编辑组件中调用接口实现修改收货地址**

```js
// AddressEdit.vue
 // 用于执行用户点击确定按钮之后的逻辑代码
const onSureClickHandler = async () => {
  // 将会被作为添加收货地址的请求参数
  const target = {
    ...address.value,
    isDefault: address.value.isDefault ? 0 : 1,
  };
  if (target.id) {
    // 修改收货地址
    try {
      await updateAddressById(target.id, target);
      // 关闭对话框
      xtxDialogInstance.value.destroy();
      // 通知父组件, 渲染当前修改的收货地址
      emit("onAddressChanged", target.id);
    } catch (error) {
      // 收货地址添加失败
      Message({
        type: "error",
        text: `收货地址修改失败 ${error.response.data.message}`,
      });
    }
  } else {
    // 添加收货地址
  };
```

* **Step.4：在组件模板中区分当前是添加操作还是修改操作**

```html
<!-- AddressEdit.vue -->
<Dialog :title="`${address?.id ? '修改' : '添加'}收货地址`"></Dialog>
<Button>{{ address?.id ? "修改" : "添加" }}</Button>
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
