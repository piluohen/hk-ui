import HkCountup from './hk-countup'
import HkForm from './hk-form'
import HkCityPicker from './hk-city-picker'
import HkEditor from './hk-editor'
import HkSearch from './hk-search'
import HkSubmit from './hk-submit'
import HkProgress from './hk-progress'

export const install = (Vue) => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkForm.name, HkForm)
  Vue.component(HkCityPicker.name, HkCityPicker)
  Vue.component(HkEditor.name, HkEditor)
  Vue.component(HkSearch.name, HkSearch)
  Vue.component(HkSubmit.name, HkSubmit)
  Vue.component(HkProgress.name, HkProgress)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { HkCountup, HkCityPicker, HkEditor, HkForm, HkSubmit, HkSearch, HkProgress }

export default install
