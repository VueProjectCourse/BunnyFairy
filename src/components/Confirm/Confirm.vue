<script setup>
import Button from "../Button/Button.vue";
defineProps({
  title: {
    type: String,
    default: "温馨提示",
  },
  content: {
    type: String,
    default: "",
  },
  onSureButtonClick: {
    type: Function,
    default: () => {},
  },
  onCancelButtonClick: {
    type: Function,
    default: () => {},
  },
});
</script>
<template>
  <div class="xtx-confirm">
    <div class="wrapper">
      <div class="header">
        <h3>{{ title }}</h3>
        <a
          href="JavaScript:"
          class="iconfont icon-close-new"
          @click="onCancelButtonClick"
        ></a>
      </div>
      <div class="body">
        <i class="iconfont icon-warning"></i>
        <span>{{ content }}</span>
      </div>
      <div class="footer">
        <Button size="mini" type="gray" @click="onCancelButtonClick"
          >取消</Button
        >
        <Button size="mini" type="primary" @click="onSureButtonClick"
          >确认</Button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.xtx-confirm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background: rgba(0, 0, 0, 0);
  transition: all 0.4s;
}
.xtx-confirm.fade {
  background: rgba(0, 0, 0, 0.5);
}
.xtx-confirm .wrapper {
  width: 400px;
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  opacity: 0;
  transition: all 0.4s;
}
.xtx-confirm .wrapper.fade {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.xtx-confirm .wrapper .header,
.xtx-confirm .wrapper .footer {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
}
.xtx-confirm .wrapper .body {
  padding: 20px 40px;
  font-size: 16px;
}
.xtx-confirm .wrapper .body .icon-warning {
  color: var(--price-color);
  margin-right: 3px;
  font-size: 16px;
}
.xtx-confirm .wrapper .footer {
  text-align: right;
}
.xtx-confirm .wrapper .footer .xtx-button {
  margin-left: 20px;
}
.xtx-confirm .wrapper .header {
  position: relative;
}
.xtx-confirm .wrapper .header h3 {
  font-weight: normal;
  font-size: 18px;
}
.xtx-confirm .wrapper .header a {
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 20px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #999;
}
.xtx-confirm .wrapper .header a:hover {
  color: #666;
}
</style>
