# 评价组件-列表渲染

::: tip 目标
这一小节，我们的目标是实现评价组件中评价列表数据渲染

示例如下:

![header](./images/49.png)
:::

::: warning 步骤

1. 在评价组件中添加评价列表数据的布局代码
2. 在评价组件中添加评价列表数据的样式代码
3. 创建用于获取评论列表数据的API接口函数
4. 在评论组件中获取评论列表数据
5. 渲染商品评论列表数据, 对商品评论列表数据进行格式化
:::

::: info 体验

* **Step.1：在评价组件中添加评价列表数据的布局代码**

```html
<div class="list">
  <div class="item">
    <div class="user">
      <img
        src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/avatar_1.png"
        alt=""
      />
      <span>兔****m</span>
    </div>
    <div class="body">
      <div class="score">
        <i class="iconfont icon-wjx01"></i>
        <i class="iconfont icon-wjx01"></i>
        <i class="iconfont icon-wjx01"></i>
        <i class="iconfont icon-wjx01"></i>
        <i class="iconfont icon-wjx02"></i>
        <span class="attr">颜色：黑色 尺码：M</span>
      </div>
      <div class="text">
        网易云app上这款耳机非常不错 新人下载网易云购买这款耳机优惠大
        而且耳机🎧确实正品 音质特别好 戴上这款耳机
        听音乐看电影效果声音真是太棒了 无线方便 小盒自动充电
        最主要是质量好音质棒 想要买耳机的放心拍 音效巴巴滴 老棒了
      </div>
      <div class="time">
        <span>2020-10-10 10:11:22</span>
        <span class="zan"><i class="iconfont icon-dianzan"></i>100</span>
      </div>
    </div>
  </div>
</div>
```

* **Step.2：在评价组件中添加评价列表数据的样式代码**

```css
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
```

* **Step.3：创建用于获取评论列表数据的API接口函数**

```js
/**
 * 获取评论列表数据
 * @param id 商品ID
 * @param params 其他的查询参数
 * @return {AxiosPromise}
 */
export const readCommentList = (id, params) => {
  return request.get(
    `https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate/page`,
    {
      params,
    }
  );
};
```

* **Step.4：在评论组件中获取评论列表数据**

```js
// 评论列表
export const useCommentList = () => {
  const commentList = ref(null);
  const setCommentList = (id, params) => {
    readCommentList(id, params).then(({ data: res, status: status }) => {
      if (status === 200) {
        commentList.value = res.result;
      }
    });
  };

  return { commentList, setCommentList };
};
```

```js
const route = useRoute();
onMounted(() => {
  setCommentData(route.params.id);
});
```

* **Step.5：渲染商品评论列表数据, 对商品评论列表数据进行格式化**

```html
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
```

```js

  // 格式化商品属性信息
  const formatAttrs = (specs) => {
    return specs.map((spec) => `${spec.name}: ${spec.nameValue}`).join(" ");
  };
  // 格式化用户昵称
  const formatNickname = (nickname) => {
    return nickname.substr(0, 1) + "****" + nickname.substr(-1);
  };
```

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
