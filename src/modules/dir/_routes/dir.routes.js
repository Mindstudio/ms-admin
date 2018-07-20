import adminContainer from '@/containers/Admin'
import adminMain from '@/views/adminMain'
import dirMain from '../_containers/dirMain'

import viewDir from '../_views/viewDir'

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
                path: 'view/dir',
                component: viewDir
              }
            ]
          }
        ]
      }
    ]
  }
]
