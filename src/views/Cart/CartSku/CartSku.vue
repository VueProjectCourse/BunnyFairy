<script setup>
import GoodsSku from "../../Detail/GoodsSku/GoodsSku.vue";
import { onClickOutside } from "@vueuse/core";
import { useCartStore } from "@/stores/cartStore";
import { getSkuInfoBySkuId } from "../../../api/cartAPI";
import { ref } from "vue";
import Message from "../../../components/Message/Message";

const props = defineProps({
  attrsText: {
    type: String,
    default: "",
  },
  skuId: {
    type: String,
    default: "",
  },
});
const specsAndSkus = ref(null);

const loadingSku = ref(false);

// 存储用户选择的新的商品规格
let userSelectedNewSku = null;
// 控制规格弹层的显示和隐藏
const visible = ref(false);

// 获取弹层容器
const target = ref(null);

// 显示
const show = async () => {
  visible.value = true;

  loadingSku.value = true;

  let { data: res } = await getSkuInfoBySkuId(props.skuId);

  console.log(res);

  specsAndSkus.value = res.result;

  loadingSku.value = false;
};

// 隐藏
const hide = () => {
  visible.value = false;
};

// 切换
const toggle = () => {
  visible.value ? hide() : show();
};

// 在规格外部点击时
onClickOutside(target, () => {
  // 如果规格弹框是显示的，就让他隐藏
  visible.value && hide();
});

// 监听规格信息变化
const onSpecChanged = (sku) => {
  userSelectedNewSku = sku;
};

// 提交规格
const cartStore = useCartStore();
const submitSku = () => {
  hide();
  // 如果用户没有重新选择规格, 或者用户选择了规格, 但是选择的规格和之前是一样的
  if (
    !userSelectedNewSku ||
    (userSelectedNewSku && userSelectedNewSku.skuId === props.skuId)
  ) {
    // 用户提示
    Message({ type: "warn", text: "商品规格信息没有发生变化" });
    return;
  }
  cartStore.updateGoodsOfCartBySkuChanged({
    oldSkuId: props.skuId,
    userSelectedNewSku,
  });
};
</script>

<template>
  <div class="cart-sku" ref="target">
    <div class="attrs" @click="toggle">
      <span class="ellipsis">{{ attrsText }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="layer" v-if="visible">
      <div class="loading" v-if="loadingSku"></div>
      <GoodsSku
        v-if="!loadingSku && specsAndSkus"
        :skuId="skuId"
        :specs="specsAndSkus.specs"
        :skus="specsAndSkus.skus"
        @on-spec-changed="onSpecChanged"
      />
      <Button
        @click="submitSku"
        v-if="specsAndSkus"
        type="primary"
        size="mini"
        style="margin-left: 60px"
      >
        确定
      </Button>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.cart-sku {
  height: 28px;
  border: 1px solid #f5f5f5;
  padding: 0 6px;
  position: relative;
  margin-top: 10px;
  display: inline-block;
}
.cart-sku .attrs {
  line-height: 24px;
  display: flex;
}
.cart-sku .attrs span {
  max-width: 230px;
  font-size: 14px;
  color: #999;
}
.cart-sku .attrs i {
  margin-left: 5px;
  font-size: 14px;
}
.cart-sku .layer {
  position: absolute;
  left: -1px;
  top: 40px;
  z-index: 10;
  width: 400px;
  border: 1px solid var(--price-color);
  box-shadow: 2px 2px 4px #e6faf6;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  padding: 20px;
}
.cart-sku .layer::before {
  content: "";
  width: 12px;
  height: 12px;
  border-left: 1px solid var(--price-color);
  border-top: 1px solid var(--price-color);
  position: absolute;
  left: 12px;
  top: -8px;
  background: #fff;
  transform: scale(0.8, 1) rotate(45deg);
}
.cart-sku .layer .loading {
  height: 224px;
  background: url(@/assets/images/loading.gif) no-repeat center;
}
</style>
