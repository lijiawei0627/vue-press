module.exports = {
  title: '国内定制组', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '国内定制的WEB需求管理', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
      ['link', 
          { rel: 'icon', href: '/logo.png' }
          //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
      ],  
  ],
  markdown: {
    lineNumbers: true
  },
  serviceWorker: true,
  themeConfig: {    
      logo: '/logo.png',
      lastUpdated: 'lastUpdate', // string | boolean
      nav: [
          { text: '首页', link: '/' },
          {
              text: '分类',
              ariaLabel: '分类',
              items: [
                  { text: 'OEM', link: '/pages/frontEndBusiness/test1.md' },
                  { text: '佳发大客户', link: '/pages/frontEndBusiness/test2.md' },
              ]
          },
          { text: '功能演示', link: '/pages/frontEndBusiness/test3.md' },
          { text: 'Github', link: 'https://github.com' },
      ],
      sidebar: {
          '/pages/frontEndBusiness/':[
              {
                  title: '测试菜单1',   // 必要的
                  collapsable: false, // 可选的, 默认值是 true,
                  sidebarDepth: 1,    // 可选的, 默认值是 1
                  children: [
                      ['test1.md', '子菜单1'],
                      ['test2.md', '子菜单2']
                  ]
              },
              {
                  title: '测试菜单2',
                  collapsable: false, // 可选的, 默认值是 true,
                  children: [
                      ['test3.md', '子菜单1']
                  ]
              }
          ],
      }
  }
}
