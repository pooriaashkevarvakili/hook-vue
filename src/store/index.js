import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:0
  },
  getters:{
    counter(state){
      return state.counter
    }
  },
  mutations: {
    setCounter(state,data){
state.counter+=data
    }
  },
  actions: {
    increment(context){
      context.commit('setCounter',1)
    }
  },
  modules: {
  }
})
