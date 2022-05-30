<script setup>
defineProps(["order"]);
</script>

<template>
  <div class="order-item">
    <div class="head">
      <span>下单时间：{{ order.createTime }}</span>
      <span>订单编号：{{ order.id }}</span>
      <span
        class="down-time"
        v-if="order.orderState === 1 && order.countdown !== -1"
      >
        <i class="iconfont icon-down-time"></i>
        <b>付款截止：{{ timeText }}</b>
      </span>
      <!-- 订单状态为 已完成(5)或已取消(6)时可以删除订单 -->
      <a
        v-if="[5, 6].includes(order.orderState)"
        href="javascript:;"
        class="del"
        >删除</a
      >
    </div>
    <div class="body">
      <div class="column goods">
        <ul>
          <li v-for="goods in order.skus" :key="goods.id">
            <router-link class="image" :to="`/product/${goods.spuId}`">
              <img :src="goods.image" alt="" />
            </router-link>
            <div class="info">
              <p class="name ellipsis-2">
                {{ goods.name }}
              </p>
              <p class="attr ellipsis">
                {{ goods.attrsText }}
              </p>
            </div>
            <div class="price">¥{{ goods.realPay }}</div>
            <div class="count">x{{ goods.quantity }}</div>
          </li>
        </ul>
      </div>
      <div class="column state">
        <!-- orderStatus是一个数组, 数组的索引和订单状态值是对应关系 -->
        <p>
          {{ orderStatus[order.orderState].label }}
        </p>
        <p v-if="order.orderState === 3">
          <a href="javascript:;" class="green">查看物流</a>
        </p>
        <p v-if="order.orderState === 4">
          <a href="javascript:;" class="green">评价商品</a>
        </p>
        <p v-if="order.orderState === 5">
          <a href="javascript:;" class="green">查看评价</a>
        </p>
      </div>
      <div class="column amount">
        <p class="red">¥{{ order.payMoney }}</p>
        <p>（含运费：¥{{ order.postFee }}）</p>
        <p>在线支付</p>
      </div>
      <div class="column action">
        <Button
          @click="$router.push(`/member/pay?orderId=${order.id}`)"
          type="primary"
          size="small"
          v-if="order.orderState === 1"
          >立即付款</Button
        >
        <Button v-if="order.orderState === 3" type="primary" size="small"
          >确认收货</Button
        >
        <p>
          <RouterLink :to="`/member/order/${order.id}`">查看详情</RouterLink>
        </p>
        <p v-if="order.orderState === 1"><a href="javascript:;">取消订单</a></p>
        <p v-if="[2, 3, 4, 5].includes(order.orderState)">
          <a href="javascript:;">再次购买</a>
        </p>
        <p v-if="[4, 5].includes(order.orderState)">
          <a href="javascript:;">申请售后</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-item {
  margin-bottom: 20px;
  border: 1px solid #f5f5f5;
}
.order-item .head {
  height: 50px;
  line-height: 50px;
  background: #f5f5f5;
  padding: 0 20px;
  overflow: hidden;
}
.order-item .head span {
  margin-right: 20px;
}
.order-item .head span.down-time {
  margin-right: 0;
  float: right;
}
.order-item .head span.down-time i {
  vertical-align: middle;
  margin-right: 3px;
}
.order-item .head span.down-time b {
  vertical-align: middle;
  font-weight: normal;
}
.order-item .head .del {
  margin-right: 0;
  float: right;
  color: #999;
}
.order-item .body {
  display: flex;
  align-items: stretch;
}
.order-item .body .column {
  border-left: 1px solid #f5f5f5;
  text-align: center;
  padding: 20px;
}
.order-item .body .column > p {
  padding-top: 10px;
}
.order-item .body .column:first-child {
  border-left: none;
}
.order-item .body .column.goods {
  flex: 1;
  padding: 0;
  align-self: center;
}
.order-item .body .column.goods ul li {
  border-bottom: 1px solid #f5f5f5;
  padding: 10px;
  display: flex;
}
.order-item .body .column.goods ul li:last-child {
  border-bottom: none;
}
.order-item .body .column.goods ul li .image {
  width: 70px;
  height: 70px;
  border: 1px solid #f5f5f5;
}
.order-item .body .column.goods ul li .info {
  width: 220px;
  text-align: left;
  padding: 0 10px;
}
.order-item .body .column.goods ul li .info p {
  margin-bottom: 5px;
}
.order-item .body .column.goods ul li .info p.name {
  height: 38px;
}
.order-item .body .column.goods ul li .info p.attr {
  color: #999;
  font-size: 12px;
}
.order-item .body .column.goods ul li .info p.attr span {
  margin-right: 5px;
}
.order-item .body .column.goods ul li .price {
  width: 100px;
}
.order-item .body .column.goods ul li .count {
  width: 80px;
}
.order-item .body .column.state {
  width: 120px;
}
.order-item .body .column.state .green {
  color: #27ba9b;
}
.order-item .body .column.amount {
  width: 200px;
}
.order-item .body .column.amount .red {
  color: #cf4444;
}
.order-item .body .column.action {
  width: 140px;
}
.order-item .body .column.action a {
  display: block;
}
.order-item .body .column.action a:hover {
  color: #27ba9b;
}
</style>
