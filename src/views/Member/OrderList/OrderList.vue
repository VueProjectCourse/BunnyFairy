<script setup>
import MemberLayout from "../../MemberLayout/MemberLayout.vue";
import Learn from "../../../test/learnJSX";

const handlerUpdate = (a) => {
  console.log("你点击一下子元素中的按钮来触发父元素的事件", a);
};
</script>

<template>
  <MemberLayout>
    <div class="member-order">
      订单列表

      <Learn active="abc" @update="handlerUpdate"></Learn>
    </div>
  </MemberLayout>
</template>

<style scoped>
.member-order {
  height: 100%;
  background: #fff;
  position: relative;
}
</style>
