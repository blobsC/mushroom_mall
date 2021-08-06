/*
 * @author: 陈大帅
 * @Date: 2021-08-05 16:06:32
 * @LastEditTime: 2021-08-07 02:03:30
 * @FilePath: \supermall\mushroom_mall\src\store\actions.js
 */

export default {
    addCart({state,commit},payload) {
      return new Promise((resolve,reject) => {
        //查找cartlist 数组中是否有该商品
        let olrProduct = state.cartList.find((item) => {
          return item.id === payload.id         
        })
    
        if(olrProduct) {
          commit('addCount',olrProduct)
          resolve('该衣服已加购' + olrProduct.count + '件'  )         
          
        } else {
          payload.count = 1 
          commit('addToCart',payload)
          resolve('已添加购物车')
        } 
      })   
    }   
}