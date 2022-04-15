<script setup>
defineProps({
  subCategories: {
    type: Array,
  },
});
</script>
<template>
  <div class="sub-list">
    <h3>全部分类</h3>
    <ul v-if="subCategories">
      <li v-for="item in subCategories" :key="item.id">
        <a href="javascript:">
          <img :src="item.picture" alt="item.name" />
          <p>{{ item.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";

.sub-list {
  margin-top: 20px;
  background-color: #fff;
}

.sub-list h3 {
  font-size: 28px;
  color: #666;
  font-weight: normal;
  text-align: center;
  line-height: 100px;
}

.sub-list ul {
  display: flex;
  padding: 0 32px;
  flex-wrap: wrap;
}

.sub-list ul li {
  width: 168px;
  height: 160px;
}

.sub-list ul li a {
  text-align: center;
  display: block;
  font-size: 16px;
}

.sub-list ul li a img {
  width: 100px;
  height: 100px;
}

.sub-list ul li a p {
  line-height: 40px;
}

.sub-list ul li a:hover {
  color: var(--primary-color);
}
</style>
