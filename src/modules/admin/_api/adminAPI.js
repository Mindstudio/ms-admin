import Api from '@/api/Api'

export default {
  findItems () {
    return Api().get(`/api/books`)
  }
}
