"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//异步挂载的路由
//动态需要根据权限加载的路由表
var asyncRouterMap = [{
  path: '/main',
  // component: Layout,
  meta: {
    title: 'main',
    icon: 'el-icon-menu'
  }
}, {
  path: '/nested',
  // component: Layout,
  redirect: '/nested/menu1',
  name: 'Nested',
  meta: {
    title: '多级菜单',
    icon: 'el-icon-news'
  },
  children: [{
    path: 'menu1',
    // component: () => import('@/views/nested/menu1/index'), // Parent router-view
    name: 'Menu1',
    meta: {
      title: 'Menu1'
    },
    children: [{
      path: 'menu1-1',
      // component: () => import('@/views/nested/menu1/menu1-1/index'),
      name: 'Menu1-1',
      meta: {
        title: 'Menu1-1'
      }
    }, {
      path: 'menu1-2',
      // component: () => import('@/views/nested/menu1/menu1-2/index'),
      name: 'Menu1-2',
      meta: {
        title: 'Menu1-2'
      },
      children: [{
        path: 'menu1-2-1',
        // component: () =>
        //   import('@/views/nested/menu1/menu1-2/menu1-2-1/index'),
        name: 'Menu1-2-1',
        meta: {
          title: 'Menu1-2-1'
        }
      }, {
        path: 'menu1-2-2',
        // component: () =>
        //   import('@/views/nested/menu1/menu1-2/menu1-2-2/index'),
        name: 'Menu1-2-2',
        meta: {
          title: 'Menu1-2-2'
        }
      }]
    }, {
      path: 'menu1-3',
      // component: () => import('@/views/nested/menu1/menu1-3/index'),
      name: 'Menu1-3',
      meta: {
        title: 'Menu1-3'
      }
    }]
  }, {
    path: 'menu2',
    // component: () => import('@/views/nested/menu2/index'),
    meta: {
      title: 'menu2'
    }
  }]
}];
var _default = asyncRouterMap;
exports["default"] = _default;