<script setup>
import { ref } from "vue";
import { addAddress } from "../../../api/OrderAPI";
import Message from "../../../components/Message/Message";
const visible = ref(false);
defineExpose({
  visible,
});
// 用于存储用户选择的城市文字信息
const location = ref();
// 用于存储用户最终填写的收货地址
const address = ref({
  provinceCode: "",
  cityCode: "",
  countyCode: "",
  receiver: "",
  contact: "",
  address: "",
  postalCode: "",
  addressTags: "",
  isDefault: false,
});
const onCityChanged = (area) => {
  address.value.provinceCode = area.provinceCode;
  address.value.cityCode = area.cityCode;
  address.value.countyCode = area.countryCode;
  location.value = area.location;
};
// 点击确定按钮
const HandlerOnSure = async () => {
  const target = {
    ...address.value,
    isDefault: address.value.isDefault ? 0 : 1,
  };

  try {
    await addAddress(target);

    // 关闭对话框
    visible.value = false;
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
</script>
<template>
  <Dialog v-model:visible="visible" title="添加收货地址">
    <template v-slot:default>
      <div class="address-edit">
        <div class="xtx-form">
          <div class="xtx-form-item">
            <div class="label">收货人：</div>
            <div class="field">
              <input
                class="input"
                placeholder="请输入收货人"
                v-model="address.receiver"
              />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">手机号：</div>
            <div class="field">
              <input
                class="input"
                placeholder="请输入手机号"
                v-model="address.contact"
              />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">地区：</div>
            <div class="field">
              <City
                @onCityChanged="onCityChanged"
                :location="location"
                placeholder="请选择所在地区"
              />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">详细地址：</div>
            <div class="field">
              <input
                class="input"
                placeholder="请输入详细地址"
                v-model="address.address"
              />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">邮政编码：</div>
            <div class="field">
              <input
                class="input"
                placeholder="请输入邮政编码"
                v-model="address.postalCode"
              />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">地址标签：</div>
            <div class="field">
              <input
                class="input"
                placeholder="请输入地址标签，逗号分隔"
                v-model="address.addressTags"
              />
            </div>
          </div>
          <div class="xtx-form-item">
            <div class="label">是否设置为默认地址：</div>
            <div class="field">
              <input
                type="checkbox"
                class="checkbox"
                v-model="address.isDefault"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <Button @click="visible = false" type="gray" style="margin-right: 20px">
        取消
      </Button>
      <Button @click="HandlerOnSure" type="primary">确认</Button>
    </template>
  </Dialog>
</template>

<style scoped>
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
