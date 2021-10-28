"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _sButton = _interopRequireDefault(require("../../components/s-button.vue"));

var _sLoading = _interopRequireDefault(require("../../components/componentsTable/s-loading"));

var _sMenu = _interopRequireDefault(require("../../views/Home/s-menu.vue"));

var _type = require("./type");

var _elementUi = require("element-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导入自定义指令
var filters = {
  getToString: _type.getToString
}; //这里的 icon 要换成你本地的   注册loading组件
// 局部注册组件

var openAfter = function openAfter() {
  // 在body上添加classname名称为allblur的类名
  document.getElementById('app').classList.add('allblur'); // 同时出发打开事件

  this.$emit('opened');
}; // 重写打开事件


_elementUi.Dialog.methods.open = openAfter;

var leaveAfter = function leaveAfter() {
  document.getElementById('app').classList.remove('allblur'); // 同时触发关闭事件

  this.$emit('closed');
}; // 重写关闭事件


_elementUi.Dialog.methods.closed = leaveAfter;
var componentObject = {
  sButton: _sButton["default"],
  sMenu: _sMenu["default"]
};
var ElementUI = {
  install: function install() {
    for (var key in componentObject) {
      console.log(key);

      _vue["default"].component(key, componentObject[key]);
    }

    Object.keys(filters).forEach(function (key) {
      _vue["default"].filter(key, filters[key]);
    });

    _vue["default"].use(_elementUi.Pagination);

    _vue["default"].use(_elementUi.Dialog);

    _vue["default"].use(_elementUi.Autocomplete);

    _vue["default"].use(_elementUi.Dropdown);

    _vue["default"].use(_elementUi.DropdownMenu);

    _vue["default"].use(_elementUi.DropdownItem);

    _vue["default"].use(_elementUi.Menu);

    _vue["default"].use(_elementUi.Submenu);

    _vue["default"].use(_elementUi.MenuItem);

    _vue["default"].use(_elementUi.MenuItemGroup);

    _vue["default"].use(_elementUi.Input);

    _vue["default"].use(_elementUi.InputNumber);

    _vue["default"].use(_elementUi.Radio);

    _vue["default"].use(_elementUi.RadioGroup);

    _vue["default"].use(_elementUi.RadioButton);

    _vue["default"].use(_elementUi.Checkbox);

    _vue["default"].use(_elementUi.CheckboxButton);

    _vue["default"].use(_elementUi.CheckboxGroup);

    _vue["default"].use(_elementUi.Switch);

    _vue["default"].use(_elementUi.Select);

    _vue["default"].use(_elementUi.Option);

    _vue["default"].use(_elementUi.OptionGroup);

    _vue["default"].use(_elementUi.Button);

    _vue["default"].use(_elementUi.ButtonGroup);

    _vue["default"].use(_elementUi.Table);

    _vue["default"].use(_elementUi.TableColumn);

    _vue["default"].use(_elementUi.DatePicker);

    _vue["default"].use(_elementUi.TimeSelect);

    _vue["default"].use(_elementUi.TimePicker);

    _vue["default"].use(_elementUi.Popover);

    _vue["default"].use(_elementUi.Tooltip);

    _vue["default"].use(_elementUi.Breadcrumb);

    _vue["default"].use(_elementUi.BreadcrumbItem);

    _vue["default"].use(_elementUi.Form);

    _vue["default"].use(_elementUi.FormItem);

    _vue["default"].use(_elementUi.Tabs);

    _vue["default"].use(_elementUi.TabPane);

    _vue["default"].use(_elementUi.Tag);

    _vue["default"].use(_elementUi.Tree);

    _vue["default"].use(_elementUi.Alert);

    _vue["default"].use(_elementUi.Slider);

    _vue["default"].use(_elementUi.Icon);

    _vue["default"].use(_elementUi.Row);

    _vue["default"].use(_elementUi.Col);

    _vue["default"].use(_elementUi.Upload);

    _vue["default"].use(_elementUi.Progress);

    _vue["default"].use(_elementUi.Spinner);

    _vue["default"].use(_elementUi.Badge);

    _vue["default"].use(_elementUi.Card);

    _vue["default"].use(_elementUi.Rate);

    _vue["default"].use(_elementUi.Steps);

    _vue["default"].use(_elementUi.Step);

    _vue["default"].use(_elementUi.Carousel);

    _vue["default"].use(_elementUi.CarouselItem);

    _vue["default"].use(_elementUi.Collapse);

    _vue["default"].use(_elementUi.CollapseItem);

    _vue["default"].use(_elementUi.Cascader);

    _vue["default"].use(_elementUi.ColorPicker);

    _vue["default"].use(_elementUi.Transfer);

    _vue["default"].use(_elementUi.Container);

    _vue["default"].use(_elementUi.Header);

    _vue["default"].use(_elementUi.Aside);

    _vue["default"].use(_elementUi.Main);

    _vue["default"].use(_elementUi.Footer);

    _vue["default"].use(_elementUi.Timeline);

    _vue["default"].use(_elementUi.TimelineItem);

    _vue["default"].use(_elementUi.Link);

    _vue["default"].use(_elementUi.Divider);

    _vue["default"].use(_elementUi.Image);

    _vue["default"].use(_elementUi.Calendar);

    _vue["default"].use(_elementUi.Backtop);

    _vue["default"].use(_elementUi.PageHeader);

    _vue["default"].use(_elementUi.CascaderPanel);

    _vue["default"].use(_elementUi.Loading.directive);

    _vue["default"].use(_sLoading["default"], {
      icon: require('../../assets/mainLogo.jpeg'),
      progressColor: 'blue',
      text: '正在加载中。。。。。。'
    });
  }
};
_vue["default"].prototype.$loading = _elementUi.Loading.service;
_vue["default"].prototype.$msgbox = _elementUi.MessageBox;
_vue["default"].prototype.$alert = _elementUi.MessageBox.alert;
_vue["default"].prototype.$confirm = _elementUi.MessageBox.confirm;
_vue["default"].prototype.$prompt = _elementUi.MessageBox.prompt;
_vue["default"].prototype.$notify = _elementUi.Notification;
_vue["default"].prototype.$message = _elementUi.Message;
var _default = ElementUI;
exports["default"] = _default;