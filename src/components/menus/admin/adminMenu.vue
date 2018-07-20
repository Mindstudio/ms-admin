<template lang="html">
  <nav class="text-xs">
    <router-link
      :to="{ name: 'create' }"
      class="text-grey-darker bg-grey-lighter border font-medium rounded-sm p-1 no-underline"
      tag="button"
      >Create
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'admin-menu'
}
</script>

<style lang="css">
</style>
