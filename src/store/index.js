import Vue from 'vue'
import Vuex from 'vuex'

import booksAPI from '@/modules/lib/_api/booksAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: {}
  },

  getters: {
    getBookById: (state) => (id) => {
      return state.books.find(book => book._id === id)
    }
  },

  actions: {
    // load_items: function ({ commit }) {
    //   axios.get('/items').then((res) => {
    //     commit('set_items', { payload: res.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
    load_books: function ({ commit }) {
      booksAPI.findBooks().then((res) => {
        commit('set_books', { payload: res.data })
      }, (err) => {
        console.log(err)
      })
    }
  },

  mutations: {
    // set_items: (state, { payload }) => {
    //   state.data.items = payload
    // },
    set_books: (state, { payload }) => {
      state.books = payload
    }
  },

  modules: {}

})
