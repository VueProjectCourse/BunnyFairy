<script setup>
import { onMounted, ref } from "vue";
import { useAddresses } from "./AddressCheckout";
import AddressEdit from "../AddressEdit/AddressEdit.vue";
const { setAddressList, finalAddress } = useAddresses();
// 添加地址
// 用于存储编辑收货地址组件实例对象
const addressEditInstance = ref(null);
const handlerAddressInsert = () => {
  // 让Dialog对话框显示出来
  addressEditInstance.value.visible = true;

  // 再次点击添加收货地址的对话框，目前为止 没有出现遗留数据，因此代码可以不写
  // 收货地址参数的初始状态
  // addressEditInstance.value.address = {
  //   receiver: "",
  //   contact: "",
  //   provinceCode: "",
  //   cityCode: "",
  //   countryCode: "",
  //   address: "",
  //   postalCode: "",
  //   addressTags: "",
  //   isDefault: false,
  // };
  // // 清空城市信息
  // addressEditInstance.value.location = "";
};
onMounted(() => {
  setAddressList();
});

const updateUserSelectedAddress = (res) => {
  console.log(res);
};
</script>
<template>
  <div class="address">
    <div class="text">
      <div v-if="!finalAddress" class="none">
        您需要先添加收货地址才可提交订单。
      </div>
      <ul v-if="finalAddress">
        <li>
          <span>收<i />货<i />人：</span>{{ finalAddress.receiver }}
        </li>
        <li>
          <span>联系方式：</span
          >{{
            finalAddress.contact.replace(/(\d{3})\d{4}(\d{4})/g, `$1****$3`)
          }}
        </li>
        <li><span>收货地址：</span>{{ finalAddress.address }}</li>
      </ul>
      <a href="javascript:">修改地址</a>
    </div>
    <div class="action">
      <Button class="btn">切换地址</Button>
      <Button class="btn" @click="handlerAddressInsert">添加地址</Button>

      <AddressEdit
        ref="addressEditInstance"
        @onAddressChanged="updateUserSelectedAddress($event)"
      />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
}
.address .text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;
}
.address .text .none {
  line-height: 90px;
  color: #999;
  text-align: center;
  width: 100%;
}
.address .text > ul {
  flex: 1;
  padding: 20px;
}
.address .text > ul li {
  line-height: 30px;
}
.address .text > ul li span {
  color: #999;
  margin-right: 5px;
}
.address .text > ul li span > i {
  width: 0.5em;
  display: inline-block;
}
.address .text > a {
  color: var(--primary-color);
  width: 160px;
  text-align: center;
  height: 90px;
  line-height: 90px;
  border-right: 1px solid #f5f5f5;
}
.address .action {
  width: 420px;
  text-align: center;
}
.address .action .btn {
  width: 140px;
  height: 46px;
  line-height: 44px;
  font-size: 14px;
}
.address .action .btn:first-child {
  margin-right: 10px;
}
</style>
