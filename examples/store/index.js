import Vue from 'vue'
import Vuex from 'vuex'

import route from './modules/route'
// import authority from './modules/authority'
// import storage from './modules/storage'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    route
  //   authority,
  //   storage
  },
  getters
})

export default store
