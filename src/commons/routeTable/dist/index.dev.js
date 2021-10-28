"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var routes = [// 主页面路由表
{
  path: '/',
  name: 'home',
  // 设置冲定向主页
  // redirect: { name: 'mainPage', path: '/main' },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../../views/Home'));
    });
  },
  meta: {
    title: '页面',
    icon: 'el-icon-news'
  },
  // 主页面子路由
  children: [{
    path: '/main',
    name: 'mainPage',
    meta: {
      title: '主页面',
      icon: 'el-icon-news'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../../views/Main'));
      });
    }
  }]
}, {
  path: '/login',
  name: 'login',
  meta: {
    title: '用户登录',
    icon: 'el-icon-news'
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../../views/Login'));
    });
  }
}, //   全局404页面
{
  path: '*',
  name: '404',
  meta: {
    title: '页面丢失',
    icon: 'el-icon-news'
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../../views/About'));
    });
  }
}];
var _default = routes;
exports["default"] = _default;