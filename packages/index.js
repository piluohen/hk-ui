import HkCountup from './hk-countup'
import HkForm from './hk-form'
import HkCityPicker from './hk-city-picker'

export const install = (Vue) => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkForm.name, HkForm)
  Vue.component(HkCityPicker.name, HkCityPicker)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HkCountup,
  HkForm,
  HkCityPicker
}

export default install
