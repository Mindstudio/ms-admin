import Api from '@/api/Api'

export default {
  createAuthor (params) {
    console.log('createAuthor', params)
    return Api().post(`/api/authors`, params)
  }
}
