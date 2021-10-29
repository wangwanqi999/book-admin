"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("./../commons/routeTable/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

console.log(_index["default"]);
var router = new _vueRouter["default"]({
  routes: _index["default"]
}); //修改动态网页标题 beforeEach 导航钩子，路由改变前触发

router.beforeEach(function (to, from, next) {
  // 存储当前路由
  var currentRoute = {
    path: to.fullPath,
    pageName: to.meta.title
  };
  localStorage.setItem('currentRoute', JSON.stringify(currentRoute));

  try {
    window.document.title = to.meta.title; //修改页面地址名称
  } catch (error) {
    // 尝试更改title失败
    console.error(error);
  } // 判断当前是否登录逻辑


  var userInfo = JSON.parse(JSON.stringify(localStorage.getItem('userInfo'))); // 当前用户没有登录  跳转login也买你

  if (!userInfo && !userInfo.token && to.path != '/login') {
    console.log(11);
    next('/login');
  } else {
    next();
  }
}); // 设置路由滚动控制  每次路由跳转之后 页面自动滚动到顶部

router.afterEach(function () {
  window.scrollTo(0, 0);
});
var _default = router;
exports["default"] = _default;