<script setup>
import MemberLayout from "../../MemberLayout/MemberLayout.vue";
import Tab from "../../../components/Tab/Tab.jsx";
import { ref } from "vue";
import { orderStatus } from "@/api/constantsAPI";
import { useOrderList } from "./OrderList";
import OrderItem from "../OrderItem/OrderItem.vue";
const active = ref(0);
const { orderList, reqParams } = useOrderList();

// 获取订单列表数据
</script>

<template>
  <MemberLayout>
    <div class="member-order">
      <Tab v-model:active="active">
        <TabTitle
          v-for="status in orderStatus"
          :key="status.name"
          :title="status.label"
        ></TabTitle>
      </Tab>
      <div class="order-list" v-if="orderList">
        <OrderItem
          :order="item"
          v-for="item in orderList.items"
          :key="item.id"
        />
      </div>
    </div>
  </MemberLayout>
</template>

<style scoped>
.member-order {
  height: 100%;
  background: #fff;
  position: relative;
}

.order-list {
  background: #fff;
  padding: 20px;
  position: relative;
}
</style>
