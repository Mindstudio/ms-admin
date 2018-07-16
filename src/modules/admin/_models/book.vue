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

      <p>{{ title }}</p>
      <p>{{ author }}</p>
      <p>{{ summary }}</p>
      <p>{{ isbn }}</p>
      <p>{{ genre }}</p>

      <button
        type="button"
        @click="createBook"
        class="border w-1/2 p-1 mt-2 bg-grey-darkest text-grey-lightest">
        Create Book
      </button>
  </div>
</template>

<script>
// import adminAPI from '../_api/adminAPI'

export default {
  name: 'create-book',
  data () {
    return {
      title: '',
      author: '',
      summary: '',
      isbn: '',
      genre: ''
    }
  },
  methods: {
    createBook () {
      this.$store.dispatch('create_book')
    }
  }
  // methods: {
  //   async createBook () {
  //     await adminAPI.createBook({
  //       title: this.title,
  //       author: this.author,
  //       summary: this.summary,
  //       isbn: this.isbn,
  //       genre: this.genre
  //     })
  //   }
  // }
}
</script>

<style lang="css">
</style>
