<template lang="html">
  <div class="">

    <div class="flex flex-row px-3 py-3">

      <div class="w-full p-3 flex flex-col justify-between">

        <div class="border h-48 p-3 mb-6 text-xs">
          TODO: control panel
        </div>

        <div class="h-216">
          <div class="flex flex-col">

            <div class="flex flex-row text-xs text-grey-darkest h-8">
              <div class="w-1/5 border bg-grey-lightest p-2">
                Name
              </div>
              <div class="w-1/5 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Date of Birth
              </div>
              <div class="w-7/20 text-xs border-r border-b border-t bg-grey-lightest p-2">
                ..
              </div>
              <div class="w-1/10 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Status
              </div>
              <div class="w-3/20 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Actions
              </div>
            </div>

            <div
            class="flex flex-row text-xs text-grey-dark" v-for="author in authors"
            :key="author._id">
              <div class="w-1/5 border-r border-l border-b p-2 flex items-center">
                <router-link :to="{ name: 'view-dir-item', params: { id: author._id } }">
                  {{ author.first_name }} {{ author.last_name }}
                </router-link>
              </div>
              <div class="w-1/5 border-r border-b p-2 flex items-center">
                {{ author.date_of_birth }}
              </div>
              <div class="w-7/20 border-r border-b p-2 leading-normal flex items-center">

              </div>
              <div class="w-1/10 border-r border-b p-2 flex items-center">
                ...
              </div>
              <div class="w-3/20 border-r border-b flex flex-row justify-around items-center">
                <router-link
                  :to="{ name: 'update-dir-item', params: { id: author._id } }"
                  class="text-grey-darker hover:text-grey-lightest bg-grey-lighter hover:bg-orange font-medium rounded-sm px-1 no-underline"
                  tag="button">
                  Update
                </router-link>
                <button
                  @click="deleteItem(author._id)"
                  class="text-grey-darker hover:text-grey-lightest bg-grey-lighter hover:bg-red font-medium rounded-sm px-1 no-underline">
                  Delete
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import authorsAPI from '../_api/authorsAPI'

export default {
  name: 'view-dir',
  // TODO: ...mapActions
  mounted: function () {
    this.getAuthors()
  },
  computed: {
    authors () {
      return this.$store.state.authors
    }
  },
  methods: {
    getAuthors () {
      return this.$store.dispatch('load_authors')
    },
    async deleteItem (id) {
      await authorsAPI.deleteAuthor(id)
      this.getAuthors()
    }
  }
}
</script>

<style lang="css">
</style>
