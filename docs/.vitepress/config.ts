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
        { text: '项目介绍', link: '/documents/introduce' },
      ]
    },
    {
      text: "首页模块",
      children: [
        { text: '顶部通栏', link: '/documents/home_topnav' },
      ]
    }
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