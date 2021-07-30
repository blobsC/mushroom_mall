/*
 * @author: 陈大帅
 * @Date: 2021-07-13 14:36:40
 * @LastEditTime: 2021-07-29 02:49:48
 * @FilePath: \supermall\mushroom_mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()   //创建事件总线实例

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
