<script setup>
import MemberLayout from "../../MemberLayout/MemberLayout.vue";
import Tab from "../../../components/Tab/Tab.jsx";
import { ref } from "vue";
import TabContent from "../../../components/Tab/TabContent.vue";
const tabsData = ref([
  { title: "选项卡标题一", content: "选项卡内容一" },
  { title: "选项卡标题二", content: "选项卡内容二" },
]);

const active = ref(0);
</script>

<template>
  <MemberLayout>
    <div class="member-order">
      订单列表

      <Tab v-model:active="active">
        <TabTitle
          v-for="(item, index) in tabsData"
          :key="index"
          :title="item.title"
        ></TabTitle>

        <TabContent
          v-for="(item, index) in tabsData"
          :key="index"
          :content="item.content"
        ></TabContent>
      </Tab>
    </div>
  </MemberLayout>
</template>

<style scoped>
.member-order {
  height: 100%;
  background: #fff;
  position: relative;
}
</style>
