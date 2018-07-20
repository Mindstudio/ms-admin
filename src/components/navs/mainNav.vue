<template lang="html">
  <nav class="h-12 border-b shadow flex">
    <div class="container m-auto flex flex-row justify-between items-center">
      <div class="w-1/6 py-1">
        <focus-link></focus-link>
      </div>
      <div class="w-1/3">
        <dir-link class="mr-8"></dir-link>
        <lib-link></lib-link>
      </div>
      <div class="w-1/3 py-1 flex flex-row justify-end">
        <admin-menu></admin-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import dirLink from '@/components/links/dirLink'
import focusLink from '@/components/links/focusLink'
import libLink from '@/components/links/libLink'

import adminMenu from '@/components/menus/admin/adminMenu'

export default {
  name: 'admin-nav',
  components: {
    dirLink,
    focusLink,
    libLink,
    adminMenu
  }
}
</script>

<style lang="css">
</style>
