//异步挂载的路由   路由表  后面优化将此处导出的路由表替换router
//动态需要根据权限加载的路由表
const asyncRouterMap = [
  {
    path: '/main',
    // component: Layout,
    meta: { title: '首页', icon: 'el-icon-menu' },
  },
  {
    path: '/person',
    // component: Layout,
    meta: { title: '个人中心', icon: 'el-icon-menu' },
  },
  {
    path: '/nested',
    // component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '订单',
      icon: 'el-icon-news',
    },
    children: [
      {
        path: 'menu1',
        // component: () => import('@/views/nested/menu1/index'), // Parent router-vie
        name: 'Menu1',
        meta: { title: '我的订单', icon: 'el-icon-news' },
        children: [
          {
            path: 'menu1-1',
            // component: () => import('@/views/nested/menu1/menu1-1/index'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' },
          },
          {
            path: 'menu1-2',
            // component: () => import('@/views/nested/menu1/menu1-2/index'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                // component: () =>
                //   import('@/views/nested/menu1/menu1-2/menu1-2-1/index'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' },
              },
              {
                path: 'menu1-2-2',
                // component: () =>
                //   import('@/views/nested/menu1/menu1-2/menu1-2-2/index'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' },
              },
            ],
          },
          {
            path: 'menu1-3',
            // component: () => import('@/views/nested/menu1/menu1-3/index'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' },
          },
        ],
      },
      {
        path: 'menu2',
        // component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' },
      },
    ],
  },
]
export default asyncRouterMap
