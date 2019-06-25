import Element from 'element-ui'
import Packages from '../../packages'
import './public/style/index.scss'

export default ({ Vue }) => {
  Vue.use(Element)
  Vue.use(Packages)
}
