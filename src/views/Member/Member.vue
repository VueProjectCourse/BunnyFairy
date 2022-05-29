<script setup>
import { ref } from "vue";
import MemberLayout from "../MemberLayout/MemberLayout.vue";
import MemberOverview from "./MemberOverview/MemberOverview.vue";
import MemberPanel from "./MemberPanel/MemberPanel.vue";
import GoodsRelevant from "../Detail/GoodsRelevant/GoodsRelevant.vue";

import { getCollection } from "../../api/memberAPI";
import GoodsItem from "../TopCategory/GoodsItem/GoodsItem.vue";
const collection = ref(null);
getCollection({ pageSize: 4 }).then((data) => {
  console.log(data);
  collection.value = data.data.result.items;
});
</script>
<template>
  <MemberLayout>
    <div class="member-home">
      <MemberOverview />
      <MemberPanel title="我的收藏" v-if="collection">
        <GoodsItem v-for="item in collection" :key="item.id" :goods="item" />
      </MemberPanel>
      <MemberPanel title="我的足迹" v-if="collection">
        <GoodsItem v-for="item in collection" :key="item.id" :goods="item" />
      </MemberPanel>
      <GoodsRelevant />
    </div>
  </MemberLayout>
</template>
