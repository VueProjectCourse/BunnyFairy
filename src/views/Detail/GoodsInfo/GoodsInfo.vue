<script setup>
import { ref } from "vue";
defineProps({
  goods: {
    type: Object,
    default: () => {},
  },
});

// 用于存储用户选择的城市信息的名称集合
const location = ref("");
// 把选中的结果传递到这里 再通过父组件传递子组件
const setLocationChange = (data) => {
  location.value = data.location;
};
</script>
<template>
  <p class="g-name">{{ goods.name }}</p>
  <p class="g-desc">{{ goods.desc }}</p>
  <p class="g-price">
    <span>{{ goods.price }}</span>
    <span>{{ goods.oldPrice }}</span>
  </p>
  <div class="g-service">
    <dl>
      <dt>促销</dt>
      <dd>12月好物放送，App领券购买直降120元</dd>
    </dl>
    <dl>
      <dt>配送</dt>
      <dd>
        至 <City :location="location" @onCityChanged="setLocationChange" />
      </dd>
    </dl>
    <dl>
      <dt>服务</dt>
      <dd>
        <span>无忧退货</span>
        <span>快速退款</span>
        <span>免费包邮</span>
        <a href="javascript:">了解详情</a>
      </dd>
    </dl>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.g-name {
  font-size: 22px;
}
.g-desc {
  color: #999;
  margin-top: 10px;
}
.g-price {
  margin-top: 10px;
}
.g-price span::before {
  content: "¥";
  font-size: 14px;
}
.g-price span:first-child {
  color: var(--price-color);
  margin-right: 10px;
  font-size: 22px;
}
.g-price span:last-child {
  color: #999;
  text-decoration: line-through;
  font-size: 16px;
}
.g-service {
  background: #f5f5f5;
  width: 500px;
  padding: 20px 10px 0 10px;
  margin-top: 10px;
}
.g-service dl {
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}
.g-service dl dt {
  width: 50px;
  color: #999;
}
.g-service dl dd {
  color: #666;
}
.g-service dl dd:last-child span {
  margin-right: 10px;
}
.g-service dl dd:last-child span::before {
  content: "•";
  color: var(--primary-color);
  margin-right: 2px;
}
.g-service dl dd:last-child a {
  color: var(--primary-color);
}
</style>
