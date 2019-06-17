const baseMap = {
  dev: '/',
  test: '/hk-ui-test/web/',
  prod: '/hk-ui/web/'
}
module.exports = {
  base: baseMap[process.env.ENV],
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
        link: '/component/hk-countup'
      }
    ],
    sidebar: {
      '/component/': [
        'hk-countup',
        'table',
        'hk-form',
        'hk-city-picker'
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