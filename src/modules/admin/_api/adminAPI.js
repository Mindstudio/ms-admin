import Api from '@/api/Api'

export default {
  createBook () {
    return Api().post(`/api/books`)
  },
  findBooks () {
    return Api().get(`/api/books`)
  },
  findBookById (_id) {
    return Api().get(`/api/books/book/${_id}`)
  }
}
