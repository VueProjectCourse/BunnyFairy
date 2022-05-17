export default {
  lang: 'en-US',
  title: 'bunnyfairy',
  description: 'bunnyfairy technical documentation',
  base: "/BunnyFairy",
  // markdown文件设置
  markdown: {
    lineNumbers: true
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
        { text: '项目创建', link: '/preparation/initialization' },
        { text: '配置路由管理器', link: '/preparation/router-config' },
        { text: '配置状态管理器', link: '/preparation/state-config' },
        { text: '代码规范配置', link: '/preparation/code-style' },
        { text: '封装网络请求', link: '/preparation/network-request' },
        { text: '项目样式配置', link: '/preparation/style-config' },
        { text: '批量注册组件', link: '/category/bulk-registration' },
      ]
    },

    {
      text: "默认模板页面",
      children: [
        { text: '布局模板页面', link: '/preparation/applayout' },
        { text: '顶部通栏布局', link: '/home/apptopnav' },
        { text: '头部布局', link: '/home/appheader' },
        { text: '底部布局', link: '/home/appfooter' },
        { text: '抽取导航组件', link: '/home/improve-headernav' },
      ],
    },
    {
      text: "公共组件",
      children: [
        { text: '轮播图组件' },
        { text: '面包屑导航组件' },
        { text: '复选框组件' },
        { text: '城市选择组件' },
        { text: '图片预览组件' },
        { text: '商品规格组件' },
        { text: '标签页组件' },
        { text: '分页组件' },
        { text: '数量选择组件' },
        { text: '按钮组件' }
      ],
    },
    {
      text: "首页页面",
      children: [
        { text: '基础布局', link: '/home/baselayout' },
        { text: '导航组件数据填充', link: '/home/render-headernav' },
        { text: '导航二级菜单显示隐藏', link: '/home/submenu-toggle' },
        { text: '实现吸顶导航(传统)', link: '/home/sticky-nav-tradition' },
        { text: '实现吸顶导航(工具库)', link: '/home/sticky-nav-plugin' },
        { text: '左侧分类结构渲染', link: '/home/category-menu' },
        { text: '实现左侧分类列表商品推荐', link: '/home/category-goods' },
        { text: '实现左侧分类品牌推荐', link: '/home/brand-recommend' },
        { text: '实现左侧分类骨架效果', link: '/home/menu-skeleton' },
        { text: '轮播图布局', link: '/home/home-carousel-layout' },
        { text: '轮播图数据渲染', link: '/home/home-carousel-render' },
        { text: '轮播图点击轮播', link: '/home/home-carousel-click' },
        { text: '轮播图自动轮播', link: '/home/home-carousel-autoplay' },
        { text: '封装面板组件', link: '/home/home-panel' },
        { text: '实现新鲜好物', link: '/home/home-new' },
        { text: '实现人气推荐', link: '/home/home-hot' },
        { text: '实现数据懒加载', link: '/home/lazy-data' },
        { text: '实现面板骨架效果', link: '/home/pannel-skeleton' },
        { text: '实现热门品牌', link: '/home/home-brand' },
        { text: '实现产品区块主体', link: '/home/home-product' },
        { text: '实现产品区块右侧', link: '/home/home-goods' },
        { text: '实现图片懒加载', link: '/home/lazyload-image' },
        { text: '实现最新专题', link: '/home/home-special' },
      ]
    },
    {
      text: "一级分类页",
      children: [
        { text: '创建一级分类页面', link: '/home/top-category' },
        { text: '渲染函数', link: '/category/render-function' },
        { text: '面包屑导航概述', link: '/category/bread-overview' },
        { text: '一级面包屑导航', link: '/category/bread-top' },
        { text: '二级面包屑导航', link: '/category/bread-sub' },
        { text: '面包屑导航动画', link: '/category/bread-transition' },
        { text: '一级分类-轮播图', link: '/category/top-carousel' },
        { text: '一级分类-展示二级分类', link: '/category/top-subcategory' },
        { text: '一级分类-商品推荐', link: '/category/goods-recommend' },
        { text: '路由切换页面至顶部', link: '/category/router-toggle-scrolltop' },

      ]
    },
    {
      text: "二级分类页",
      children: [
        { text: '创建二级分类页面', link: '/home/sub-category' },
        { text: '二级分类-筛选组件-数据渲染', link: '/category/subcate-filter-render' },
        { text: '二级分类-筛选组件-收集筛选数据', link: '/category/subcate-filter-data' },
        { text: '二级分类-筛选组件-数据更新', link: '/category/subcate-filter-update' },
        { text: '二级分类-筛选组件-骨架屏', link: '/category/subcate-filter-skeleton' },
        { text: '封装复选框组件', link: '/category/packaged-checked' },
        { text: '二级分类-排序组件', link: '/category/subsort' },
        { text: '二级分类-商品列表渲染', link: '/category/goods-list' },
        { text: '二级分类-商品排序与筛选', link: '/category/goods-sort-filter' },
        { text: '二级分类-加载更多数据', link: '/category/goods-load-more' }
      ]
    },
    {
      text: "商品详情",
      children: [
        { text: '基础布局', link: '/detail/baselayout' },
        { text: '渲染面包屑导航', link: '/detail/breadcrumb' },
        { text: '图片预览组件', link: '/detail/image-preview' },
        { text: '放大镜效果', link: '/detail/magnifier-effect' },
        { text: '商品基本信息展示', link: '/detail/goods-infor-display' },

        { text: '城市选择组件-基础布局', link: '/detail/city-baselayout' },
        { text: '城市选择组件-获取数据', link: '/detail/city-getdata' },
        { text: '城市选择组件-交互逻辑', link: '/detail/city-interact' },

        { text: '规格组件-SPU与SKU', link: '/detail/city-skuspu' },
        { text: '规格组件-基础布局', link: '/detail/goods-sku' },
        { text: '规格组件-数据渲染与选中', link: '/detail/goods-sku-render' },
        { text: '规格组件-禁选效果分析', link: '/detail/goods-sku-analyze' },
        { text: '规格组件-禁用效果实现', link: '/detail/goods-sku-accomplish' },
        { text: '规格组件通讯-默认选中', link: '/detail/goods-sku-default' },
        { text: '规格组件通讯-数据回传', link: '/detail/goods-sku-data' },

        { text: '商品数量选择组件', link: '/detail/numberbox' },
        { text: '按钮组件', link: '/detail/button' },
        { text: '同类推荐组件', link: "/detail/goodsrelevant" },
        { text: '标签页组件', link: "/detail/goodstabs" },
        { text: '热榜组件', link: "/detail/goodshot" },
        { text: '详情组件', link: "/detail/gooddetails" },
        { text: '注意事项组件', link: "/detail/goodswarn" },
        { text: '评价组件-头部渲染', link: "/detail/goodscomment-header" },
        { text: '评价组件-列表渲染', link: "/detail/goodscomment-list" },
        { text: '评价组件-图片预览', link: "/detail/goodscomment-preview" },
        { text: '评价组件-数据排序与筛选', link: "/detail/goodscomment-sort" },
        { text: '分页组件-生成页码数据', link: "/detail/pagination-data" },
        { text: '分页组件-渲染分页数据', link: "/detail/pagination-render" },
        { text: '分页组件-关联评论列表', link: "/detail/pagination-concat" },
      ]
    },
    {
      text: "登录",
      children: [
        { text: '登录-配置路由规则', link: "/login/login-router" },
        { text: '登录-基础布局', link: "/login/login-layout" },
        { text: '登录-表单组件', link: "/login/login-form" },
        { text: '消息提示组件', link: "/login/message" },
        { text: '登录-表单验证', link: "/login/login-validate" },
        { text: '登录-账号密码登录', link: "/login/account-login" },
        { text: '登录-手机号登录-验证码', link: "/login/phone-code" },
        { text: '登录-手机号登录-登录', link: "/login/phone-login" },
        { text: '退出登录', link: "/login/logout" },
        { text: 'QQ登录-流程分析', link: "/login/process" },
        { text: 'QQ登录-准备工作', link: "/login/prepare" },
        { text: 'QQ登录-创建登录按钮', link: "/login/login-button" },
        { text: 'QQ登录-准备回调路由组件', link: "/login/login-callback" },
        { text: 'QQ登录-获取openid', link: "/login/login-openid" },
        { text: 'QQ登录-检索已绑定账号', link: "/login/login-bind" },
        { text: 'QQ登录-绑定已有账号', link: "/login/bind-account" },
        { text: 'QQ登录-绑定新注册账号', link: "/login/bind-new-account" },
      ]
    },
    {
      text: "购物车",
      children: [
        { text: '购物车功能分析', link: "/cart/cart-analyze" },
        { text: '加入购物车-未登录', link: "/cart/cart-add-unlogin" },
        { text: '头部购物车-商品列表渲染-未登录', link: "/cart/cart-header-unlogin" },
        { text: '头部购物车-删除-未登录', link: "/cart/hcart-delete-unlogin" },
        { text: '头部购物车-细节处理', link: "/cart/cart-header-details" },
        { text: '购物车-基础布局', link: "/cart/cart-page" },
        { text: '购物车-数据渲染-未登录', link: "/cart/cart-page-render" },
        { text: '购物车-更新商品列表-未登录', link: "/cart/cart-goods-update" },
        { text: '购物车-单选-未登录', link: "/cart/cart-radio-unlogin" },
        { text: '购物车-全选-未登录', link: "/cart/cart-all-unlogin" },
        { text: '购物车-删除-未登录', link: "/cart/cart-delete-unlogin" },
        { text: '封装确认框组件', link: "/cart/confirm" },
        { text: '购物车-批量删除-清空无效-未登录', link: "/cart/batch-delete" },
        { text: '购物车-更改商品数量-未登录', link: "/cart/update-goods-count" },
        { text: '购物车-规格数据渲染-未登录', link: "/cart/render-spec-data" },
        { text: '购物车-规格数据修改-未登录', link: "/cart/update-spec-data" },


        { text: '购物车-合并购物车-已登录', link: "/cart/combine-cart-login" },
        { text: '购物车-购物车列表-已登录', link: "/cart/cart-list-login" },
        { text: '购物车-加入购物车-已登录', link: "/cart/cart-add-login" },
        { text: '购物车-删除商品-已登录', link: "/cart/cart-delete-login" },
        { text: '购物车-批量删除商品-已登录', link: "/cart/cart-patch-delete-login"},
        { text: '购物车-选中状态和数量-已登录',link: "/cart/cart-checked-login"  },
        { text: '购物车-全选与取消全选-已登录', link: "/cart/cart-checkedall-login"},
        { text: '购物车-修改商品规格-已登录', link: "/cart/cart-specs-login"},
        { text: '清空本地购物车-退出登录', link: "/cart/cart-clear-login"},
        { text: '购物车-下单结算按钮', link: "/cart/cart-settle-login"},
      ]
    },
    {
      text: "结算",
      children: [
        { text: '结算-基础布局', },
        { text: '结算-渲染页面', },
        { text: '结算-对话框组件封装', },
        { text: '结算-收货地址-基础布局', },
        { text: '结算-收货地址-添加', },
        { text: '结算-收货地址-渲染', },
        { text: '结算-收货地址-修改', },
        { text: '结算-收货地址-切换', },
        { text: '结算-提交订单', },
        { text: '支付-基础布局', },
        { text: '支付-信息展示', },
        { text: '支付-支付流程', },
        { text: '支付-跳转支付', },
        { text: '支付-支付结果展示', },
      ]
    },
    {
      text: "个人中心",
      children: [
        { text: '个人中心-布局容器', },
        { text: '个人中心-基础布局', },
        { text: '模拟接口数据', },
        { text: '个人中心-我的收藏', },
        { text: '个人中心-菜单激活', },
        { text: '在vue中使用JSX', },
        { text: '封装XtxTabs组件', },
        { text: '订单管理-渲染订单标题', },
        { text: '订单管理-基础布局', },
        { text: '订单管理-列表渲染', },
        { text: '订单管理-条件查询', },
        { text: '订单管理-取消订单', },
        { text: '订单管理-删除订单', },
        { text: '订单管理-确认收货', },
        { text: '订单管理-查看物流', },
        { text: '订单详情-头部展示', },
        { text: '订单详情-封装步骤条组件', },
        { text: '订单详情-物流信息', },
        { text: '订单详情-商品信息', },
        { text: '订单详情-取消订单', },
        { text: '订单详情-确认收货', },
        { text: '订单详情-再次购买', },
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