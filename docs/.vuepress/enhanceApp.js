// import VueHighlightJS from 'vue-highlight.js';
import Element from 'element-ui'
import '../../theme/index.css'
import Packages from '../../packages'
import './public/style/var.css'

export default ({ Vue }) => {
  Vue.use(Element)
  Vue.use(Packages)
}
