import Vue from 'vue'
import Vuex from 'vuex'

// import user from './modules/user'
// import route from './modules/route'
// import authority from './modules/authority'
// import storage from './modules/storage'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules: {
  //   user,
  //   route,
  //   authority,
  //   storage
  // },
  getters
})

export default store
