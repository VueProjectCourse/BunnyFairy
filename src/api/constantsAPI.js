// 一级分类
// 为什么要有constants这个文件呢？ 在渲染一级分类的时候，因为网络问题，可能会有数据闪烁的bug
// 在企业中，商品分类一般情况下固定的
// 因此我们用静态数据先去初始化一下，等数据来了 ajax局部更新 偷偷替换掉，让用户不至于有糟糕的体验
export const topCategories = [
  "居家",
  "美食",
  "服饰",
  "母婴",
  "个护",
  "严选",
  "数码",
  "运动",
  "杂货",
];

// 订单状态
export const orderStatus = [
  { name: "all", label: "全部订单" },
  { name: "unpay", label: "待付款" },
  { name: "deliver", label: "待发货" },
  { name: "receive", label: "待收货" },
  { name: "comment", label: "待评价" },
  { name: "complete", label: "已完成" },
  { name: "cancel", label: "已取消" },
];
