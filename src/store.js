import Vue from 'vue'
import Vuex from 'vuex'
import { showsList } from './services/TvshowService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showList: [],
    savedShows: []
  },
  mutations: {
    SET_SHOW_LIST (state, payload) {
      state.showList = payload
    },
    SET_SAVED_SHOW (state, payload) {
      state.savedShows.push(payload)
    }
  },
  getters: {
    getShowList: state => state.showList,
    getSavedShows: state => state.savedShows
  },
  actions: {
    updateShowList ({ commit, state }) {
      showsList().then(resp => commit('SET_SHOW_LIST', resp))
    },
    handleSavedshow ({ commit, state }, id) {
      if (state.savedShows.indexOf(id) < 1) {
        commit('SET_SAVED_SHOW', id)
      }
    }
  }
})
