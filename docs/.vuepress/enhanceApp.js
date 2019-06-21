// import VueHighlightJS from 'vue-highlight.js';
import Element from 'element-ui'
import '../../theme/index.css'
import Packages from '../../packages'
import './public/style/var.css'

console.log(Packages)

export default ({ Vue }) => {
  Vue.use(Element)
  Vue.use(Packages)
}
