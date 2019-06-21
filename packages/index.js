import HkCountup from './hk-countup'
import HkEditor from './hk-editor'
import HkSearch from './hk-search'
import HkSubmit from './hk-submit'
import HkForm from './hk-form'
import HkScrollList from './hk-scroll-list'
import HkUpload from './hk-upload'

const components = {
  HkCountup,
  HkEditor,
  HkForm,
  HkSubmit,
  HkSearch,
  HkScrollList,
  HkUpload
}

let componentList = Object.keys(components)

const install = Vue => {
  componentList.forEach(item => {
    Vue.component(components[item].name, components[item])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HkCountup,
  HkEditor,
  HkForm,
  HkSubmit,
  HkSearch,
  HkScrollList,
  HkUpload
}

export default { install }
