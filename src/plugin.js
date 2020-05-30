import MFissionList from './components/FissionScroll.vue'
import MLoading from './components/loading.vue'

const allComponents = {
  MFissionList,
  MLoading
}

export default {
  install(Vue) {
    Object.keys(allComponents).forEach((key) => {
      Vue.component(key, allComponents[key])
    })
  }
}
