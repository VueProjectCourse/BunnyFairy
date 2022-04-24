<script setup>
import GoodsCommentImage from "../GoodsCommentImage/GoodsCommentImage.vue";
import {
  useCommentHeader,
  useSelectedTag,
  useCommentList,
  useReqParams,
} from "./GoodsComment";
import { useRoute } from "vue-router";
import { onMounted, watchEffect } from "vue";
const { commentData, setCommentData } = useCommentHeader();
const { selectedTag, setSelectedTag } = useSelectedTag();
const { commentList, setCommentList } = useCommentList();
const { reqParams, setReqParams } = useReqParams();
const route = useRoute();
onMounted(() => {
  setCommentData(route.params.id);
});

watchEffect(() => {
  setCommentList(route.params.id, reqParams.value);
});
</script>
<template>
  <div class="goods-comment">
    <div class="head">
      <div class="data">
        <p>
          <span>{{ commentData?.salesCount }}</span
          ><span>人购买</span>
        </p>
        <p>
          <span>{{ commentData?.praisePercent }}</span
          ><span>好评率</span>
        </p>
      </div>
      <div class="tags">
        <div class="dt">大家都在说：</div>
        <div class="dd">
          <a
            href="javascript:"
            :class="{ active: tag.title === selectedTag }"
            @click="
              setSelectedTag(tag.title);
              setReqParams({ tag: tag.title });
            "
            v-for="tag in commentData?.tags"
            :key="tag.title"
            >{{ tag.title }}（{{ tag.tagCount }}）</a
          >
        </div>
      </div>
    </div>
    <div class="sort">
      <span>排序：</span>
      <a
        href="javascript:"
        @click="setReqParams({ sortField: '' })"
        :class="{ active: reqParams.sortField === '' }"
        >默认</a
      >
      <a
        href="javascript:"
        @click="setReqParams({ sortField: 'createTime' })"
        :class="{ active: reqParams.sortField === 'createTime' }"
        >最新</a
      >
      <a
        href="javascript:"
        @click="setReqParams({ sortField: 'praiseCount' })"
        :class="{ active: reqParams.sortField === 'praiseCount' }"
        >最热</a
      >
    </div>
    <div class="list">
      <div class="item" v-for="item in commentList?.items" :key="item.id">
        <div class="user">
          <img :src="item.member.avatar" alt="" />
          <span>{{ item.member.nickname }}</span>
        </div>
        <div class="body">
          <div class="score">
            <i class="iconfont icon-wjx01" v-for="i in item.score" :key="i"></i>
            <i
              class="iconfont icon-wjx02"
              v-for="n in 5 - item.score"
              :key="n"
            ></i>
            <span class="attr">
              <template v-for="spec in item.orderInfo.specs" :key="spec.name">
                {{ spec.name }}:{{ spec.nameValue }} {{ " " }}
              </template>
            </span>
          </div>
          <div class="text">
            {{ item.content }}
          </div>
          <GoodsCommentImage :pictures="item.pictures" />
          <div class="time">
            <span>{{ item.createTime }}</span>
            <span class="zan"
              ><i class="iconfont icon-dianzan"></i>{{ item.praiseCount }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/variable.css";
.goods-comment .head {
  display: flex;
  padding: 30px 0;
}
.goods-comment .head .data {
  width: 340px;
  display: flex;
  padding: 20px;
}
.goods-comment .head .data p {
  flex: 1;
  text-align: center;
}
.goods-comment .head .data p span {
  display: block;
}
.goods-comment .head .data p span:first-child {
  font-size: 32px;
  color: var(--price-color);
}
.goods-comment .head .data p span:last-child {
  color: #999;
}
.goods-comment .head .tags {
  flex: 1;
  display: flex;
  border-left: 1px solid #f5f5f5;
}
.goods-comment .head .tags .dt {
  font-weight: bold;
  width: 100px;
  text-align: right;
  line-height: 42px;
}
.goods-comment .head .tags .dd {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
.goods-comment .head .tags .dd > a {
  width: 132px;
  height: 42px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  text-align: center;
  line-height: 40px;
}
.goods-comment .head .tags .dd > a:hover {
  border-color: hello;
  background: #e6faf6;
  color: hello;
}
.goods-comment .head .tags .dd > a.active {
  border-color: var(--primary-color);
  background: var(--primary-color);
  color: #fff;
}
.goods-comment .sort {
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  margin: 0 20px;
  color: #666;
}
.goods-comment .sort > span {
  margin-left: 20px;
}
.goods-comment .sort > a {
  margin-left: 30px;
}
.goods-comment .sort > a.active,
.goods-comment .sort > a:hover {
  color: var(--primary-color);
}

.list {
  padding: 0 20px;
}
.list .item {
  display: flex;
  padding: 25px 10px;
  border-bottom: 1px solid #f5f5f5;
}
.list .item .user {
  width: 160px;
}
.list .item .user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.list .item .user span {
  padding-left: 10px;
  color: #666;
}
.list .item .body {
  flex: 1;
}
.list .item .body .score {
  line-height: 40px;
}
.list .item .body .score .iconfont {
  color: #ff9240;
  padding-right: 3px;
}
.list .item .body .score .attr {
  padding-left: 10px;
  color: #666;
}
.list .item .text {
  color: #666;
  line-height: 24px;
}
.list .item .time {
  color: #999;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
</style>
