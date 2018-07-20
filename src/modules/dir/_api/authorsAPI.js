import Api from '@/api/Api'

export default {
  createAuthor (params) {
    console.log('createAuthor', params)
    return Api().post(`/api/authors`, params)
  },
  findAuthors () {
    console.log('findAuthors')
    return Api().get(`/api/authors`)
  },
  findAuthorById (id) {
    console.log('findAuthorById', id)
    return Api().get(`/api/authors/author/${id}`)
  },
  updateAuthor (params) {
    console.log('updateAuthor', params)
    return Api().put(`/api/authors/author/${params.id}`, params)
  },
  deleteAuthor (id) {
    console.log('deleteAuthor', id)
    return Api().delete(`/api/authors/author/${id}`)
  }
}
