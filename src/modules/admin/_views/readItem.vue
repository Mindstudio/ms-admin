<template lang="html">
  <div class="">
    <p>
      {{ book._id }}
    </p>
    <p>
      {{ book.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'read-item',
  computed: {
    book () {
      return this.$store.getters.getBookById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
