<template lang="html">
  <div class="py-4 flex flex-col w-1/4 text-sm text-grey-darkest">
    <label for="first_name">First Name:</label>
    <input
      type="text"
      name="first_name"
      placeholder="first name"
      v-model="first_name"
      class="my-2 border p-2 text-sm"/>

    <label for="last_name">Last Name:</label>
    <input
      type="text"
      name="last_name"
      placeholder="last name"
      v-model="last_name"
      class="my-2 border p-2 text-sm"/>

    <label for="date_of_birth">Date of Birth:</label>
    <input
      type="date"
      name="date_of_birth"
      v-model="date_of_birth"
      class="mb-2 border p-2 text-sm"/>

    <label for="date_of_death">Date of Death:</label>
    <input
      type="date"
      name="date_of_death"
      v-model="date_of_death"
      class="mb-2 border p-2 text-sm"/>

      <p>{{ first_name }}</p>
      <p>{{ last_name }}</p>
      <p>{{ date_of_birth }}</p>
      <p>{{ date_of_death }}</p>

      <button
        type="button"
        @click="createAuthor"
        class="border w-1/2 p-1 mt-2 bg-grey-darkest text-grey-lightest">
        Create Author
      </button>
  </div>
</template>

<script>
import authorsAPI from '../../_api/authorsAPI'

export default {
  name: 'create-author',
  data () {
    return {
      first_name: '',
      last_name: '',
      date_of_birth: '',
      date_of_death: ''
    }
  },
  methods: {
    async createAuthor () {
      await authorsAPI.createAuthor({
        title: this.title,
        author: this.author,
        summary: this.summary,
        isbn: this.isbn,
        genre: this.genre,
        status: this.status
      })
    }
  }
}
</script>

<style lang="css">
</style>
