/*
 * @author: 陈大帅
 * @Date: 2021-08-05 16:44:47
 * @LastEditTime: 2021-08-05 17:08:38
 * @FilePath: \supermall\mushroom_mall\src\store\getters.js
 */

export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  }
}