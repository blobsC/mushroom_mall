/*
 * @author: 陈大帅
 * @Date: 2021-08-05 15:51:39
 * @LastEditTime: 2021-08-07 01:59:17
 * @FilePath: \supermall\mushroom_mall\src\store\mutations.js
 */

export default {
    addCount(state,payload) {
      payload.count += 1
    },
    addToCart(state,payload) {
      payload.isChecked = false
      state.cartList.push(payload)
    }
}