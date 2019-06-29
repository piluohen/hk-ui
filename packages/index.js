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

const components = [
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
  hkFilterTable
]

const install = Vue => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
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
  hkFilterTable
}

export default { install }
