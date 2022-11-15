import Vue from 'vue'
import Vuex from 'vuex'
import customers from '../store/modules/customers'
import counters from '../store/modules/counters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customers,
    counters,
  }
})
