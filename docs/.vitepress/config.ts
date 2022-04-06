export default {
  lang: 'en-US',
  title: 'bunnyfairy',
  description: 'bunnyfairy technical documentation',
  base: "/BunnyFairy",
  // markdown文件设置
  markdown: {
    // lineNumbers: true
  },
  themeConfig: {
    // 设置文档所在的文件夹
    docsDir: 'docs',
    // 是否展示 可编辑文档
    editLinks: true,
    // 搜索插件
    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },
    // 顶部导航
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      }
    ],
    // 侧边栏导航
    sidebar: {
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: "前置内容",
      children: [
        { text: '项目介绍', link: '/preparation/introduction' },
        { text: '项目路由', link: '/preparation/router-design' },
        { text: '项目创建', link: '/preparation/initialization' },
        { text: '配置路由管理器', link: '/preparation/router-config' },
        { text: '配置状态管理器', link: '/preparation/state-config' },
        { text: '代码规范配置', link: '/preparation/code-style' },
        { text: '封装网络请求', link: '/preparation/network-request' },
        { text: '项目样式配置', link: '/preparation/style-config' },
        { text: 'DevTools安装', link: '/preparation/devtools-install' },
        { text: '布局模板页面', link: '/preparation/applayout' },
      ]
    },
    {
      text: "首页模块",
      children: [
        { text: '基础布局', link: '/home/baselayout' },
        { text: '顶部通栏布局', link: '/home/apptopnav' },
        { text: '头部布局', link: '/home/appheader' },
        { text: '底部布局', link: '/home/appfooter' },
        { text: '抽取导航组件', link: '/home/improve-headernav' },
        { text: '导航组件数据填充', link: '/home/render-headernav' },
        { text: '创建一级分类页面', link: '/home/top-category' },
        { text: '创建二级分类页面', link: '/home/sub-category' },
        { text: '控制导航下拉菜单显示隐藏', link: '/home/devtools-install' },
        { text: '实现吸顶导航(传统)', link: '/home/devtools-install' },
        { text: '实现吸顶导航(工具库)', link: '/home/devtools-install' },
        { text: '左侧分类结构渲染', link: '/home/devtools-install' },
        { text: '实现左侧分类列表商品推荐', link: '/home/devtools-install' },
        { text: '实现左侧分类品牌推荐', link: '/home/devtools-install' },
        { text: '实现左侧分类骨架效果', link: '/home/devtools-install' },
        { text: '首页轮播图布局', link: '/home/devtools-install' },
        { text: '首页轮播图渲染结构', link: '/home/devtools-install' },
        { text: '首页轮播图逻辑封装', link: '/home/devtools-install' },
        { text: '封装面板组件', link: '/home/devtools-install' },
        { text: '实现新鲜好物', link: '/home/devtools-install' },
        { text: '实现人气推荐', link: '/home/devtools-install' },
        { text: '实现数据懒加载', link: '/home/devtools-install' },
        { text: '实现面板骨架效果', link: '/home/devtools-install' },
        { text: '实现热门品牌', link: '/home/devtools-install' },
        { text: '实现产品区块', link: '/home/devtools-install' },
        { text: '实现图片懒加载', link: '/home/devtools-install' },
        { text: '实现最新专题', link: '/home/devtools-install' },
      ]
    },
    {
      text: "分类模块",
      children: [
        { text: '渲染函数', link: '/category/devtools-install' },
        { text: '实现面包屑导航组件', link: '/category/devtools-install' },
        { text: '实现面包屑导航动画', link: '/category/devtools-install' },
        { text: '批量注册组件', link: '/category/devtools-install' },
        { text: '一级分类-轮播图展示', link: '/category/devtools-install' },
        { text: '一级分类-展示二级分类列表', link: '/category/devtools-install' },
        { text: '一级分类-实现推荐商品布局', link: '/category/devtools-install' },
        { text: '一级分类-实现推荐商品渲染', link: '/category/devtools-install' },
        { text: '路由切换页面滚动至顶部', link: '/category/devtools-install' },
        { text: '二级分类-筛选组件-数据渲染', link: '/category/devtools-install' },
        { text: '二级分类-筛选组件-收集筛选条件', link: '/category/devtools-install' },
        { text: '二级分类-筛选组件-数据更新', link: '/category/devtools-install' },
        { text: '二级分类-筛选组件-骨架屏', link: '/category/devtools-install' },
        { text: '封装复选框组件', link: '/category/devtools-install' },
        { text: '二级分类-排序组件', link: '/category/devtools-install' },
        { text: '二级分类-商品列表渲染', link: '/category/devtools-install' },
        { text: '二级分类-商品排序与筛选', link: '/category/devtools-install' },
        { text: '二级分类-加载更多数据', link: '/category/devtools-install' },
      ]
    },
    {
      text: "商品详情",
      children: [
        { text: '基础布局', link: '/detail/devtools-install' },
        { text: '渲染面包屑导航', link: '/detail/devtools-install' },
        { text: '图片预览组件', link: '/detail/devtools-install' },
        { text: '实现放大镜效果', link: '/detail/devtools-install' },
        { text: '商品基本信息展示', link: '/detail/devtools-install' },
        { text: '城市选择组件-基础布局', link: '/detail/devtools-install' },
        { text: '城市选择组件-获取数据', link: '/detail/devtools-install' },
        { text: '城市选择组件-交互逻辑', link: '/detail/devtools-install' },
        { text: '规格组件-SPU与SKU', link: '/detail/devtools-install' },
        { text: '规格组件-基础布局', link: '/detail/devtools-install' },
        { text: '规格组件-数据渲染与选中', link: '/detail/devtools-install' },
        { text: '规格组件-禁选效果分析', link: '/detail/devtools-install' },
        { text: '规格组件-禁用效果实现', link: '/detail/devtools-install' },
        { text: '规格组件通讯-默认选中', link: '/detail/devtools-install' },
        { text: '规格组件通讯-数据回传', link: '/detail/devtools-install' },
        { text: '商品数量选择组件', link: '/detail/devtools-install' },
        { text: '按钮组件', link: '/detail/devtools-install' },
        { text: '同类推荐组件', link: '/detail/devtools-install' },
        { text: '标签页组件', link: '/detail/devtools-install' },
        { text: '热榜组件', link: '/detail/devtools-install' },
        { text: '详情组件', link: '/detail/devtools-install' },
        { text: '注意事项组件', link: '/detail/devtools-install' },
        { text: '评价组件-头部渲染', link: '/detail/devtools-install' },
        { text: '评价组件-列表渲染', link: '/detail/devtools-install' },
        { text: '评价组件-图片预览', link: '/detail/devtools-install' },
        { text: '评价组件-数据排序与筛选', link: '/detail/devtools-install' },
        { text: '分页组件-生成页码数据', link: '/detail/devtools-install' },
        { text: '分页组件-渲染分页数据', link: '/detail/devtools-install' },
        { text: '分页组件-关联评论列表', link: '/detail/devtools-install' },
      ]
    },
    {
      text: "登录",
      children: [
        { text: '登录-配置路由规则', link: '/login/devtools-install' },
        { text: '登录-基础布局', link: '/login/devtools-install' },
        { text: '登录-表单组件', link: '/login/devtools-install' },
        { text: '登录-表单验证', link: '/login/devtools-install' },
        { text: '消息提示组件', link: '/login/devtools-install' },
        { text: '登录-账号密码登录', link: '/login/devtools-install' },
        { text: '登录-手机号登录-验证码', link: '/login/devtools-install' },
        { text: '登录-手机号登录-登录', link: '/login/devtools-install' },
        { text: '退出登录', link: '/login/devtools-install' },
        { text: 'QQ登录-流程分析', link: '/login/devtools-install' },
        { text: 'QQ登录-准备工作', link: '/login/devtools-install' },
        { text: 'QQ登录-创建登录按钮', link: '/login/devtools-install' },
        { text: 'QQ登录-准备回调路由组件', link: '/login/devtools-install' },
        { text: 'QQ登录-获取openid', link: '/login/devtools-install' },
        { text: 'QQ登录-检索已绑定账号', link: '/login/devtools-install' },
        { text: 'QQ登录-绑定已有账号', link: '/login/devtools-install' },
        { text: 'QQ登录-绑定新注册账号', link: '/login/devtools-install' },
      ]
    },
    {
      text: "购物车",
      children: [
        { text: '购物车功能分析', link: '/cart/devtools-install' },
        { text: '加入购物车-未登录', link: '/cart/devtools-install' },
        { text: '头部购物车-商品列表渲染-未登录', link: '/cart/devtools-install' },
        { text: '头部购物车-删除-未登录', link: '/cart/devtools-install' },
        { text: '头部购物车-细节处理', link: '/cart/devtools-install' },
        { text: '购物车-基础布局', link: '/cart/devtools-install' },
        { text: '购物车-数据渲染-未登录', link: '/cart/devtools-install' },
        { text: '购物车-更新商品列表-未登录', link: '/cart/devtools-install' },
        { text: '购物车-单选-未登录', link: '/cart/devtools-install' },
        { text: '购物车-全选-未登录', link: '/cart/devtools-install' },
        { text: '购物车-删除-未登录', link: '/cart/devtools-install' },
        { text: '封装确认框组件', link: '/cart/devtools-install' },
        { text: '购物车-批量删除-清空无效-未登录', link: '/cart/devtools-install' },
        { text: '购物车-更改商品数量-未登录', link: '/cart/devtools-install' },
        { text: '购物车-规格数据渲染-未登录', link: '/cart/devtools-install' },
        { text: '购物车-规格数据修改-未登录', link: '/cart/devtools-install' },
        { text: '购物车-合并购物车-已登录', link: '/cart/devtools-install' },
        { text: '购物车-购物车列表-已登录', link: '/cart/devtools-install' },
        { text: '购物车-加入购物车-已登录', link: '/cart/devtools-install' },
        { text: '购物车-删除商品-已登录', link: '/cart/devtools-install' },
        { text: '购物车-批量删除商品-已登录', link: '/cart/devtools-install' },
        { text: '购物车-选中状态和数量-已登录', link: '/cart/devtools-install' },
        { text: '购物车-全选与取消全选-已登录', link: '/cart/devtools-install' },
        { text: '购物车-修改商品规格-已登录', link: '/cart/devtools-install' },
        { text: '清空本地购物车-退出登录', link: '/cart/devtools-install' },
        { text: '购物车-下单结算按钮', link: '/cart/devtools-install' },
      ]
    },
    {
      text: "结算",
      children: [
        { text: '结算-基础布局', link: '/settlement/devtools-install' },
        { text: '结算-渲染页面', link: '/settlement/devtools-install' },
        { text: '结算-对话框组件封装', link: '/settlement/devtools-install' },
        { text: '结算-收货地址-基础布局', link: '/settlement/devtools-install' },
        { text: '结算-收货地址-添加', link: '/settlement/devtools-install' },
        { text: '结算-收货地址-渲染', link: '/settlement/devtools-install' },
        { text: '结算-收货地址-修改', link: '/settlement/devtools-install' },
        { text: '结算-收货地址-切换', link: '/settlement/devtools-install' },
        { text: '结算-提交订单', link: '/settlement/devtools-install' },
        { text: '支付-基础布局', link: '/settlement/devtools-install' },
        { text: '支付-信息展示', link: '/settlement/devtools-install' },
        { text: '支付-支付流程', link: '/settlement/devtools-install' },
        { text: '支付-跳转支付', link: '/settlement/devtools-install' },
        { text: '支付-支付结果展示', link: '/settlement/devtools-install' },
      ]
    },
    {
      text: "个人中心",
      children: [
        { text: '个人中心-布局容器', link: '/profile/devtools-install' },
        { text: '个人中心-基础布局', link: '/profile/devtools-install' },
        { text: '模拟接口数据', link: '/profile/devtools-install' },
        { text: '个人中心-我的收藏', link: '/profile/devtools-install' },
        { text: '个人中心-菜单激活', link: '/profile/devtools-install' },
        { text: '在vue中使用JSX', link: '/profile/devtools-install' },
        { text: '封装XtxTabs组件', link: '/profile/devtools-install' },
        { text: '订单管理-渲染订单标题', link: '/profile/devtools-install' },
        { text: '订单管理-基础布局', link: '/profile/devtools-install' },
        { text: '订单管理-列表渲染', link: '/profile/devtools-install' },
        { text: '订单管理-条件查询', link: '/profile/devtools-install' },
        { text: '订单管理-取消订单', link: '/profile/devtools-install' },
        { text: '订单管理-删除订单', link: '/profile/devtools-install' },
        { text: '订单管理-确认收货', link: '/profile/devtools-install' },
        { text: '订单管理-查看物流', link: '/profile/devtools-install' },
        { text: '订单详情-头部展示', link: '/profile/devtools-install' },
        { text: '订单详情-封装步骤条组件', link: '/profile/devtools-install' },
        { text: '订单详情-物流信息', link: '/profile/devtools-install' },
        { text: '订单详情-商品信息', link: '/profile/devtools-install' },
        { text: '订单详情-取消订单', link: '/profile/devtools-install' },
        { text: '订单详情-确认收货', link: '/profile/devtools-install' },
        { text: '订单详情-再次购买', link: '/profile/devtools-install' },
      ]
    },
  ]
}


/*
⓵ 
⓶ 
⓷ 
⓸ 
⓹ 
⓺ 
⓻ 
⓼ 
⓽ 
⓾
*/