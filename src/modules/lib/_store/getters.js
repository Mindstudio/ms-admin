const getBookById = (state) => (id) => {
  return state.books.find(book => book._id === id)
}

export default {
  getBookById
}
