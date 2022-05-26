<script setup>
import { onMounted, ref } from "vue";
import dayjs from "dayjs";
import { getOrderInfoById } from "../../api/orderAPI";
import Layout from "../DefaultLayout/Layout.vue";
import useCountDown from "../../utils/useCountDown";
import { useRoute } from "vue-router";
const paying = ref(false);
const route = useRoute();
const orderInfo = ref(null);
const { start, count } = useCountDown();
onMounted(() => {
  getOrderInfoById(route.query.orderId).then((data) => {
    // console.log(data)
    orderInfo.value = data.data.result;
    start(data.data.result.countdown);
  });
});

// 支付结果回调地址
// 回调地址必须经过编码, 否则回调地址中 # 号后面的内容将支付宝被截取掉
// 比如: http://www.corho.com:8080/?payResult=true&orderId=1440510371952594945#/
const redirect = encodeURIComponent("http://www.corho.com:8080/#/pay/callback");

const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net/";

// 跳转到支付地址
const payUrl = `${baseURL}pay/aliPay?orderId=${route.query.orderId}&redirect=${redirect}`;

const handlerPay = () => {
  paying.value = true;
};
</script>
<template>
  <Layout>
    <div class="xtx-pay-page">
      <div class="container">
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <BreadItem path="/cart">购物车</BreadItem>
          <BreadItem>支付订单</BreadItem>
        </Bread>
        <!-- 付款信息 -->
        <div class="pay-info">
          <span class="icon iconfont icon-queren2"></span>
          <div class="tip">
            <p>订单提交成功！请尽快完成支付。</p>
            <p v-if="count > 0">
              支付还剩 <span>{{ dayjs.unix(count).format("mm分ss秒") }}</span
              >, 超时后将取消订单
            </p>

            <p v-else>订单已经超时</p>
          </div>
          <div class="amount">
            <span>应付总额：</span>
            <span>¥{{ orderInfo?.payMoney.toFixed(2) }}</span>
          </div>
        </div>
        <!-- 付款方式 -->
        <div class="pay-type" v-if="count > 0">
          <p class="head">选择以下支付方式付款</p>
          <div class="item">
            <p>支付平台</p>
            <a class="btn wx" href="javascript:"></a>
            <a
              class="btn alipay"
              :href="payUrl"
              target="_blank"
              @click="handlerPay"
            ></a>

            <Dialog title="正在支付..." v-model:visible="paying">
              <div class="pay-wait">
                <img src="@/assets/images/load.gif" alt="" />
                <div v-if="orderInfo">
                  <p>如果支付成功：</p>
                  <RouterLink :to="`/member/order/${orderInfo.id}`"
                    >查看订单详情></RouterLink
                  >
                  <p>如果支付失败：</p>
                  <RouterLink to="/">查看相关疑问></RouterLink>
                </div>
              </div>
            </Dialog>
          </div>
          <div class="item">
            <p>支付方式</p>
            <a class="btn" href="javascript:">招商银行</a>
            <a class="btn" href="javascript:">工商银行</a>
            <a class="btn" href="javascript:">建设银行</a>
            <a class="btn" href="javascript:">农业银行</a>
            <a class="btn" href="javascript:">交通银行</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.pay-info {
  background: #fff;
  display: flex;
  align-items: center;
  height: 240px;
  padding: 0 80px;
}
.pay-info .icon {
  font-size: 80px;
  color: #1dc779;
}
.pay-info .tip {
  padding-left: 10px;
  flex: 1;
}
.pay-info .tip p:first-child {
  font-size: 20px;
  margin-bottom: 5px;
}
.pay-info .tip p:last-child {
  color: #999;
  font-size: 16px;
}
.pay-info .amount span:first-child {
  font-size: 16px;
  color: #999;
}
.pay-info .amount span:last-child {
  color: #cf4444;
  font-size: 20px;
}
.pay-type {
  margin-top: 20px;
  background-color: #fff;
  padding-bottom: 70px;
}
.pay-type p {
  line-height: 70px;
  height: 70px;
  padding-left: 30px;
  font-size: 16px;
}
.pay-type p.head {
  border-bottom: 1px solid #f5f5f5;
}
.pay-type .btn {
  width: 150px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-left: 30px;
  color: #666666;
  display: inline-block;
}
.pay-type .btn.active,
.pay-type .btn:hover {
  border-color: #27ba9b;
}
.pay-type .btn.alipay {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png)
    no-repeat center / contain;
}
.pay-type .btn.wx {
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg)
    no-repeat center / contain;
}

.pay-wait {
  display: flex;
  justify-content: space-around;
}

p {
  margin-top: 30px;
  font-size: 14px;
}
a {
  color: #27ba9b;
}
</style>
