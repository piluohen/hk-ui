import HkCountup from './hk-countup'
import HkPagination from './hk-pagination'

export const install = (Vue) => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkPagination.name, HkPagination)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HkCountup,
  HkPagination
}

export default install
