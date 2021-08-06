/*
 * @author: 陈大帅
 * @Date: 2021-07-13 14:36:40
 * @LastEditTime: 2021-08-07 03:44:29
 * @FilePath: \supermall\mushroom_mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//自己封装toast插件
import toast from 'components/common/toast/index.js'

// 导入fastclick插件
import fastclick from 'fastclick'

//导入图片懒加载插件
import vuelazyload from 'vue-lazyload'


Vue.config.productionTip = false

 //添加事件总线对象
Vue.prototype.$bus = new Vue()  

//安装自己封装的toast插件
Vue.use(toast)

//解决移动端300ms延迟问题
fastclick.attach(document.body)

//使用图片懒加载
Vue.use(vuelazyload,{
  loading: require('./assets/img/common/kobe.gif')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
