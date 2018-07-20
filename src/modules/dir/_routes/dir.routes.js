import adminContainer from '@/containers/Admin'
import adminMain from '@/views/adminMain'
import dirMain from '../_containers/dirMain'

import viewDir from '../_views/viewDir'
import viewDirItem from '../_views/viewDirItem'
import updateDirItem from '../_views/updateDirItem'

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
            component: dirMain,
            children: [
              {
                name: 'view-dir',
                path: 'dir',
                component: viewDir
              },
              {
                name: 'view-dir-item',
                path: 'view/:id',
                component: viewDirItem
              },
              {
                name: 'update-dir-item',
                path: 'update/:id',
                component: updateDirItem
              }
            ]
          }
        ]
      }
    ]
  }
]
