# 项目路由

::: tip 目标
这一小节，我们的目标是了解项目的路由设计，方便我们以后开发项目编写组件路由
:::

::: warning 步骤

1. 路由设计
:::

::: info 体验

* **Kn.1：路由设计**

  | 路径                | 组件（功能）  | 嵌套级别 |
  |:----------------- |:------- |:---- |
  | /                 | 首页      | 1级   |
  | /category/:id     | 一级分类    | 1级   |
  | /category/sub/:id | 二级分类    | 1级   |
  | /goods/:id        | 商品详情    | 1级   |
  | /cart             | 购物车     | 1级   |
  | /login            | 登录      | 1级   |
  | /login/callback   | 第三方登录回调 | 1级   |
  | /checkout/order   | 结算      | 1级   |
  | /checkout/pay     | 支付      | 1级   |
  | /pay/callback     | 支付结果    | 1级   |
  | /member/home      | 个人中心    | 1级   |
  | /member/order     | 订单页面    | 1级   |
  | /member/order     | 订单列表    | 2级   |
  | /member/order/:id | 订单详情    | 2级   |

:::

::: danger 总结

* 【重点】
* 【难点】
* 【注意点】
:::
