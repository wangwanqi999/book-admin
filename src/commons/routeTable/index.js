const routes = [
  // 主页面路由表
  {
    path: "/",
    name: "Home",
    // 设置冲定向主页
    redirect: { name: "main", path: "/main" },
    component: "Home",
    // 主页面子路由
    children: [
      {
        path: "/main",
        name: "main",
        meta: { title: "主页面" },
        component: "Main",
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "用户登录" },
    component: "Login",
  },
  //   全局404页面
  {
    path: "*",
    name: "404",
    mate: { title: "页面丢失" },
    component: "About",
  },
];
// 获取路由信息方法
let getRoutes = function () {
  // 自动生成路由
  createRoute(routes);
  return routes; //此处返回的是已经更改的原值
};
// 自动生成路由
function createRoute(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].component) return;

    // 自动去除name方法  默认赋值不进行替换
    let val = getIndexVal(arr[i].component);
    console.log(val);
    arr[i].name = arr[i].name || val.replace(/\//g, "_"); //全局正则替换斜杠
    // 自动去除path方法 默认赋值不进行替换
    arr[i].path = arr[i].path || `${val}`;
    // 自动生成component
    let componentFun = import(`../../views/${arr[i].component}/index.vue`);
    arr[i].component = () => componentFun;
    if (arr[i].children && arr[i].children.length > 0) {
      createRoute(arr[i].children);
    }
  }
}
// 去除index  返回截取字符号串
function getIndexVal(str) {
  if (!str) return "";
  //  獲取index下標
  let index = str.lastIndexOf("/");
  // 判断是否以index结尾
  if (str.substring(index + 1, str.length) === "index") {
    return str.substring(0, index);
  }
  return str;
}
export default getRoutes();
