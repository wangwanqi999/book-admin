import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../commons/utils/mock'
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
// 修改动态网页标题 beforeEach 导航钩子，路由改变前触发
router.beforeEach((to, from, next) => {
  // 打印当前路由路径
  console.error(to.path)
  // 存储当前路由
  const currentRoute = { path: to.fullPath, pageName: to.meta.title }
  localStorage.setItem('currentRoute', JSON.stringify(currentRoute))
  try {
    window.document.title = to.meta.title // 修改页面地址名称
  } catch (error) {
    // 尝试更改title失败
    console.error(error)
  }
  // 判断当前是否登录逻辑
  let userInfo = JSON.parse(JSON.stringify(localStorage.getItem('userInfo')))
  if (!userInfo) {
    userInfo = {}
  }
  // 当前用户没有登录  跳转login也买你
  if (!userInfo && !userInfo.token && to.path !== '/login') {
    console.log(11)
    next('/login')
  } else {
    console.log(to)
    next()
  }
})

// 设置路由滚动控制  每次路由跳转之后 页面自动滚动到顶部
router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
