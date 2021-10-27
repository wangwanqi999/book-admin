"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _diologHelper = _interopRequireDefault(require("./commons/utils/diologHelper"));

require("element-ui/lib/theme-chalk/index.css");

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导入根实例
// 导入路由
// 导入element
_vue["default"].use(_diologHelper["default"]); // 导入组件表
// import componentObject from '@/components/componentsTable/index.js'
// 插件安装
// // 注册组件
// for (const key in componentObject) {
//   Vue.component(key, componentObject[key])
// }


_vue["default"].config.productionTip = false;
var routerPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return routerPush.call(this, location)["catch"](function (error) {
    return error;
  });
}; // 生成vue实例


new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');