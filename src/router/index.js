import Vue from 'vue'
import Router from 'vue-router'

import adminRoutes from '@/router/admin.routes.js'
import dirRoutes from '@/modules/dir/_routes/dir.routes.js'
import libRoutes from '@/modules/lib/_routes/lib.routes.js'

Vue.use(Router)

const baseRoutes = []

const routes = baseRoutes.concat(
  adminRoutes,
  dirRoutes,
  libRoutes
)

export default new Router({
  mode: 'history',
  path: '/',
  routes
})
