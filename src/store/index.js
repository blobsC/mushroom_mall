/*
 * @author: 陈大帅
 * @Date: 2021-07-13 14:36:40
 * @LastEditTime: 2021-08-05 17:09:27
 * @FilePath: \supermall\mushroom_mall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
