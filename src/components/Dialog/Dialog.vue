<script setup>
import Button from "../Button/Button.vue";
</script>
<template>
  <div class="xtx-dialog">
    <div class="wrapper">
      <div class="header">
        <h3>切换收货地址</h3>
        <a href="JavaScript:" class="iconfont icon-close-new"></a>
      </div>
      <div class="body">对话框内容</div>
      <div class="footer">
        <Button type="gray" style="margin-right: 20px">取消</Button>
        <Button type="primary">确认</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.xtx-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8887;
  background: rgba(0, 0, 0, 0);
}
.xtx-dialog.fade {
  transition: all 0.4s;
  background: rgba(0, 0, 0, 0.5);
}
.xtx-dialog .wrapper {
  width: 600px;
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  opacity: 0;
}
.xtx-dialog .wrapper.fade {
  transition: all 0.4s;
  transform: translate(-50%, -50%);
  opacity: 1;
}
.xtx-dialog .wrapper .body {
  padding: 20px 40px;
  font-size: 16px;
}
.xtx-dialog .wrapper .body .icon-warning {
  color: var(--price-color);
  margin-right: 3px;
  font-size: 16px;
}
.xtx-dialog .wrapper .footer {
  text-align: center;
  padding: 10px 0 30px 0;
}
.xtx-dialog .wrapper .header {
  position: relative;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #f5f5f5;
}
.xtx-dialog .wrapper .header h3 {
  font-weight: normal;
  font-size: 18px;
}
.xtx-dialog .wrapper .header a {
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 24px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #999;
}
.xtx-dialog .wrapper .header a:hover {
  color: #666;
}
</style>
