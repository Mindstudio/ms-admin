import Vue from 'vue'
import Vuex from 'vuex'

import adminAPI from '@/modules/admin/_api/adminAPI'

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
      adminAPI.findBooks().then((res) => {
        commit('set_books', { payload: res.data })
      }, (err) => {
        console.log(err)
      })
    },
    create_book: function () {
      console.log('create_book action')
      adminAPI.createBook({
        title: this.title,
        author: this.author,
        summary: this.summary,
        isbn: this.isbn,
        genre: this.genre
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
    // set_book_info: (state) => {
    //   payload = {
    //     title: this.title,
    //     author: this.author,
    //     summary: this.summary,
    //     isbn: this.isbn,
    //     genre: this.genre
    //   }
    //   console.log('set_book_info')
    // }
  },

  modules: {}

})
