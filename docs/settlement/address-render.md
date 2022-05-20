# 结算-收货地址-渲染

::: tip Object
这一小节，我们的目标是实现收货地址渲染
:::

::: warning Path

1. 创建用于获取收货地址列表的API接口函数
2. 在收货地址组件中发送请求获取收货地址列表
3. 根据收货地址优先级渲染收货地址
4. 当用户新添加完收货地址以后, 通知父组件渲染当前用户新添加的收货地址
5. 父组件接收新添加的收货地址ID, 更新在页面中渲染的收货地址
:::

::: info Experience

* **Step.1：创建用于获取收货地址列表的API接口函数**

```js
/**
 * 获取收货地址列表
 * @return {AxiosPromise}
 */
export const getAddressList = () => {
  return request("/member/address");
};

```

* **Step.2：在收货地址组件中发送请求获取收货地址列表**

```js
import { getAddressList } from "../../../api/OrderAPI";
import { computed, ref } from "vue";
// 获取收货地址列表
export const useAddresses = () => {
  // 用于存储收货地址列表
  const addressList = ref(null);
  // 用于存储用户新增的收货地址或者切换的收货地址
  const userSelectedAddress = ref(null);
  const setAddress = () => {
    getAddressList().then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        addressList.value = res.result;
      }
    });
  };
  return { userSelectedAddress, setAddress };
};

```

* **Step.3：根据收货地址优先级渲染收货地址**

```js
import { getAddressList } from "../../../api/OrderAPI";
import { computed, ref } from "vue";
// 获取收货地址列表
export const useAddresses = () => {
  // 用于存储收货地址列表
  const addressList = ref(null);
  // 用于存储用户新增的收货地址或者切换的收货地址
  const userSelectedAddress = ref(null);
  const setAddress = () => {
    getAddressList().then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList
        addressList.value = res.result;
      }
    });
  };

  const finalAddress = computed(() => {
    let result = null;
    // 如果用户添加了新的收货地址或者切换了收货地址
    if (userSelectedAddress.value) {
      result = userSelectedAddress.value;
    } else {
      // 查看收货地址列表中是否存在收货地址
      if (addressList.value && addressList.value.length > 0) {
        // 渲染默认收货地址
        result = addressList.value.find((item) => item.isDefault === 0);
        // 如果默认收货地址不存在
        if (!result) {
          // 渲染收货地址列表中的第一条收货地址
          result = addressList.value[0];
        }
      }
    }
    return result;
  });

  return { userSelectedAddress, finalAddress, setAddress };
};
```

* **Step.4：当用户新添加完收货地址以后, 通知父组件渲染当前用户新添加的收货地址**

```js
const onSureClickHandler = async () => {
  try {
    // 发送请求, 实现添加收货地址
    let data = await addAddress(target);
    // 通知父组件, 渲染当前用户新添加的收货地址
    emit("onAddressChanged", data.result.id);
  } catch (error) { }
};
```

* **Step.5：父组件接收新添加的收货地址ID, 更新在页面中渲染的收货地址**

```html
<!-- CheckoutAddress.vue -->
<AddressEdit @onAddressChanged="updateUserSelectedAddress($event)" />
```

```js
export default {
  setup() {
    const { updateUserSelectedAddress } = getAddresses();
    return { updateUserSelectedAddress };
  },
};

// 获取收货地址列表
function getAddresses() {
  // 用于更新用户添加的收货地址或者切换的收货地址
  const updateUserSelectedAddress = (id) => {
     getData(() => {
      userSelectedAddress.value = addresses.value.find(
        (item) => item.id === id
      );
    });
  };
  return { updateUserSelectedAddress };
}
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
