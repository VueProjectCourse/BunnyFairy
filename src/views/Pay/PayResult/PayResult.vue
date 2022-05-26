<script setup>
import Layout from "../../DefaultLayout/Layout.vue";
import { getOrderInfoById } from "../../../api/orderAPI";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const orderInfo = ref(null);
onMounted(() => {
  getOrderInfoById(route.query.orderId).then((data) => {
    // console.log(data)
    orderInfo.value = data.data.result;
  });
});
</script>
<template>
  <Layout>
    <div class="xtx-pay-page">
      <div class="container">
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <BreadItem path="/cart">购物车</BreadItem>
          <BreadItem>支付结果</BreadItem>
        </Bread>
        <!-- 支付结果 -->
        <div class="pay-result">
          <span class="iconfont icon-queren2 green"></span>
          <!-- <span class="iconfont icon-shanchu red" ></span> -->
          <p class="tit">订单支付成功</p>
          <p class="tip">我们将尽快为您发货，收货期间请保持手机畅通</p>
          <p>
            支付方式：<span>{{
              order?.payChannel === 1 ? "支付宝" : "微信"
            }}</span>
          </p>
          <p>
            支付金额：<span>¥{{ orderInf?.payMoney }}</span>
          </p>
          <div class="btn">
            <Button
              type="primary"
              style="margin-right: 20px"
              @click="$router.push(`/member/order/${order?.id}`)"
              >查看订单</Button
            >
            <Button type="gray" @click="$router.push(`/`)">进入首页</Button>
          </div>
          <p class="alert">
            <span class="iconfont icon-tip"></span>
            温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
}
.pay-result > .iconfont {
  font-size: 100px;
}
.pay-result .green {
  color: #1dc779;
}
.pay-result .red {
  color: #cf4444;
}
.pay-result .tit {
  font-size: 24px;
}
.pay-result .tip {
  color: #999;
}
.pay-result p {
  line-height: 40px;
  font-size: 16px;
}
.pay-result .btn {
  margin-top: 50px;
}
.pay-result .alert {
  font-size: 12px;
  color: #999;
  margin-top: 50px;
}
</style>
