import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Packages from '../../packages'

export default ({
  Vue
}) => {
  Vue.use(Element)
  Vue.use(Packages)
}