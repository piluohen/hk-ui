import HkCountup from './hk-countup'
import HkForm from './hk-form'

export const install = (Vue) => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkForm.name, HkForm)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HkCountup,
  HkForm
}

export default install
