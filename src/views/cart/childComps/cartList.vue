<!--
 * @author: 陈大帅
 * @Date: 2021-08-05 18:31:33
 * @LastEditTime: 2021-08-07 03:05:14
 * @FilePath: \supermall\mushroom_mall\src\views\cart\childComps\cartList.vue
-->
@<template>
  <div id="cartList">
    <scroll ref="scroll">
      <cart-list-item 
                    v-for="(item,index) in cartList" 
                    :key="index"
                    :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>

import CartListItem from './cartListItem.vue'
import scroll from 'components/common/scroll/scroll'

import { mapGetters } from 'vuex'


export default {
  components: {
    scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  },

}
</script>

<style scoped>

  .wrapper {
     height: calc(100vh - 44px - 49px - 40px - 49px);
     overflow: hidden; 
    }
  .content {
     height: 100%
  } 
</style>