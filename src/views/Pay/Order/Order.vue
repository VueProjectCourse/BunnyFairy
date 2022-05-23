<script setup>
import Layout from "../../DefaultLayout/Layout.vue";
import AddressCheckout from "../AddressCheckout/AddressCheckout.vue";
import { onMounted } from "vue";
import { useOrderInfo } from "./Order";
const { orderInfo, setOrderList } = useOrderInfo();

onMounted(() => {
  setOrderList();
});
</script>
<template>
  <Layout>
    <div class="xtx-pay-checkout-page">
      <div class="container">
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <BreadItem path="/cart">购物车</BreadItem>
          <BreadItem>填写订单</BreadItem>
        </Bread>
        <div class="wrapper">
          <!-- 收货地址 -->
          <h3 class="box-title">收货地址</h3>
          <div class="box-body">
            <AddressCheckout />
          </div>
          <!-- 商品信息 -->
          <h3 class="box-title">商品信息</h3>
          <div class="box-body">
            <table class="goods">
              <thead>
                <tr>
                  <th>商品信息</th>
                  <th>单价</th>
                  <th>数量</th>
                  <th>小计</th>
                  <th>实付</th>
                </tr>
              </thead>
              <tbody v-if="orderInfo?.goods">
                <tr v-for="goods in orderInfo?.goods" :key="goods.id">
                  <td>
                    <a href="javascript:" class="info">
                      <img :src="goods.picture" alt="" />
                      <div class="right">
                        <p>{{ goods.name }}</p>
                        <p>{{ goods.attrsText }}</p>
                      </div>
                    </a>
                  </td>
                  <td>¥{{ goods.price }}</td>
                  <td>{{ goods.count }}</td>
                  <td>¥{{ goods.totalPrice }}</td>
                  <td>¥{{ goods.totalPayPrice }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 配送时间 -->
          <h3 class="box-title">配送时间</h3>
          <div class="box-body">
            <a class="my-btn active" href="javascript:"
              >不限送货时间：周一至周日</a
            >
            <a class="my-btn" href="javascript:">工作日送货：周一至周五</a>
            <a class="my-btn" href="javascript:"
              >双休日、假日送货：周六至周日</a
            >
          </div>
          <!-- 支付方式 -->
          <h3 class="box-title">支付方式</h3>
          <div class="box-body">
            <a class="my-btn active" href="javascript:">在线支付</a>
            <a class="my-btn" href="javascript:">货到付款</a>
            <span style="color: #999">货到付款需付5元手续费</span>
          </div>
          <!-- 金额明细 -->
          <h3 class="box-title">金额明细</h3>
          <div class="box-body" v-if="orderInfo?.summary">
            <div class="total">
              <dl>
                <dt>商品件数：</dt>
                <dd>{{ orderInfo?.summary.goodsCount }}件</dd>
              </dl>
              <dl>
                <dt>商品总价：</dt>
                <dd>¥{{ orderInfo?.summary.totalPrice }}</dd>
              </dl>
              <dl>
                <dt>运<i></i>费：</dt>
                <dd>¥{{ orderInfo?.summary.postFee }}</dd>
              </dl>
              <dl>
                <dt>应付总额：</dt>
                <dd class="price">¥{{ orderInfo?.summary.totalPayPrice }}</dd>
              </dl>
            </div>
          </div>
          <!-- 提交订单 -->
          <div class="submit">
            <Button type="primary">提交订单</Button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.xtx-pay-checkout-page .wrapper {
  background: #fff;
  padding: 0 20px;
}
.xtx-pay-checkout-page .wrapper .box-title {
  font-size: 16px;
  font-weight: normal;
  padding-left: 10px;
  line-height: 70px;
  border-bottom: 1px solid #f5f5f5;
}
.xtx-pay-checkout-page .wrapper .box-body {
  padding: 20px 0;
}
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
.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.goods .info {
  display: flex;
  text-align: left;
}
.goods .info img {
  width: 70px;
  height: 70px;
  margin-right: 20px;
}
.goods .info .right {
  line-height: 24px;
}
.goods .info .right p:last-child {
  color: #999;
}
.goods tr th {
  background: #f5f5f5;
  font-weight: normal;
}
.goods tr td,
.goods tr th {
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #f5f5f5;
}
.goods tr td:first-child,
.goods tr th:first-child {
  border-left: 1px solid #f5f5f5;
}
.goods tr td:last-child,
.goods tr th:last-child {
  border-right: 1px solid #f5f5f5;
}
.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;
}
.my-btn.active,
.my-btn:hover {
  border-color: var(--primary-color);
}
.total dl {
  display: flex;
  justify-content: flex-end;
  line-height: 50px;
}
.total dl dt i {
  display: inline-block;
  width: 2em;
}
.total dl dd {
  width: 240px;
  text-align: right;
  padding-right: 70px;
}
.total dl dd.price {
  font-size: 20px;
  color: var(--primary-color);
}
.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}
</style>
