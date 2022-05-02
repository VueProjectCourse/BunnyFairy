<script setup>
defineProps({
  goods: {
    type: Object
  }
})
</script>

<template>
  <div class="goods-item" v-if="goods">
    <RouterLink :to="`/product/${goods.id}`" class="image">
      <!-- <img :src="goods.picture" alt="" /> -->

      <img v-lazy="goods.picture" alt="" />
    </RouterLink>
    <p class="name ellipsis-2">{{goods.name}}</p>
    <p class="desc ellipsis">{{goods.desc}}</p>
    <p class="price">&yen;{{goods.price}}</p>
    <div class="extra">
      <RouterLink to="/">
        <span>找相似</span>
        <span>发现现多宝贝 &gt;</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.goods-item {
  width: 240px;
  height: 300px;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all 0.5s;
  background-color: whitesmoke;
}

.goods-item .image {
  display: block;
  width: 160px;
  height: 160px;
  margin: 0 auto;
}

.goods-item .image img {
  width: 100%;
  height: 100%;
}

.goods-item p {
  margin-top: 6px;
  font-size: 16px;
}

.goods-item p.name {
  height: 44px;
}

.goods-item p.desc {
  color: #666;
  height: 22px;
}

.goods-item p.price {
  margin-top: 10px;
  font-size: 20px;
  color: var(--price-color);
}

.goods-item .extra {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 86px;
  width: 100%;
  background: var(--primary-color);
  text-align: center;
  transform: translate3d(0, 100%, 0);
  transition: all 0.5s;
}

.goods-item .extra span {
  display: block;
  color: #fff;
  width: 120px;
  margin: 0 auto;
  line-height: 30px;
}

.goods-item .extra span:first-child {
  font-size: 18px;
  border-bottom: 1px solid #fff;
  line-height: 40px;
  margin-top: 5px;
}

.goods-item:hover {
  border-color: var(--primary-color);
  ;
}

.goods-item:hover .extra {
  transform: none;
}
</style>