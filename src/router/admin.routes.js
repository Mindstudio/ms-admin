import adminContainer from '@/containers/Admin'
import adminMain from '@/views/adminMain'

import createView from '@/views/createView'
import dash from '@/views/dash'

export default [
  {
    path: '/',
    component: adminContainer,
    children: [
      {
        path: '/',
        component: adminMain,
        children: [
          {
            name: 'create',
            path: '/create',
            component: createView
          },
          {
            name: 'dash',
            path: '/dash',
            component: dash
          }
        ]
      }
    ]
  }
]
