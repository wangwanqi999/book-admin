// 如首页和登录页和一些不用权限的公用页面
import main from '../../views/Main/index'
import nested from '../../views/nested/index'
import menu1 from '../../views/nested/menu1/index'
import menu_1 from '../../views/nested/menu1/menu1-1/index'
const commonsRouter = [
  // 主页面路由表
  {
    path: '/',
    name: 'home',
    redirect: { path: '/main' },
    component: () => {
      return import('@/views/Home/index')
    },
    meta: { title: '页面', icon: 'el-icon-news' },
    children: [
      {
        path: '/main',
        component: main,
        meta: {
          title: '监控中心',
          icon: 'el-icon-video-camera'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '用户登录', icon: 'el-icon-news' },
    component: () => {
      return import('@/views/Login')
    }
  },
  //   全局404页面
  {
    path: '*',
    name: '404',
    meta: { title: '页面丢失', icon: 'el-icon-news' },
    component: () => {
      return import('@/views/About')
    }
  }
]

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/main',
    // component: () => {
    //   import("@/views/Main/index");
    // },
    parentId: '0',
    component: main,
    meta: {
      title: '监控中心',
      icon: 'el-icon-video-camera'
    }
  },
  {
    path: '/nested',
    parentId: '0',
    component: nested,
    name: 'nested',
    meta: {
      title: '通用工具类',
      icon: 'el-icon-news'
    },
    children: [
      {
        path: '/nested/menu1',
        parentId: '/nested',
        component: menu1,
        meta: { title: '图标类' },
        name: 'menu1',
        children: [
          {
            path: '/nested/menu1/menu1-1',
            parentId: '/nested/menu1',
            component: menu_1,
            meta: { title: '视频播放' }
          }
        ]
      }
    ]
  }
]
// 合并路由
const routes = commonsRouter
routes[0].children = asyncRouterMap
export default routes
