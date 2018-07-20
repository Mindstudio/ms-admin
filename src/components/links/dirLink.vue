<template lang="html">
  <router-link
    :to="{ name: 'view-dir' }"
    class="text-xs py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
    tag="button"
    >Directory
  </router-link>
</template>

<script>
export default {
  name: 'dir-link'
}
</script>

<style lang="css">
</style>
