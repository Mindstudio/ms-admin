<template lang="html">
  <div class="p-4 flex flex-col w-2/5">
    <label for="title" class="p-1">Title:</label>
    <input
      type="text"
      name="title"
      placeholder="title"
      v-model="title"
      class="mb-2 border p-2 text-sm">

    <input
      type="text"
      name="author"
      placeholder="author"
      v-model="author"
      class="mb-2 border p-2 text-sm">

    <textarea
      type="textarea"
      rows="18"
      name="summary"
      placeholder="summary"
      v-model="summary"
      class="mb-2 border p-2 text-sm">
    </textarea>

    <input
      type="text"
      name="isbn"
      placeholder="isbn"
      v-model="isbn"
      class="mb-2 border p-2 text-sm">

    <input
      type="text"
      name="genre"
      placeholder="genre"
      v-model="genre"
      class="mb-2 border p-2 text-sm">

      <button
        type="button"
        @click="updateBook"
        class="border w-1/2 p-1 mt-2 bg-grey-darkest text-grey-lightest">
        Update Book
      </button>

      {{ this.title }}
      {{ this.status }}
  </div>
</template>

<script>
import booksAPI from '../_api/booksAPI'

export default {
  name: 'update-lib-item',
  data () {
    return {
      title: '',
      author: '',
      summary: '',
      isbn: '',
      genre: '',
      status: ''
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    getItem () {
      const item = this.$store.getters.getBookById(this.$route.params.id)
      this.id = item._id
      this.title = item.title
      this.author = item.author
      this.summary = item.summary
      this.isbn = item.isbn
      this.genre = item.genre
      this.status = item.status
    },
    async updateBook () {
      console.log(this.id)
      await booksAPI.updateBook({
        id: this.id,
        title: this.title,
        author: this.author,
        summary: this.summary,
        isbn: this.isbn,
        genre: this.genre,
        status: this.status
      })
      this.$router.push({ name: 'view-lib' })
    }
  }
}
</script>

<style scoped>
</style>
