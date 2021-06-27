import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import Page from './Page/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // modules
    Page
  }
})
