import booksAPI from '@/modules/lib/_api/booksAPI'

const loadBooks = ({ commit }) => {
  booksAPI.findBooks()
    .then((res) => {
      commit('setBooks', { payload: res.data })
    })
    .catch((err) => {
      console.log(err)
    })
}

export default {
  loadBooks
}
