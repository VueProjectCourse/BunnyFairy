<script setup>
import { ref } from "vue";
import MemberLayout from "../MemberLayout/MemberLayout.vue";
import MemberHomeOverview from "./MemberHomeOverview/MemberHomeOverview.vue";
import MemberHomePanel from "./MemberHomePanel/MemberHomePanel.vue";
import GoodsRelevant from "../Detail/GoodsRelevant/GoodsRelevant.vue";
import GoodsItem from "../TopCategory/GoodsItem/GoodsItem.vue";
import { getCollection } from "../../api/memberAPI";

function useCollection() {
  // 用于存储收藏数据
  const collection = ref(null);
  // 获取并存储收藏数据
  getCollection({ pageSize: 4 }).then((data) => {
    // console.log(data.data.result);

    collection.value = data.data.result;
  });
  // 返回收藏数据
  return collection;
}

const collection = useCollection();
</script>

<template>
  <MemberLayout>
    <div class="member-home">
      <MemberHomeOverview />
      <MemberHomePanel title="我的收藏" v-if="collection">
        <GoodsItem
          v-for="goods in collection.items"
          :key="goods.id"
          :goods="goods"
        />
      </MemberHomePanel>
      <MemberHomePanel title="我的足迹"></MemberHomePanel>
      <GoodsRelevant />
    </div>
  </MemberLayout>
</template>
