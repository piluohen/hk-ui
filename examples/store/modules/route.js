import { navRouter, publicRouter } from '@/router/index'

// 判断是否有权限
function hasPermission (roles, route) {
  if (route.meta && route.meta.authority) {
    return roles.some(role => route.meta.authority.includes(role))
  } else {
    return true
  }
}

// 过滤路由
function filterAsyncRouter (navRouter, roles) {
  const accessedRouters = navRouter.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length > 0) {
        route.children = filterAsyncRouter(route.children, roles)
        if (route.redirect && route.children[0].path) {
          let arr = route.redirect.split('/')
          arr[arr.length - 1] = route.children[0].path
          route.redirect = arr.join('/')
        }
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const route = {
  state: {
    addRouters: [], // 动态路由
    routers: [] // 全部路由
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = publicRouter.concat(routers)
    }
  },
  actions: {
    GenerateRoutes: ({ commit }, { data }) => {
      return new Promise(resolve => {
        let accessedRouters = filterAsyncRouter(navRouter, data)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default route
