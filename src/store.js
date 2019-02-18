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
      state.savedShows.push(state)
    }
  },
  getters: {
    getShowList: state => state.showList
  },
  actions: {
    updateShowList ({ commit, state }) {
      showsList().then(resp => commit('SET_SHOW_LIST', resp))
    }
  }
})
