<template>
  <div class="cart-none">
    <img src="@/assets/images/none.png" alt="" />
    <p>购物车内暂时没有商品</p>
    <div class="btn">
      <Button type="primary" @click="$router.push('/')">继续逛逛</Button>
    </div>
  </div>
</template>

<style scoped>
.cart-none {
  text-align: center;
  padding: 150px 0;
  background: #fff;
}
.cart-none p {
  color: #999999;
  padding: 20px 0;
}
.cart-none img {
  width: 180px;
}
</style>
