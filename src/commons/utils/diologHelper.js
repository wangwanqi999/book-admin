import Vue from 'vue'
import sButton from '../../components/s-button.vue'

//这里的 icon 要换成你本地的   注册loading组件
import myLoading from '../.././components/componentsTable/s-loading'
console.log(myLoading)
// 局部注册组件
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification,
} from 'element-ui'
console.log(Dialog)
const openAfter = function () {
  // 在body上添加classname名称为allblur的类名
  document.getElementById('app').classList.add('allblur')
  // 同时出发打开事件
  this.$emit('opened')
}
// 重写打开事件
Dialog.methods.open = openAfter
const leaveAfter = function () {
  document.getElementById('app').classList.remove('allblur')
  // 同时触发关闭事件
  this.$emit('closed')
}
// 重写关闭事件
Dialog.methods.closed = leaveAfter
const ElementUI = {
  install: function () {
    Vue.use(sButton)
    Vue.use(Pagination)
    Vue.use(Dialog)
    Vue.use(Autocomplete)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Input)
    Vue.use(InputNumber)
    Vue.use(Radio)
    Vue.use(RadioGroup)
    Vue.use(RadioButton)
    Vue.use(Checkbox)
    Vue.use(CheckboxButton)
    Vue.use(CheckboxGroup)
    Vue.use(Switch)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Button)
    Vue.use(ButtonGroup)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(DatePicker)
    Vue.use(TimeSelect)
    Vue.use(TimePicker)
    Vue.use(Popover)
    Vue.use(Tooltip)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Tag)
    Vue.use(Tree)
    Vue.use(Alert)
    Vue.use(Slider)
    Vue.use(Icon)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Upload)
    Vue.use(Progress)
    Vue.use(Spinner)
    Vue.use(Badge)
    Vue.use(Card)
    Vue.use(Rate)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Collapse)
    Vue.use(CollapseItem)
    Vue.use(Cascader)
    Vue.use(ColorPicker)
    Vue.use(Transfer)
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Timeline)
    Vue.use(TimelineItem)
    Vue.use(Link)
    Vue.use(Divider)
    Vue.use(Image)
    Vue.use(Calendar)
    Vue.use(Backtop)
    Vue.use(PageHeader)
    Vue.use(CascaderPanel)
    Vue.use(Loading.directive)
    Vue.use(myLoading, {
      icon: require('../../assets/mainLogo.jpeg'),
      progressColor: 'blue',
    })
  },
}
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
export default ElementUI
