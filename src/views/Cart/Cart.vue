<script setup>
import Layout from "../DefaultLayout/Layout.vue";
import GoodsRelevant from "../Detail/GoodsRelevant/GoodsRelevant.vue";
import { useCartStore } from "@/stores/cartStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import Message from "@/components/Message/Message";
import Confirm from "@/components/Confirm/Confirm.js";

const {
  effectiveGoodsList,
  effectiveGoodsCount,
  invalidGoodsList,
  userSelectedGoodsCount,
  userSelectedGoodsPrice,
  selectAllButtonStatus,
} = storeToRefs(useCartStore());

const cartStore = useCartStore();

onMounted(() => {
  cartStore.updateCartList().then(() => {
    Message({ type: "success", text: "本地购物车中的商品信息更新成功" });
  });
});

const cartRemove = (skuId) => {
  // cartStore.deleteGoodsOfCartBySkuId(skuId);
  console.log(skuId);
  Confirm({
    content: "您确定要删除该商品吗?",
  })
    .then(() => {
      console.log("点击确定");
    })
    .catch(() => {
      console.log("点击取消");
    });
};

// 删除用户选择的商品 userSelectedGoodsList、清空无效商品 invalidGoodsList
const deleteGoodsOfCartByUserSelectedOrInvalid = (flag) => {
  // 弹框提示文字
  let content = "";
  // 如果当前操作是删除用户选择的商品
  if (flag === "userSelectedGoodsList") {
    // 判断用户是否选择了商品
    if (userSelectedGoodsCount.value === 0) {
      Message({ type: "error", text: "请选择要删除的商品" });
      return;
    }
    // 设置弹框提示文字
    content = "确定要删除选中的商品吗?";
  }
  // 如果当前操作是清空无效商品
  if (flag === "invalidGoodsList") {
    // 判断当前是否有无效商品
    if (invalidGoodsList.value.length === 0) {
      // 提示
      Message({ type: "error", text: "没有无效商品" });
      return;
    }
    // 设置弹框提示文字
    content = "确定要删除无效商品吗?";
  }
  // 和用户进行确认
  Confirm({ content })
    .then(() => {
      // 执行操作
      cartStore.deleteGoodsOfCartByUserSelectedOrInvalid(flag);
    })
    .catch(() => {});
};
</script>
<template>
  <Layout>
    <div class="cart-page">
      <div class="container">
        <Bread>
          <BreadItem path="/">首页</BreadItem>
          <BreadItem>购物车</BreadItem>
        </Bread>
        <div class="cart">
          <table>
            <thead>
              <tr>
                <th>
                  <Checkbox
                    :modelValue="selectAllButtonStatus"
                    @update:modelValue="cartStore.selectIsAll($event)"
                    >全选</Checkbox
                  >
                </th>
                <th>商品信息</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
              </tr>
            </thead>
            <!-- 有效商品 -->
            <tbody>
              <tr v-for="goods in effectiveGoodsList" :key="goods.id">
                <td>
                  <Checkbox
                    :modelValue="goods.selected"
                    @update:modelValue="
                      cartStore.updateGoodsOfCartBySkuId({
                        skuId: goods.skuId,
                        selected: $event,
                      })
                    "
                  />
                </td>
                <td>
                  <div class="goods">
                    <RouterLink :to="`/goods/${goods.id}`"
                      ><img :src="goods.picture" alt=""
                    /></RouterLink>
                    <div>
                      <p class="name ellipsis">
                        {{ goods.name }}
                      </p>
                      <!-- 选择规格组件 -->
                    </div>
                  </div>
                </td>
                <td class="tc">
                  <p>&yen;{{ Number(goods.nowPrice).toFixed(2) }}</p>
                  <p v-if="goods.price - goods.nowPrice > 0">
                    比加入时降价
                    <span class="red"
                      >&yen;{{
                        (goods.price - goods.nowPrice).toFixed(2)
                      }}</span
                    >
                  </p>
                </td>
                <td class="tc">
                  <NumberBox v-model="goods.count"></NumberBox>
                </td>
                <td class="tc">
                  <p class="f16 red">
                    &yen;{{ (goods.nowPrice * goods.count).toFixed(2) }}
                  </p>
                </td>
                <td class="tc">
                  <p><a href="javascript:">移入收藏夹</a></p>
                  <p>
                    <a
                      class="green"
                      href="javascript:"
                      @click="cartRemove(goods.skuId)"
                      >删除</a
                    >
                  </p>
                  <p><a href="javascript:">找相似</a></p>
                </td>
              </tr>
            </tbody>
            <!-- 无效商品 -->
            <tbody v-if="invalidGoodsList.length > 0">
              <tr>
                <td colspan="6"><h3 class="tit">失效商品</h3></td>
              </tr>
              <tr v-for="goods in invalidGoodsList" :key="goods.id">
                <td></td>
                <td>
                  <div class="goods">
                    <RouterLink :to="`/goods/${goods.id}`"
                      ><img :src="goods.picture" alt=""
                    /></RouterLink>
                    <div>
                      <p class="name ellipsis">
                        {{ goods.name }}
                      </p>
                      <p class="attr">{{ goods.attrsText }}</p>
                    </div>
                  </div>
                </td>
                <td class="tc">
                  <p>&yen;{{ goods.nowPrice }}</p>
                </td>
                <td class="tc">{{ goods.count }}</td>
                <td class="tc">
                  <p>&yen;{{ (goods.nowPrice * goods.count).toFixed(2) }}</p>
                </td>
                <td class="tc">
                  <p><a class="green" href="javascript:">删除</a></p>
                  <p><a href="javascript:">找相似</a></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 操作栏 -->
        <div class="action">
          <div class="batch">
            <Checkbox>全选</Checkbox>
            <a
              href="javascript:"
              @click="
                deleteGoodsOfCartByUserSelectedOrInvalid(
                  'userSelectedGoodsList'
                )
              "
              >删除商品</a
            >
            <a href="javascript:">移入收藏夹</a>
            <a
              href="javascript:"
              @click="
                deleteGoodsOfCartByUserSelectedOrInvalid('invalidGoodsList')
              "
              >清空失效商品</a
            >
          </div>
          <div class="total">
            共 {{ effectiveGoodsCount }} 件商品，已选择
            {{ userSelectedGoodsCount }} 件，商品合计：
            <span class="red">¥{{ userSelectedGoodsPrice }}</span>
            <Button type="primary">下单结算</Button>
          </div>
        </div>
        <!-- 猜你喜欢 -->
        <GoodsRelevant />
      </div>
    </div>
  </Layout>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.tc {
  text-align: center;
}
.tc .xtx-number-box {
  margin: 0 auto;
  width: 120px;
}
.red {
  color: var(--price-color);
}
.green {
  color: var(--primary-color);
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
}
.goods img {
  width: 100px;
  height: 100px;
}
.goods > div {
  width: 280px;
  font-size: 16px;
  padding-left: 10px;
}
.goods > div .attr {
  font-size: 14px;
  color: #999;
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
}
.action .xtx-checkbox {
  color: #999;
}
.action .batch a {
  margin-left: 20px;
}
.action .red {
  font-size: 18px;
  margin-right: 20px;
  font-weight: bold;
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.cart-page .cart {
  background: #fff;
  color: #666;
}
.cart-page .cart table {
  border-spacing: 0;
  border-collapse: collapse;
  line-height: 24px;
  width: 100%;
}
.cart-page .cart table th,
.cart-page .cart table td {
  padding: 10px;
  border-bottom: 1px solid #f5f5f5;
}
.cart-page .cart table th:first-child,
.cart-page .cart table td:first-child {
  text-align: left;
  padding-left: 30px;
  color: #999;
}
.cart-page .cart table th {
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
</style>
