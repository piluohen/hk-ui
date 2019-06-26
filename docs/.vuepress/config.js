const baseMap = {
  dev: '/',
  test: '/hk-ui-test/web/',
  prod: '/hk-ui/web/'
}
let component = [
  'hk-button',
  'hk-countup',
  'hk-editor',
  'hk-form',
  'hk-search',
  'hk-scroll-list',
  'hk-pagination',
  'hk-breadcrumb',
  'hk-table-toolbar',
  'hk-table',
  'hk-upload',
  'hk-preview',
  'hk-map',
  'hk-city-picker',
  'hk-progress',
  'hk-echarts',
  'hk-dialog'
]
module.exports = {
  base: baseMap[process.env.ENV],
  title: 'Hk-ui',
  description: 'Hk-ui',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '组件',
        link: '/component/hk-countup'
      }
    ],
    sidebar: {
      '/component/': component
    },
    lastUpdated: '最后更新',
    repo: 'http://gitlab.hekr.me/front-end/hk-ui',
    repoLabel: 'GitLab'
  },
  markdown: {
    anchor: { permalink: true }
  },
  extendMarkdown: md => {
    // 使用更多的 markdown-it 插件!
    md.use(require('markdown-it-checkbox')).use(require('markdown-it-kbd'))
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom', 'demo-block'],
  serviceWorker: true
}
