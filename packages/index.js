import HkCountup from './hk-countup'
import HkForm from './hk-form'
import HkEditor from './hk-editor'
import HkSearch from './hk-search'
import HkButton from './hk-button'
import HkScrollList from './hk-scroll-list'
import HkPagination from './hk-pagination'
import HkBreadcrumb from './hk-breadcrumb'
import HkTable from './hk-table'
import hkTableToolbar from './hk-table-toolbar'
import HkUpload from './hk-upload'
import HkMap from './hk-map'
import HkCityPicker from './hk-city-picker'
import HkProgress from './hk-progress'
import HkEcharts from './hk-echarts'
import HkDialog from './hk-dialog'
import HkPreview from './hk-preview'
import HkDatePicker from './hk-date-picker'
import HkPlayer from './hk-player'
import hkTableColumnsFilter from './hk-table-columns-filter'
import hkFilterTable from './hk-filter-table'
import HKcard from './hk-card'

const install = Vue => {
  Vue.component(HkCountup.name, HkCountup)
  Vue.component(HkForm.name, HkForm)
  Vue.component(HkEditor.name, HkEditor)
  Vue.component(HkSearch.name, HkSearch)
  Vue.component(HkButton.name, HkButton)
  Vue.component(HkScrollList.name, HkScrollList)
  Vue.component(HkPagination.name, HkPagination)
  Vue.component(HkBreadcrumb.name, HkBreadcrumb)
  Vue.component(HkTable.name, HkTable)
  Vue.component(hkTableToolbar.name, hkTableToolbar)
  Vue.component(HkUpload.name, HkUpload)
  Vue.component(HkMap.name, HkMap)
  Vue.component(HkCityPicker.name, HkCityPicker)
  Vue.component(HkProgress.name, HkProgress)
  Vue.component(HkEcharts.name, HkEcharts)
  Vue.component(HkDialog.name, HkDialog)
  Vue.component(HkPreview.name, HkPreview)
  Vue.component(HkDatePicker.name, HkDatePicker)
  Vue.component(HkPlayer.name, HkPlayer)
  Vue.component(hkTableColumnsFilter.name, hkTableColumnsFilter)
  Vue.component(hkFilterTable.name, hkFilterTable)
  Vue.component(HKcard.name, HKcard)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HkCountup,
  HkForm,
  HkEditor,
  HkSearch,
  HkButton,
  HkScrollList,
  HkPagination,
  HkBreadcrumb,
  HkTable,
  hkTableToolbar,
  HkUpload,
  HkMap,
  HkCityPicker,
  HkProgress,
  HkEcharts,
  HkDialog,
  HkPreview,
  HkDatePicker,
  HkPlayer,
  hkTableColumnsFilter,
  hkFilterTable,
  HKcard
}

export default { install }
