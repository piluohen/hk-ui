import Vue from 'vue'
import Router from 'vue-router'
import component from './component'

Vue.use(Router)

export const publicRouter = [
  {
    path: '/',
    redirect: '/countup'
  },
  component
]

export default new Router({
  auth: true,
  routes: publicRouter
})
