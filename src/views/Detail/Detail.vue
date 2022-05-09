<script setup>
import DefaultLayout from "../DefaultLayout/Layout.vue";
import GoodsRelevant from "./GoodsRelevant/GoodsRelevant.vue";
import GoodsImages from "./GoodsImages/GoodsImages.vue";
import GoodsSales from "./GoodsSales/GoodsSales.vue";
import GoodsInfo from "./GoodsInfo/GoodsInfo.vue";
import GoodsSku from "./GoodsSku/GoodsSku.vue";
import GoodsTab from "./GoodsTab/GoodsTab.vue";
import GoodsWarn from "./GoodsWarn/GoodsWarn.vue";
import GoodsHot from "./GoodsHot/GoodsHot.vue";
import { onMounted, ref, provide } from "vue";
import { goodsDetail, setGoodsDetail } from "./useDetail";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { useCartStore } from "../../stores/cartStore";
import Message from "../../components/Message/Message";
const cartStore = useCartStore();

const route = useRoute();
onMounted(() => {
  setGoodsDetail(route.params.id);
});

provide("goodsDetail", goodsDetail);

onBeforeRouteUpdate((to) => {
  setGoodsDetail(to.params.id);
});

let result = goodsDetail;
const onSpecChanged = (data) => {
  // 数据回传，
  // console.log(data);
  result.value.price = data.price;
  result.value.oldPrice = data.oldPrice;
  result.value.inventory = data.inventory;
  result.value.currentSelectedSkuId = data.skuId;
  result.value.currentSelectedSkuText = data.specsText;
};
const addCart = () => {
  const goods = {
    // 商品id
    id: result.value.id,
    // 商品 skuId
    skuId: result.value.currentSelectedSkuId,
    // 商品名称
    name: result.value.name,
    // 商品规格属性文字
    attrsText: result.value.currentSelectedSkuText,
    // 商品图片
    picture: result.value.mainPictures[0],
    // 商品原价
    price: result.value.oldPrice,
    // 商品现价
    nowPrice: result.value.price,
    // 是否选中
    selected: true,
    // 商品库存
    stock: result.value.inventory,
    // 用户选择的商品数量
    count: count.value,
    // 如果用户选择了规格, 该商品就一定是有效商品, 因为能够选择的规格都是有库存的
    isEffective: true,
  };
  // console.log(goods);
  if (!goods.skuId)
    return Message({ type: "error", text: "您还没有选中商品规格" });
  cartStore.addGoodsToCart(goods);
};

const count = ref(1);
</script>
<template>
  <DefaultLayout>
    <div class="xtx-goods-page">
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
            <!-- 商品图片 -->
            <GoodsImages
              :images="goodsDetail.mainPictures"
              v-if="goodsDetail"
            />
            <!-- 商品销售组件 -->
            <GoodsSales />
          </div>
          <!-- 右侧 -->
          <div class="spec">
            <GoodsInfo :goods="goodsDetail" v-if="goodsDetail" />
            <!--     skuId="1369155864430120962" -->
            <GoodsSku
              v-if="goodsDetail"
              :specs="goodsDetail.specs"
              :skus="goodsDetail.skus"
              @on-spec-changed="onSpecChanged"
            />
            <!-- :modelValue="" @update:modelValue -->
            <NumberBox
              label="数量"
              :max="goodsDetail?.inventory"
              v-model="count"
            />

            <Button
              size="middle"
              type="primary"
              :style="{ 'margin-top': '20px' }"
              @click="addCart"
              >加入购物车</Button
            >
          </div>
        </div>
        <!-- 商品推荐 -->
        <GoodsRelevant :goodsId="goodsDetail?.id"></GoodsRelevant>

        <!-- 商品详情 -->
        <div class="goods-footer">
          <div class="goods-article">
            <!-- 商品+评价 -->
            <GoodsTab />
            <!-- 注意事项 -->
            <!-- 注意事项 -->
            <GoodsWarn />
          </div>
          <!-- 24热榜 -->
          <div class="goods-aside">
            <GoodsHot :type="1" />
            <GoodsHot :type="2" />
            <GoodsHot :type="3" />
          </div>
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
