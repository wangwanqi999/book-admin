import sLoading from './../s-loading.vue'
export default {
  install(Vue, options) {
    // Vue  接受参数vue实例对象
    // options  接受传入参数 配置项
    // 一 创建一个子类 参数是包含组件选项的对象
    const loading = Vue.extend(sLoading)
    // 创建一个loading实例对象
    const profail = new loading({ el: document.createElement('div') })
    // 将对象的dom挂载到body上
    // 不能使用app
    // document.getElementById('app').appendChild(profail.$el)
    document.body.appendChild(profail.$el)
    // 插件接收值  options
    if (options) {
      // 在vue.use时判断参数 如果use时传入了参数 就jin行更改类型
      // 1.更改icon图标
      if (options.icon) {
        profail.icon = options.icon
      }
      // 2.更改字体颜色
      if (options.color) {
        profail.color = options.color
      }
      // 3.如需进行后续操作 可将其进行设置传入更多参数。。。。。。。。。。
    }
    const profailMethod = {
      open() {
        profail.show = true
      },
      closed() {
        profail.show = false
      },
    }
    Vue.prototype.$sloading = profailMethod
  },
}
