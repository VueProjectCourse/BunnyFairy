# 结算-收货地址-基础布局

::: tip Object
这一小节，我们的目标是将收货地址区块封装成组件

示例如下:
![147](./images/147.png)
:::

::: warning Path

1. 创建收货地址组件,编写组件布局
2. 在收货地址组件中，编写组件样式
3. 在结算组件中调用收货地址组件
:::

::: info Experience

* **Step.1：创建收货地址组件,编写组件布局**

```html
<template>
  <div class="address">
    <div class="text">
      <!-- <div class="none">您需要先添加收货地址才可提交订单。</div> -->
      <ul>
        <li>
          <span>收<i />货<i />人：</span>朱超
        </li>
        <li><span>联系方式：</span>132****2222</li>
        <li><span>收货地址：</span>海南省三亚市解放路108号物质大厦1003室</li>
      </ul>
      <a href="javascript:">修改地址</a>
    </div>
    <div class="action">
      <Button class="btn">切换地址</Button>
      <Button class="btn">添加地址</Button>
    </div>
  </div>
</template>
```

* **Step.2：在收货地址组件中，编写组件样式**

```css
@import "@/assets/styles/variable.css";
.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
}
.address .text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;
}
.address .text .none {
  line-height: 90px;
  color: #999;
  text-align: center;
  width: 100%;
}
.address .text > ul {
  flex: 1;
  padding: 20px;
}
.address .text > ul li {
  line-height: 30px;
}
.address .text > ul li span {
  color: #999;
  margin-right: 5px;
}
.address .text > ul li span > i {
  width: 0.5em;
  display: inline-block;
}
.address .text > a {
  color: var(--primary-color);
  width: 160px;
  text-align: center;
  height: 90px;
  line-height: 90px;
  border-right: 1px solid #f5f5f5;
}
.address .action {
  width: 420px;
  text-align: center;
}
.address .action .btn {
  width: 140px;
  height: 46px;
  line-height: 44px;
  font-size: 14px;
}
.address .action .btn:first-child {
  margin-right: 10px;
}
```

* **Step.3：在结算组件中调用收货地址组件**

```html
<!-- 收货地址 -->
<h3 class="box-title">收货地址</h3>
<div class="box-body">
  <CheckoutAddress />
</div>
```

:::

::: danger Note

* 【重点】
* 【难点】
* 【注意点】
:::
