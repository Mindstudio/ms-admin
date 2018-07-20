<template lang="html">
  <div class="p-4 flex flex-col w-2/5">
    <label for="first_name" class="p-1">First Name:</label>
    <input
      type="text"
      name="first_name"
      placeholder="first name"
      v-model="first_name"
      class="mb-2 border p-2 text-sm">

    <label for="last_name" class="p-1">Last Name:</label>
    <input
      type="text"
      name="last_name"
      placeholder="last name"
      v-model="last_name"
      class="mb-2 border p-2 text-sm">

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
        @click="updateAuthor"
        class="border w-1/2 p-1 mt-2 bg-grey-darkest text-grey-lightest">
        Update Author
      </button>

  </div>
</template>

<script>
import authorsAPI from '../_api/authorsAPI'

export default {
  name: 'update-dir-item',
  data () {
    return {
      first_name: '',
      last_name: '',
      date_of_birth: '',
      date_of_death: ''
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    getItem () {
      const item = this.$store.getters.getAuthorById(this.$route.params.id)
      this.id = item._id
      this.first_name = item.first_name
      this.last_name = item.last_name
      this.date_of_birth = item.date_of_birth
      this.date_of_death = item.date_of_death
    },
    async updateAuthor () {
      console.log(this.id)
      await authorsAPI.updateAuthor({
        id: this.id,
        first_name: this.first_name,
        last_name: this.last_name,
        date_of_birth: this.date_of_birth,
        date_of_death: this.date_of_death
      })
      this.$router.push({ name: 'view-dir' })
    }
  }
}
</script>

<style scoped>
</style>
