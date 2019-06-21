import HkCountup from './hk-countup'
import HkEditor from './hk-editor'
import HkSearch from './hk-search'
import HkSubmit from './hk-submit'
import HkForm from './hk-form'
import HkScrollList from './hk-scroll-list'
import HkPagination from './hk-pagination'
import HkBreadcrumb from './hk-breadcrumb'
// import HkTable from './hk-table'
import hkTableToolbar from './hk-table-toolbar'

export const install = Vue => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkEditor.name, HkEditor)
  Vue.component(HkForm.name, HkForm)
  Vue.component(HkSearch.name, HkSearch)
  Vue.component(HkSubmit.name, HkSubmit)
  Vue.component(HkScrollList.name, HkScrollList)
  Vue.component(HkPagination.name, HkPagination)
  Vue.component(HkBreadcrumb.name, HkBreadcrumb)
  // Vue.component(HkTable.name, HkTable)
  Vue.component(hkTableToolbar.name, hkTableToolbar)
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
  HkPagination,
  HkBreadcrumb,
  // HkTable,
  hkTableToolbar
}

export default install
