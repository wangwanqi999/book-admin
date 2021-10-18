import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./../commons/routeTable/index.js";
Vue.use(VueRouter);
console.log(routes);
const router = new VueRouter({
  routes,
});
//修改动态网页标题 beforeEach 导航钩子，路由改变前触发
router.beforeEach((to, from, next) => {
  try {
    window.document.title = to.meta.title; //修改页面地址名称                                                                       -++
  } catch (error) {
    // 尝试更改title失败
    console.error(error);
  }
  next();
});

// 设置路由滚动控制  每次路由跳转之后 页面自动滚动到顶部
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
