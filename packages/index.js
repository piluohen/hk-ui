import HkCountup from './hk-countup'
import HkEditor from './hk-editor'
import hkSearch from './hk-search'
import hkSubmit from './hk-submit'
import hkForm from './hk-form'
export const install = Vue => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkEditor.name, HkEditor)
  Vue.component(hkForm.name, hkForm)
  Vue.component(hkSearch.name, hkSearch)
  Vue.component(hkSubmit.name, hkSubmit)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { HkCountup, HkEditor, hkForm, hkSubmit, hkSearch }

export default install
