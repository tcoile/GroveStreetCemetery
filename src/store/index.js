import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    page: 0,
    marker: 0,
    apikey : "AIzaSyDn3JZPmqYtO73Cd4r1b-x1ClNlF0NsXf8",
    google : Object,
    // map : Object
  },

  //action calls the mutation which actually changes the state
  mutations: {
    incrementPage (state, payload) {
      state.page = (state.page + payload) % 3
    },
    setPage (state, payload) {
      state.page = payload
    },
    incrementMarker (state, payload) {
      state.marker = (state.marker + payload) % 6
    },
    setMarker (state, payload) {
      state.marker = payload
    },
    setGoogle(state, payload) {
      state.google = payload
    },
    // setMap(state, payload) {
    //   state.map = new payload;
    // }
  },

  //what you would call in the component
  //always do $store.dispatch('ACTION NAME') AND payload is the argument
  actions: {
    incrementActionPage ({commit}, payload) {
      commit('incrementPage', payload)
    },
    setActionPage ({commit}, payload) {
      commit('setPage', payload)
    },
    incrementActionMarker ({commit}, payload) {
      commit('incrementMarker', payload)
    },
    setActionMarker ({commit}, payload) {
      commit('setMarker', payload)
    },
    setActionGoogle({commit}, payload) {
      commit('setGoogle', payload)
    },
    // setActionMap({commit}, payload) {
    //   commit('setMap', payload)
    // }
  },

  getters: {
    page (state) {
      return state.page
    },
    marker (state) {
     return state.marker
    },
    google (state) {
      return state.google
    },
    // map(state) {
    //   return state.map
    // },
    apikey(state) {
      return state.apikey
    }
  }
})