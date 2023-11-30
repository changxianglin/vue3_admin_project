import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pageination/index.vue'
import Category from './Category/index.vue'

const allGlobalComponent = {
  SvgIcon,
  Pagination,
  Category,
}

export default {
  install(app) {
    Object.keys(allGlobalComponent).forEach(key => {
      app.component(key, allGlobalComponent[key])
    })
  }
}