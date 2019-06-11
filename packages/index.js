import HkCountup from './hk-countup'

export const install = (Vue) => {
  Vue.component(HkCountup.name, HkCountup)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HkCountup
}

export default install
