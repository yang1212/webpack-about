import Vue from 'vue'
import Vuex from 'vuex'
import homeData from './homeData'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    homeData
  }
})

export default store
