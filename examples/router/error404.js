// 布局页面
import Layout from '@/components/layout/index.vue'
import Error404 from '@/views/error/404'

export default {
  path: '*',
  redirect: '/404',
  component: Layout,
  meta: {
    icon: '',
    hide: true
  },
  children: [
    {
      path: '',
      name: 'Error404',
      meta: {
        title: '404页面'
      },
      component: Error404
    }
  ]
}
