"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//异步挂载的路由   路由表  后面优化将此处导出的路由表替换router
//动态需要根据权限加载的路由表
// 此处路由表为动态路由  还需要一个固定路由 来显示404页面页面 以及 login页面
// 思路 : 将主路由home下面的children替换为当前路由
var asyncRouterMap = [// 主页面
{
  path: '/main',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Main/index.vue'));
    });
  },
  meta: {
    title: '首页',
    icon: 'el-icon-menu'
  }
}, {
  path: '/404',
  // component: Layout,
  meta: {
    title: '未发现页面',
    icon: 'el-icon-menu'
  }
}, {
  path: '/nested',
  // component: Layout,
  redirect: '/nested/menu1',
  name: 'Nested',
  meta: {
    title: '订单',
    icon: 'el-icon-news'
  },
  children: [{
    path: 'menu1',
    // component: () => import('@/views/nested/menu1/index'), // Parent router-vie
    name: 'Menu1',
    meta: {
      title: '我的订单',
      icon: 'el-icon-setting'
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
      }
    }, {
      path: 'menu1-3',
      // component: () => import('@/views/nested/menu1/menu1-3/index'),
      name: 'Menu1-3',
      meta: {
        title: 'Menu1-3'
      }
    }]
  }]
}];
var _default = asyncRouterMap;
exports["default"] = _default;