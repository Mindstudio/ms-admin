<template lang="html">
  <router-link
    :to="{ name: 'view-lib' }"
    class="text-xs py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
    tag="button"
    >Library
  </router-link>
</template>

<script>
export default {
  name: 'lib-link'
}
</script>

<style lang="css">
</style>
