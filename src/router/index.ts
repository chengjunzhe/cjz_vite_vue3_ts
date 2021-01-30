import { createRouter, createWebHistory } from 'vue-router'
import BlankView from '../layout/BlankView.vue'

const routes: Array<any> = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/index.html',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: {
      title: '登录页'
    },
    component: (): any => import('../layout/LoginLayout.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/one',
    hidden: false,
    meta: {
      title: '菜单一',
      icon: 'HeartOutlined'
    },
    component: (): any => import('../layout/BaseLayout.vue'),
    children: [
      {
        path: '/home/one',
        name: 'HomeOne',
        hidden: false,
        meta: {
          title: '单元一',
          pName: ['Home']
        },
        component: (): any => import('../views/HomeOne.vue')
      },
      {
        path: '/home/two',
        name: 'HomeTwo',
        redirect: '/home/two/one',
        hidden: false,
        meta: {
          title: '单元二',
          icon: 'FunnelPlotOutlined'
        },
        component: BlankView,
        children: [
          {
            path: '/home/two/one',
            name: 'HomeTwoOne',
            hidden: false,
            meta: {
              title: '部分一',
              pName: ['Home', 'HomeTwo']
            },
            component: (): any => import('../views/HomeTwoOne.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/pussy',
    name: 'Pussy',
    hidden: false,
    meta: {
      title: '菜单二',
      icon: 'MenuUnfoldOutlined'
    },
    component: (): any => import('../layout/BaseLayout.vue')
  },
  {
    path: '/fuck',
    name: 'Fuck',
    hidden: false,
    meta: {
      title: '菜单三',
      icon: 'DesktopOutlined'
    },
    component: (): any => import('../layout/BaseLayout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
