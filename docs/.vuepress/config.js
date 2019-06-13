module.exports = {
  title: 'Hk-ui',
  description: 'Hk-ui',
  head: [
    ['link', { rel: 'icon', href: '/image/favicon.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/component/' }
    ],
    sidebar: {
      '/component/': [
        'countup',
        'table'
      ]
    }
  }
}