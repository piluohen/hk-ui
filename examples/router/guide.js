// 布局页面
import Layout from '@/components/layout/index.vue'

import Guide from '@/views/guide'

// 指南

export default {
  path: '/guide',
  redirect: '/guide',
  component: Layout,
  meta: {},
  children: [
    {
      path: '',
      name: 'Guide',
      component: Guide,
      meta: {
        icon: 'el-icon-setting',
        title: '指南'
      }
    }
  ]
}
