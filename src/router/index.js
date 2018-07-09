import Vue from 'vue'
import Router from 'vue-router'

import adminRoutes from '@/modules/admin/_routes/admin.routes.js'

Vue.use(Router)

const baseRoutes = []

const routes = baseRoutes.concat(
  adminRoutes
)

export default new Router({
  mode: 'history',
  path: '/',
  routes
})
