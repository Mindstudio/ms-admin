import Vue from 'vue'
import Vuex from 'vuex'

import adminAPI from '@/modules/admin/_api/adminAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {}
  },

  getters: {
    // getBookById: (state) => (id) => {
    //   return state.books.find(book => book._id === id)
    // }
  },

  actions: {
    // load_items: function ({ commit }) {
    //   axios.get('/items').then((res) => {
    //     commit('set_items', { payload: res.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
    load_items: function ({ commit }) {
      adminAPI.findItems().then((res) => {
        commit('set_items', { payload: res.data })
      }, (err) => {
        console.log(err)
      })
    }
  },

  mutations: {
    // set_items: (state, { payload }) => {
    //   state.data.items = payload
    // },
    set_items: (state, { payload }) => {
      state.items = payload
    }
  },

  modules: {}

})
