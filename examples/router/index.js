import Vue from 'vue'
import Router from 'vue-router'

import Home from 'views/home'

import guide from './guide'
import component from './component'
import error404 from './error404'

Vue.use(Router)

export const publicRouter = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

export default new Router({
  auth: true,
  routes: publicRouter
})

/*
* 动态nav路由, 显示在菜单栏
* icon: 路由icon图标
* authority: 访问路由所需权限, Array
* keepAlivePath: 菜单栏高亮路由
* hide: 是否隐藏子路由
*/
export const navRouter = [
  guide,
  component,
  error404
]
