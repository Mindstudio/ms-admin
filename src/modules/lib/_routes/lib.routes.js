import adminContainer from '@/containers/Admin'
import adminMain from '@/views/adminMain'
import libMain from '../_containers/libMain'

import viewLib from '../_views/viewLib'
import viewLibItem from '../_views/viewLibItem'
import updateLibItem from '../_views/updateLibItem'

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
            path: '/',
            component: libMain,
            children: [
              {
                name: 'view-lib',
                path: 'lib',
                component: viewLib
              },
              {
                name: 'view-lib-item',
                path: 'view/:id',
                component: viewLibItem
              },
              {
                name: 'update-lib-item',
                path: 'update/:id',
                component: updateLibItem
              }
            ]
          }
        ]
      }
    ]
  }
]
