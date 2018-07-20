import Api from '@/api/Api'

export default {
  createBook (params) {
    console.log(params)
    return Api().post(`/api/books`, params)
  },
  findBooks () {
    console.log('findBooks')
    return Api().get(`/api/books`)
  },
  findBookById (id) {
    console.log('findBookById')
    return Api().get(`/api/books/book/${id}`)
  },
  updateBook (params) {
    console.log('updateBook', params)
    return Api().put(`/api/books/book/${params.id}`, params)
  },
  deleteBook (id) {
    console.log('deleteBook', id)
    return Api().delete(`/api/books/book/${id}`)
  }
}
