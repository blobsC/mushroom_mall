<!--
 * @author: 陈大帅
 * @Date: 2021-08-06 12:46:59
 * @LastEditTime: 2021-08-07 02:36:22
 * @FilePath: \supermall\mushroom_mall\src\views\cart\childComps\carBottomBar.vue
-->
@<template>
    <div class="bottom-menu">
    <checkButton class="select-all" :isChecked="isSelectAll" @click.native="checkClick"></checkButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">买单({{checkLength}})</span>
  </div>
</template>

<script>

import checkButton from './checkButton.vue'

import { mapGetters } from 'vuex'

export default {
  components: { checkButton },
  computed: {
    ...mapGetters(['cartList']),

    /**结账栏有关的计算 */
    totalPrice() {
      return this.cartList.filter(item => item.isChecked).reduce((preValue,item) => {
        return preValue +  item.price * item.count
      },0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.isChecked).length
    },

    /**点击全选按钮*/
    isSelectAll() {
      if(this.cartList.length === 0) return false

      // return !this.cartList.find(item => !item.isChecked)
       return this.cartList.every(item => item.isChecked == true)
      // return this.cartList.some(item => item.isChecked == false ? false : true )
      // return !this.cartList.some(item => item.isChecked == false)
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) { //全部选中状态
        this.cartList.forEach(item => item.isChecked = false);
      } else { //部分或者全部没选中
        this.cartList.forEach(item => item.isChecked = true);
      }
    }
  }
}
</script>

<style>
   .bottom-menu {
    width: 100%;
    height: 40px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 40px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: #800;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>