<template lang="html">
  <div class="py-4 flex flex-col w-1/4">
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

      <!-- <label for="createView">Create a </label>
      <select
        id="model"
        class="mb-2 border p-2 text-sm"
        name="author"
        placeholder="author"
        v-model="author"
        >
        <option
          v-for="author in authors"
          :key="author.id">
          {{ author.first_name }}
        </option>
      </select> -->

    <input
      type="text"
      name="summary"
      placeholder="summary"
      v-model="summary"
      class="mb-2 border p-2 text-sm">

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

      <input
        type="text"
        name="status"
        placeholder="status"
        v-model="status"
        class="mb-2 border p-2 text-sm">

      <p>{{ title }}</p>
      <p>{{ author }}</p>
      <p>{{ summary }}</p>
      <p>{{ isbn }}</p>
      <p>{{ genre }}</p>
      <p>{{ status }}</p>

      <button
        type="button"
        @click="createBook"
        class="border w-1/2 p-1 mt-2 bg-grey-darkest text-grey-lightest">
        Create Book
      </button>
  </div>
</template>

<script>
import booksAPI from '../../_api/booksAPI'

export default {
  name: 'create-book',
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
  methods: {
    async createBook () {
      await booksAPI.createBook({
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

<style lang="css">
</style>
