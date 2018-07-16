import Api from '@/api/Api'

export default {
  createBook () {
    console.log('createBook')
    return Api().post(`/api/books`)
  },
  findBooks () {
    console.log('findBooks')
    return Api().get(`/api/books`)
  },
  findBookById (_id) {
    console.log('findBookById')
    return Api().get(`/api/books/book/${_id}`)
  }
}
