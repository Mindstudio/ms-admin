<template lang="html">
  <div class="">
    <!-- TODO: library menu // named route? -->
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import mainNav from '../components/navs/mainNav'

export default {
  name: 'admin-main',
  components: {
    mainNav
  }
}
</script>

<style lang="css">
</style>
