<script setup>
import DefaultLayout from "../DefaultLayout/DefaultLayout.vue";
import GoodsImages from "./GoodsImages/GoodsImages.vue";
import GoodsSales from "./GoodsSales/GoodsSales.vue";
import GoodsInfo from "./GoodsInfo/GoodsInfo.vue";
import GoodsRelevant from "./GoodsRelevant/GoodsRelevant.vue";
import GoodsSku from "./GoodsSku/GoodsSku.vue";
import { onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { goodsDetail, setGoodsDetail } from "./useGoodsDetail";

const route = useRoute();
onMounted(() => {
  setGoodsDetail(route.params.id);
  console.log(goodsDetail);
});

onBeforeRouteUpdate((to) => {
  setGoodsDetail(to.params.id);
});
</script>
<template>
  <DefaultLayout>
    <div class="xtx-goods-page" style="background-color: #f5f5f5">
      <div class="container">
        <!-- 面包屑 -->
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <BreadItem :path="`/category/${goodsDetail?.categories[1].id}`">{{
            goodsDetail?.categories[1].name
          }}</BreadItem>
          <BreadItem :path="`/category/${goodsDetail?.categories[0].id}`">{{
            goodsDetail?.categories[0].name
          }}</BreadItem>
          <BreadItem>{{ goodsDetail?.name }}</BreadItem>
        </Bread>
        <!-- 商品信息 -->
        <div class="goods-info">
          <!-- 左侧 -->
          <div class="media">
            <GoodsImages
              :images="goodsDetail.mainPictures"
              v-if="goodsDetail"
            />

            <GoodsSales />
          </div>
          <!-- 右侧 -->
          <div class="spec">
            <GoodsInfo />
            <GoodsSku :specs="goodsDetail.specs" v-if="goodsDetail" />
          </div>
        </div>
        <!-- 商品推荐 -->
        <GoodsRelevant></GoodsRelevant>

        <!-- 商品详情 -->
        <div class="goods-footer">
          <div class="goods-article">
            <!-- 商品+评价 -->
            <div class="goods-tabs"></div>
            <!-- 注意事项 -->
            <div class="goods-warn"></div>
          </div>
          <!-- 24热榜 -->
          <div class="goods-aside"></div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
}
.goods-info .media {
  width: 580px;
  height: 600px;
  padding: 30px 50px;
}
.goods-info .spec {
  flex: 1;
  padding: 30px 30px 30px 0;
}
.goods-footer {
  display: flex;
  margin-top: 20px;
}
.goods-footer .goods-article {
  width: 940px;
  margin-right: 20px;
}
.goods-footer .goods-aside {
  width: 280px;
  min-height: 1000px;
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
