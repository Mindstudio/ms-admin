<template lang="html">
  <div class="">

    <div class="flex flex-row px-3 py-3">

      <div class="w-full p-3 flex flex-col justify-between">

        <div class="border h-48 p-3 mb-6 text-xs">
          TODO: control panel
          {{ this.user }}
        </div>

        <div class="h-216">
          <div class="flex flex-col">

            <div class="flex flex-row text-xs text-grey-darkest h-8">
              <div class="w-1/5 border bg-grey-lightest p-2">
                _id
              </div>
              <div class="w-1/5 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Genre
              </div>
              <div class="w-7/20 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Title
              </div>
              <div class="w-1/10 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Status
              </div>
              <div class="w-3/20 text-xs border-r border-b border-t bg-grey-lightest p-2">
                Actions
              </div>
            </div>

            <div
            class="flex flex-row text-xs text-grey-dark" v-for="book in books"
            :key="book._id">
              <div class="w-1/5 border-r border-l border-b p-2 flex books-center">
                <router-link :to="{ name: 'view-lib-item', params: { id: book._id } }">
                  {{ book._id }}
                </router-link>
              </div>
              <div class="w-1/5 border-r border-b p-2 flex books-center">
                {{ book.genre[0] }}
              </div>
              <div class="w-7/20 border-r border-b p-2 leading-normal flex books-center">
                {{ book.title }}
              </div>
              <div class="w-1/10 border-r border-b p-2 flex books-center">
                {{ book.status }}
              </div>
              <div class="w-3/20 border-r border-b flex flex-row justify-around books-center">
                <router-link
                  :to="{ name: 'update-lib-item', params: { id: book._id } }"
                  class="text-grey-darker hover:text-grey-lightest bg-grey-lighter hover:bg-orange font-medium rounded-sm px-1 no-underline"
                  tag="button">
                  Update
                </router-link>
                <button
                  @click="deleteItem(book._id)"
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
import booksAPI from '../_api/booksAPI'

import { mapActions } from 'vuex'

export default {
  name: 'view-lib',
  // TODO: ...mapActions
  mounted: function () {
    this.getBooks()
  },
  computed: {
    books () {
      return this.$store.state.libModule.books
    },
    user () {
      return this.$store.state.libModule.user
    }
  },
  methods: {
    // getBooks () {
    //   return this.$store.dispatch('loadBooks')
    // },
    ...mapActions('libModule', {
      getBooks: 'loadBooks'
    }),
    async deleteItem (id) {
      await booksAPI.deleteBook(id)
      this.getBooks()
    }
  }
}
</script>

<style lang="css">
</style>
