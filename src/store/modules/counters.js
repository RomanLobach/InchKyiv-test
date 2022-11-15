export default {
  state: {
    counter: {
      counterOne: 0,
      counterTwo: 0,
      counterThree: 0
    }
  },
  getters: {
    getCounter({counter}) {
      return counter
    },
  },
  mutations: {
    setCounter({counter}, counterNumber) {
      counter.counterNumber = counter.counterNumber + 1;
    },
    zeroCounter({counter}) {
      counter.counterOne =0;
      counter.counterTwo =0;
      counter.counterThree =0
    }
  },
  actions: {
    initiateCounter({commit, state}) {
      commit('zeroCounter', state)
    },
    changeCounter({commit}, counterNumber) {
      commit('setCounter', counterNumber);
    }
  },
}