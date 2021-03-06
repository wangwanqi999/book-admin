import Vue from 'vue'
// 导入根实例
import App from './App.vue'
// 导入路由
import router from './router'
import store from './store'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)

// 导入element
import ElementUI from './commons/utils/diologHelper'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入组件表
// import componentObject from '@/components/componentsTable/index.js'
// 插件安装
// // 注册组件

Vue.config.productionTip = false
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error)
}
// api.virapi.com / vir_githubhf816e48h91g / demo / visualapi

// 生成vue实例
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
