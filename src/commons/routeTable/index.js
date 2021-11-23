const routes = [
  // 主页面路由表
  {
    path: '/',
    name: 'home',
    // 设置冲定向主页
    redirect: { name: 'mainPage', path: '/main' },
    component: () => {
      return import('../../views/Home')
    },
    meta: { title: '页面', icon: 'el-icon-news' },
    // 主页面子路由
    children: [
      {
        path: '/main',
        name: 'mainPage',
        meta: { title: '主页面', icon: 'el-icon-news' },
        component: () => {
          return import('../../views/Main')
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '用户登录', icon: 'el-icon-news' },
    component: () => {
      return import('../../views/Login')
    }
  },
  //   全局404页面
  {
    path: '*',
    name: '404',
    meta: { title: '页面丢失', icon: 'el-icon-news' },
    component: () => {
      return import('../../views/About')
    }
  }
]
export default routes
