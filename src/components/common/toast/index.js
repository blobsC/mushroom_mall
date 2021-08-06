/*
 * @author: 陈大帅
 * @Date: 2021-08-07 01:03:09
 * @LastEditTime: 2021-08-07 01:31:19
 * @FilePath: \supermall\mushroom_mall\src\components\common\toast\index.js
 */

import Toast from './toast'

const obj = {}

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2.new的方式,根据组件构造器可以创建出来一组组件对象
  const toast = new toastContrustor()

  //3.将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el对应的就是上面的div创建的模板
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj