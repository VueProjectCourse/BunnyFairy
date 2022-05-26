<script setup>
import { ref } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  activeAddressId: {
    type: String,
    default: "",
  },
});
const visible = ref(false);

defineExpose({
  visible,
});
const emit = defineEmits(["onAddressChanged"]);

const onAddressSwitchHandler = (id) => {
  emit("onAddressChanged", id);
  // 关闭对话框
  visible.value = false;
};
</script>
<template>
  <Dialog title="更换收货地址" v-model:visible="visible">
    <template v-slot:default>
      <div class="address-switch">
        <div
          class="text item"
          v-for="item in list"
          :key="item.id"
          @click="onAddressSwitchHandler(item.id)"
          :class="{ active: item.id === activeAddressId }"
        >
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
      <Button @click="visible = false" type="primary" style="margin-right: 20px"
        >取消</Button
      >
    </template>
  </Dialog>
</template>

<style scoped>
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
  border-color: #27ba9b;
  background: #e6faf6;
}
.xtx-dialog .text.item > ul {
  padding: 10px;
  font-size: 14px;
  line-height: 30px;
}
</style>
