<template lang="html">
  <div class="">
    <p>
      {{ author._id }}
    </p>
    <p>
      {{ author.first_name }} {{ author.last_name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'view-dir-item',
  computed: {
    author () {
      return this.$store.getters.getAuthorById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
