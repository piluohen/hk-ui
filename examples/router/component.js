// 布局页面
import Layout from '@/components/layout/index.vue'
import AsideLayout from '@/components/layout/aside-layout'

import Component from '@/views/component'

// 组件
const Countup = () => import('views/component/countup')
// 表格
const Table = () => import('views/component/table')

export default {
  path: '/component',
  redirect: '/component/index',
  component: Layout,
  meta: {},
  children: [
    {
      path: 'index',
      redirect: '/component/index/countup',
      name: 'Component',
      component: Component,
      meta: {
        icon: 'el-icon-setting',
        title: '组件'
      },
      children: [
        {
          path: 'countup',
          redirect: '/component/index/countup',
          component: AsideLayout,
          meta: {
            icon: 'el-icon-setting'
          },
          children: [
            {
              path: '',
              name: 'Countup',
              component: Countup,
              meta: {
                icon: 'el-icon-setting',
                title: 'countup 组件'
              }
            }
          ]
        },
        {
          path: 'table',
          redirect: '/component/index/table',
          component: AsideLayout,
          meta: {
            icon: 'el-icon-setting'
          },
          children: [
            {
              path: '',
              name: 'Table',
              component: Table,
              meta: {
                icon: 'el-icon-setting',
                title: 'table 组件'
              }
            }
          ]
        }
      ]
    }
  ]
}
