# 订单管理-基础布局

::: tip Object
这一小节，我们的目标是完成订单列表静态布局。
:::

::: warning Path

1. 在OrderList组件中，编写布局代码
2. 在OrderList组件中，编写样式代码
:::

::: info Experience

* **Step.1：在OrderList组件中，编写布局代码**

```html
<div class="order-list">
  <div class="order-item">
    <div class="head">
      <span>下单时间：2021-09-25 08:33:30</span>
      <span>订单编号：1441561463234760705</span>
      <span class="down-time">
        <i class="iconfont icon-down-time"></i>
        <b>付款截止：28分32秒</b>
      </span>
      <a href="javascript:" class="del">删除</a>
    </div>
    <div class="body">
      <div class="column goods">
        <ul>
          <li v-for="i in 2" :key="i">
            <a class="image" href="javascript:">
              <img src="https://yanxuan-item.nosdn.127.net/a67e6f85a4fc128ab3a2efad5279ca15.png" alt="" />
            </a>
            <div class="info">
              <p class="name ellipsis-2">
                不烫手的茶杯双层隔热茶水杯绿茶杯
              </p>
              <p class="attr ellipsis">
                <span>容量:2只装 </span>
              </p>
            </div>
            <div class="price">¥89</div>
            <div class="count">x1</div>
          </li>
        </ul>
      </div>
      <div class="column state">
        <p>待付款</p>
        <a href="javascript:" class="green">查看物流</a>
        <a href="javascript:" class="green">评价商品</a>
        <a href="javascript:" class="green">查看评价</a>
      </div>
      <div class="column amount">
        <p class="red">¥93</p>
        <p>（含运费：¥4）</p>
        <p>在线付款</p>
      </div>
      <div class="column action">
        <XtxButton type="primary" size="small">立即付款</XtxButton>
        <XtxButton type="primary" size="small">确认收货</XtxButton>
        <p><a href="javascript:">查看详情</a></p>
        <p><a href="javascript:">取消订单</a></p>
        <p><a href="javascript:">再次购买</a></p>
        <p><a href="javascript:">申请售后</a></p>
      </div>
    </div>
  </div>
</div>
```

* **Step.2：在OrderList组件中，编写样式代码**

```css
.order-list {
  background: #fff;
  padding: 20px;
  position: relative;
}
.order-item {
  margin-bottom: 20px;
  border: 1px solid #f5f5f5;
}
.order-item .head {
  height: 50px;
  line-height: 50px;
  background: #f5f5f5;
  padding: 0 20px;
  overflow: hidden;
}
.order-item .head span {
  margin-right: 20px;
}
.order-item .head span.down-time {
  margin-right: 0;
  float: right;
}
.order-item .head span.down-time i {
  vertical-align: middle;
  margin-right: 3px;
}
.order-item .head span.down-time b {
  vertical-align: middle;
  font-weight: normal;
}
.order-item .head .del {
  margin-right: 0;
  float: right;
  color: #999;
}
.order-item .body {
  display: flex;
  align-items: stretch;
}
.order-item .body .column {
  border-left: 1px solid #f5f5f5;
  text-align: center;
  padding: 20px;
}
.order-item .body .column > p {
  padding-top: 10px;
}
.order-item .body .column:first-child {
  border-left: none;
}
.order-item .body .column.goods {
  flex: 1;
  padding: 0;
  align-self: center;
}
.order-item .body .column.goods ul li {
  border-bottom: 1px solid #f5f5f5;
  padding: 10px;
  display: flex;
}
.order-item .body .column.goods ul li:last-child {
  border-bottom: none;
}
.order-item .body .column.goods ul li .image {
  width: 70px;
  height: 70px;
  border: 1px solid #f5f5f5;
}
.order-item .body .column.goods ul li .info {
  width: 220px;
  text-align: left;
  padding: 0 10px;
}
.order-item .body .column.goods ul li .info p {
  margin-bottom: 5px;
}
.order-item .body .column.goods ul li .info p.name {
  height: 38px;
}
.order-item .body .column.goods ul li .info p.attr {
  color: #999;
  font-size: 12px;
}
.order-item .body .column.goods ul li .info p.attr span {
  margin-right: 5px;
}
.order-item .body .column.goods ul li .price {
  width: 100px;
}
.order-item .body .column.goods ul li .count {
  width: 80px;
}
.order-item .body .column.state {
  width: 120px;
}
.order-item .body .column.state .green {
  color: #27BA9B;
}
.order-item .body .column.amount {
  width: 200px;
}
.order-item .body .column.amount .red {
  color: #CF4444;
}
.order-item .body .column.action {
  width: 140px;
}
.order-item .body .column.action a {
  display: block;
}
.order-item .body .column.action a:hover {
  color: #27BA9B;
}
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
