import {customersData} from '../../mockData/mockData'

export default {
  state: {
    customersGlobal: []
  },
  getters: {
    getCustomersGlobal(state) {
      return state.customersGlobal
    }
  },
  mutations: {
    setCustomersGlobal(state, customers) {
      state.customersGlobal = customers
    }
  },
  actions: {
    loadCustomersGlobal({commit}) {
      commit('setCustomersGlobal', customersData)
    }
  },
}