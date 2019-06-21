import HkCountup from './hk-countup'
import HkEditor from './hk-editor'
import HkSearch from './hk-search'
import HkSubmit from './hk-submit'
import HkForm from './hk-form'
import HkButton from './hk-button'
import HkScrollList from './hk-scroll-list'
import HkUpload from './hk-upload'

export const install = Vue => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkEditor.name, HkEditor)
  Vue.component(HkForm.name, HkForm)
  Vue.component(HkSearch.name, HkSearch)
  Vue.component(HkSubmit.name, HkSubmit)
  Vue.component(HkButton.name, HkButton)
  Vue.component(HkScrollList.name, HkScrollList)
  Vue.component(HkUpload.name, HkUpload)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { HkCountup, HkEditor, HkForm, HkButton, HkSubmit, HkSearch, HkScrollList, HkUpload }

export default { install }
