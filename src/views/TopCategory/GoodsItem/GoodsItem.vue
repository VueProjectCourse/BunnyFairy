<script setup>
defineProps({
  goods: {
    type: Object,
    default: () => ({})
  }
})
</script>
<template>
  <RouterLink to="/" class="goods-item">
    <img :src="goods.picture" alt="" />
    <p class="name ellipsis">{{goods.name}}</p>
    <p class="desc ellipsis">{{goods.desc}}</p>
    <p class="price">¥{{goods.price}}</p>
  </RouterLink>
</template>

<style>
@import "@/assets/styles/variable.css";

.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;
}

.goods-item:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}


.goods-item img {
  width: 160px;
  height: 160px;
}

.goods-item p {
  padding-top: 10px;
}

.goods-item .name {
  font-size: 16px;
}

.goods-item .desc {
  color: #999;
  height: 29px;
}

.goods-item .price {
  color: price;
  font-size: 20px;
}
</style>