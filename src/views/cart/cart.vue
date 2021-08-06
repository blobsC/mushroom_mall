<!--
 * @author: 陈大帅
 * @Date: 2021-07-06 19:42:16
 * @LastEditTime: 2021-08-06 12:56:45
 * @FilePath: \supermall\mushroom_mall\src\views\cart\cart.vue
-->
@<template>
  <div class="cart">
    <!-- 导航栏--购物车 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar> 

    <!-- 选购的商品内容 -->
    <cart-list></cart-list>

    <!-- 底部汇总 -->
    <car-bottom-bar></car-bottom-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'

import { mapGetters } from 'vuex'
import CartList from './childComps/cartList.vue'
import CarBottomBar from './childComps/carBottomBar.vue'

export default {
  name: 'cart',
  components: {
    NavBar,
    CartList,
    CarBottomBar
  },
  computed: {
    //在veux的getters中 解构出来直接赋值方法在计算属性中
    ...mapGetters(['cartLength','cartList'])
  }

}
</script>

<style scoped>
  .nav-bar {
    background-color: #800;
    color: #fff;
    font-weight: 666
  }
</style>