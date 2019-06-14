module.exports = {
  base: './',
  title: 'Hk-ui',
  description: 'Hk-ui',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '组件',
        link: '/component/countup'
      }
    ],
    sidebar: {
      '/component/': [
        'countup',
        'table'
      ]
    },
    lastUpdated: '最后更新',
    repo: 'http://gitlab.hekr.me/front-end/hk-ui',
    repoLabel: 'GitLab',
  },
  markdown: {
    anchor: { permalink: true }
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  serviceWorker: true
}