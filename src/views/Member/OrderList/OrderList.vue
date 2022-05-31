<script setup>
import MemberLayout from "../../MemberLayout/MemberLayout.vue";
import Tabs from "../../../components/Tabs/Tabs.jsx";
import TabsTitle from "../../../components/Tabs/TabsTitle.vue";
// import TabsContent from "../../../components/Tabs/TabsContent.vue";
import { orderStatus } from "../../../api/constantsAPI";
import { ref } from "vue";
import { useOrderList } from "./OrderList";
import OrderItem from "../OrderItem/OrderItem.vue";
const { reqParams, orderList } = useOrderList();
// const tabsData = ref([
//   { title: "选项卡标题一", content: "选项卡内容一" },
//   { title: "选项卡标题二", content: "选项卡内容二" },
// ]);

const active = ref(0);
</script>

<template>
  <MemberLayout>
    <div class="member-order">
      <Tabs v-model:active="active">
        <TabsTitle
          v-for="item in orderStatus"
          :key="item.name"
          :title="item.label"
        ></TabsTitle>

        <!-- <TabsContent
          v-for="item in tabsData"
          :key="item.content"
          :content="item.content"
        ></TabsContent> -->
      </Tabs>

      <div class="order-list" v-if="orderList">
        <OrderItem
          v-for="item in orderList.items"
          :key="item.id"
          :order="item"
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
