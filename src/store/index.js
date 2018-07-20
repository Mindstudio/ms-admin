import Vue from 'vue'
import Vuex from 'vuex'

import authorsAPI from '@/modules/dir/_api/authorsAPI'

import libModule from '@/modules/lib/_store/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authors: {},
    user: {
      name: 'Wesley'
    }
  },

  getters: {
    getAuthorById: (state) => (id) => {
      return state.authors.find(author => author._id === id)
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
    load_authors: function ({ commit }) {
      authorsAPI.findAuthors().then((res) => {
        commit('set_authors', { payload: res.data })
      }, (err) => {
        console.log(err)
      })
    }
  },

  mutations: {
    // set_items: (state, { payload }) => {
    //   state.data.items = payload
    // },
    set_authors: (state, { payload }) => {
      state.authors = payload
    }
  },

  modules: {
    libModule
  }

})
