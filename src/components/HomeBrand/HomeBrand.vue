<script setup>
import HomePanel from "../HomePanel/HomePanel.vue";
</script>

<template>
  <HomePanel title="热门品牌" subTitle="国际经典 品质保证">
    <template v-slot:right>
      <a href="javascript:" class="iconfont icon-angle-left prev"></a>
      <a href="javascript:" class="iconfont icon-angle-right next"></a>
    </template>
    <template v-slot:default>
      <div class="box">
        <ul class="list">
          <li v-for="i in 10" :key="i">
            <RouterLink to="/">
              <img
                src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/brand_goods_1.jpg"
                alt=""
              />
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>
  </HomePanel>
</template>


<style scoped>
@import "@/assets/styles/variable.css";
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background-color: var(--primary-color);
}
.iconfont::before {
  font-size: 12px;
  position: relative;
  top: -2px;
}
.iconfont.disabled {
  background: #ccc;
  cursor: not-allowed;
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
}
.box .list {
  width: 200%;
  display: flex;
  transition: all 1s;
}
.box .list li {
  margin-right: 10px;
  width: 240px;
}
.box .list li:nth-child(5n) {
  margin-right: 0;
}
.box .list li img {
  width: 240px;
  height: 305px;
}

</style>